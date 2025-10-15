"use client";

import React, { useState, useEffect } from "react";
import AdminLayout from "@/componets/admin/AdminLayout";
import { FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";
import useStationeryOrder, { StationeryOrder } from "@/hooks/stationeryOrder";

const OrdersPage: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // ✅ Using your hook
  const { allOrders, updateOrder, deleteOrder } = useStationeryOrder();

  useEffect(() => {
    setMounted(true);
  }, []);

 useEffect(() => {
  if (allOrders.isSuccess) {
    toast.success("Orders fetched successfully!");
  }
  if (allOrders.isError) {
    toast.error(allOrders.error?.message || "Failed to fetch orders");
  }
}, [allOrders.isSuccess, allOrders.isError, allOrders.error?.message]);

  if (!mounted) return null;

  if (allOrders.isLoading) {
    return (
      <AdminLayout>
        <p>Loading orders...</p>
      </AdminLayout>
    );
  }

  const orders = allOrders.data;

  // ✅ Pagination
  const totalPages = Math.ceil(orders.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = orders.slice(indexOfFirstItem, indexOfLastItem);

  // ✅ Handle status change with toast
  const handleStatusChange = (order: StationeryOrder, newStatus: string) => {
    updateOrder.mutate(
      { ...order, status: newStatus },
      {
        onSuccess: () => toast.success("Order status updated!"),
        onError: () => toast.error("Failed to update status"),
      }
    );
  };

  // ✅ Handle delete with toast
  const handleDelete = (id: string) => {
    if (!confirm("Are you sure you want to delete this order?")) return;

    deleteOrder.mutate(id, {
      onSuccess: () => toast.success("Order deleted!"),
      onError: () => toast.error("Failed to delete order"),
    });
  };

  return (
    <AdminLayout>
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold mb-6">Orders</h1>

        <div className="overflow-x-auto">
          <table className="min-w-[1500px] divide-y divide-gray-200">
            <thead className="bg-secondary text-white">
              <tr>
                <th className="px-4 py-2 text-left">#</th>
                <th className="px-4 py-2 text-left">Data</th>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Phone</th>
                <th className="px-4 py-2 text-left">Amount</th>
                <th className="px-4 py-2 text-left">Payment status</th>
               <th className="px-4 py-2 text-left">Transaction ID</th>
                <th className="px-4 py-2 text-left">Kiosk ID</th>
                <th className="px-4 py-2 text-left">Address</th>
                <th className="px-4 py-2 text-left">Pin Code</th>
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
                  <td className="px-4 py-2">{order.createdAt?.split("T")[0]}</td>
                  <td className="px-4 py-2">{order.name}</td>
                  <td className="px-4 py-2">{order.phoneNo}</td>
                  <td className="px-4 py-2">{order.amount}</td>
                  <td className="px-4 py-2">{order.paymentStatus}</td>
                  <td className="px-4 py-2">{order.transactionId}</td>
                  <td className="px-4 py-2">{order.kioskId}</td>
                    <td className="px-4 py-2">
                    <div className="w-30 h-20 p-2 border rounded overflow-y-auto">
                      {order.address}
                    </div>
                  </td>
                  <td className="px-4 py-2">{order.pinCode}</td>
                  <td className="px-4 py-2">
                    <select
                      value={order.status || "pending"}
                      onChange={(e) => handleStatusChange(order, e.target.value)}
                      className="px-2 py-1 rounded border-[#7a0706] border-[2px]"
                    >
                      <option value="pending">Pending</option>
                      <option value="processing">Processing</option>
                      <option value="completed">Completed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </td>
                  <td className="px-4 py-2">
                    <ul className="list-disc pl-4">
                      {order.items.map((item, idx) => (
                        <li key={idx}>
                          {item.type} - {item.quantity}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleDelete(order._id)}
                      disabled={deleteOrder.isPending}
                      className="p-2 cursor-pointer bg-red-500 text-white rounded hover:bg-red-600 disabled:opacity-50"
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
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Prev
          </button>
          <span>
            Page {currentPage} of {totalPages || 1}
          </span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
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
