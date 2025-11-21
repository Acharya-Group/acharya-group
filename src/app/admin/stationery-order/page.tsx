"use client";

import React, { useState, useEffect } from "react";
import AdminLayout from "@/componets/admin/AdminLayout";
import { FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";
import useStationeryOrder, { StationeryOrder } from "@/hooks/stationeryOrder";
import { CSVLink } from "react-csv";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const OrdersPage: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  // FIRST HOOK: react-query data
  const { allOrders, updateOrder, deleteOrder } = useStationeryOrder();

  // SECOND HOOK: pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // THIRD + FOURTH HOOK: filters
  const [paymentFilter, setPaymentFilter] = useState("all");
  const [kioskFilter, setKioskFilter] = useState("");

  // LAST HOOK (safe): mounted
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  if (allOrders.isLoading)
    return (
      <AdminLayout>
        <p>Loading orders...</p>
      </AdminLayout>
    );

  const orders = allOrders.data || [];

  // ------------------------------------------
  // FILTER LOGIC (ONLY PAYMENT + KIOSK)
  // ------------------------------------------
  const filteredOrders = orders.filter((o) => {
    const matchesPayment =
      paymentFilter === "all" ? true : o.paymentStatus === paymentFilter;

    const matchesKiosk =
      kioskFilter.trim() === ""
        ? true
        : (o.kioskId ?? "").toLowerCase().includes(kioskFilter.toLowerCase());

    return matchesPayment && matchesKiosk;
  });

  // Pagination
  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirst, indexOfLast);

  // Copy
  const copyData = () => {
    navigator.clipboard.writeText(JSON.stringify(filteredOrders, null, 2));
    toast.success("Copied to clipboard!");
  };

  // ------------------------------------------
  // PDF EXPORT (FIXED ITEMS + CLEAN DATA)
  // ------------------------------------------
  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text("Stationery Orders", 14, 16);

    const tableData = filteredOrders.map((o) => [
      o.createdAt ? o.createdAt.split("T")[0] : "",
      o.name ?? "",
      o.phoneNo ?? "",
      o.amount ?? "",
      o.paymentStatus ?? "",
      o.transactionId ?? "",
      o.kioskId ?? "",
      o.address ?? "",
      o.pinCode ?? "",
      o.status ?? "",
      o.items
        ?.map((item) => `${item.type} (${item.quantity})`)
        .join(", ") ?? "",
    ]);

    autoTable(doc, {
      head: [
        [
          "Date",
          "Name",
          "Phone",
          "Amount",
          "Payment",
          "Txn ID",
          "Kiosk",
          "Address",
          "Pin",
          "Status",
          "Items",
        ],
      ],
      body: tableData,
      startY: 20,
    });

    doc.save("orders-list.pdf");
  };

  // Status Update
  const handleStatusChange = (order: StationeryOrder, newStatus: string) => {
    updateOrder.mutate(
      { ...order, status: newStatus },
      {
        onSuccess: () => toast.success("Order status updated!"),
        onError: () => toast.error("Failed to update status"),
      }
    );
  };

  // Delete
  const handleDelete = (id: string) => {
    if (!confirm("Delete this order?")) return;
    deleteOrder.mutate(id, {
      onSuccess: () => toast.success("Order deleted!"),
      onError: () => toast.error("Delete failed"),
    });
  };

  // ------------------------------------------
  // FIX CSV — items converted to string
  // ------------------------------------------
  const csvData = filteredOrders.map((o) => ({
    Date: o.createdAt ? o.createdAt.split("T")[0] : "",
    Name: o.name ?? "",
    Phone: o.phoneNo ?? "",
    Amount: o.amount ?? "",
    Payment: o.paymentStatus ?? "",
    TransactionID: o.transactionId ?? "",
    Kiosk: o.kioskId ?? "",
    Address: o.address ?? "",
    Pin: o.pinCode ?? "",
    Status: o.status ?? "",
    Items:
      o.items?.map((item) => `${item.type} (${item.quantity})`).join(", ") ??
      "",
  }));

  return (
    <AdminLayout>
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold mb-6">Orders</h1>

        {/* Export Buttons */}
        <div className="flex flex-wrap gap-2 mb-4">
          <button onClick={copyData} className="px-4 py-2 bg-gray-200 rounded">
            Copy
          </button>

          <CSVLink
            data={csvData}
            filename="orders.csv"
            className="px-4 py-2 bg-gray-200 rounded"
          >
            CSV
          </CSVLink>

          <button onClick={exportPDF} className="px-4 py-2 bg-gray-200 rounded">
            PDF
          </button>

          <button
            onClick={() => window.print()}
            className="px-4 py-2 bg-gray-200 rounded"
          >
            Print
          </button>
        </div>

        {/* FILTERS ONLY (Payment + Kiosk) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Payment Filter */}
          <select
            value={paymentFilter}
            onChange={(e) => {
              setPaymentFilter(e.target.value);
              setCurrentPage(1);
            }}
            className="p-2 border rounded"
          >
            <option value="all">All Payments</option>
            <option value="success">Success</option>
            <option value="failed">Failed</option>
            <option value="pending">Pending</option>
          </select>

          {/* Kiosk Filter */}
          <input
            type="text"
            placeholder="Filter by kiosk ID..."
            value={kioskFilter}
            onChange={(e) => {
              setKioskFilter(e.target.value);
              setCurrentPage(1);
            }}
            className="p-2 border rounded"
          />
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="min-w-[1500px] divide-y divide-gray-200 w-full">
            <thead className="bg-secondary text-white">
              <tr>
                <th className="px-4 py-2 text-left">#</th>
                <th className="px-4 py-2 text-left">Date</th>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Phone</th>
                <th className="px-4 py-2 text-left">Amount</th>
                <th className="px-4 py-2 text-left">Payment</th>
                <th className="px-4 py-2 text-left">Txn ID</th>
                <th className="px-4 py-2 text-left">Kiosk ID</th>
                <th className="px-4 py-2 text-left">Address</th>
                <th className="px-4 py-2 text-left">Pin</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Items</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {currentOrders.map((order, index) => (
                <tr key={order._id}>
                  <td className="px-4 py-2">
                    {(currentPage - 1) * itemsPerPage + index + 1}
                  </td>

                  <td className="px-4 py-2">
                    {order.createdAt?.split("T")[0] ?? ""}
                  </td>

                  <td className="px-4 py-2">{order.name ?? ""}</td>

                  <td className="px-4 py-2">{order.phoneNo ?? ""}</td>

                  <td className="px-4 py-2">{order.amount ?? ""}</td>

                  <td className="px-4 py-2">{order.paymentStatus ?? ""}</td>

                  <td className="px-4 py-2">{order.transactionId ?? ""}</td>

                  <td className="px-4 py-2">{order.kioskId ?? ""}</td>

                  <td className="px-4 py-2">
                    <div className="max-h-[100px] p-2 border rounded overflow-y-auto">
                      {order.address ?? ""}
                    </div>
                  </td>

                  <td className="px-4 py-2">{order.pinCode ?? ""}</td>

                  <td className="px-4 py-2">
                    <select
                      value={order.status ?? "pending"}
                      onChange={(e) =>
                        handleStatusChange(order, e.target.value)
                      }
                      className="p-1 border rounded"
                    >
                      <option value="pending">Pending</option>
                      <option value="processing">Processing</option>
                      <option value="completed">Completed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </td>

                  <td className="px-4 py-2">
                    <ul className="list-disc pl-4">
                      {order.items?.map((item, i) => (
                        <li key={i}>
                          {item.type} - {item.quantity}
                        </li>
                      )) ?? ""}
                    </ul>
                  </td>

                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleDelete(order._id)}
                      className="p-2 bg-red-500 text-white rounded"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-4">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Prev
          </button>

          <span>
            Page {currentPage} of {totalPages || 1}
          </span>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default OrdersPage;
