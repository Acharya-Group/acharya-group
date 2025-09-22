"use client";

import React, { useState, useEffect } from "react";
import AdminLayout from "@/componets/admin/AdminLayout";
import { FaEdit, FaTrash } from "react-icons/fa";

interface StationeryItem {
  id: number;
  type: string;
  quantity: number;
}

interface Order {
  id: number;
  name: string;
  phoneNo: string;
  kioskId: string;
  address: string;
  pinCode: string;
  status: "pending" | "processing" | "completed" | "cancelled";
  items: StationeryItem[];
}

const Page: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [orders, setOrders] = useState<Order[]>([
    {
      id: 1,
      name: "John Doe",
      phoneNo: "9876543210",
      kioskId: "K123",
      address: "123 MG Road",
      pinCode: "411001",
      status: "pending",
      items: [
        { id: 1, type: "Pen", quantity: 10 },
        { id: 2, type: "Notebook", quantity: 5 },
      ],
    },
    {
      id: 2,
      name: "Jane Smith",
      phoneNo: "9876501234",
      kioskId: "K124",
      address: "45 Connaught Place",
      pinCode: "110001",
      status: "processing",
      items: [
        { id: 1, type: "Pencil", quantity: 20 },
        { id: 2, type: "Eraser", quantity: 10 },
      ],
    },
    {
      id: 3,
      name: "Alex Paul",
      phoneNo: "9876505678",
      kioskId: "K125",
      address: "Bandra West",
      pinCode: "400050",
      status: "completed",
      items: [
        { id: 1, type: "Marker", quantity: 15 },
      ],
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const totalPages = Math.ceil(orders.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = orders.slice(indexOfFirstItem, indexOfLastItem);

  const handleEdit = (id: number) => {
    alert(`Edit order ${id}`);
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this order?")) {
      setOrders(prev => prev.filter(order => order.id !== id));
    }
  };

  return (
    <AdminLayout>
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold mb-6">Orders</h1>

        <div className="overflow-x-auto">
          <table className="min-w-[900px] divide-y divide-gray-200">
            <thead className="bg-secondary text-white">
              <tr>
                <th className="px-4 py-2 text-left">#</th>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Phone</th>
                <th className="px-4 py-2 text-left">Kiosk ID</th>
                <th className="px-4 py-2 text-left">Address</th>
                <th className="px-4 py-2 text-left">Pin Code</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Items</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentOrders.map(order => (
                <tr key={order.id}>
                  <td className="px-4 py-2">{order.id}</td>
                  <td className="px-4 py-2">{order.name}</td>
                  <td className="px-4 py-2">{order.phoneNo}</td>
                  <td className="px-4 py-2">{order.kioskId}</td>
                  <td className="px-4 py-2">{order.address}</td>
                  <td className="px-4 py-2">{order.pinCode}</td>
                  <td className="px-4 py-2">
                    <select
                      value={order.status}
                      onChange={(e) => {
                        const newStatus = e.target.value as Order['status'];
                        setOrders(prev =>
                          prev.map(o => o.id === order.id ? { ...o, status: newStatus } : o)
                        );
                      }}
                      className="border px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-[#7a0706]"
                    >
                      <option value="pending">Pending</option>
                      <option value="processing">Processing</option>
                      <option value="completed">Completed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </td>
                  <td className="px-4 py-2">
                    <ul className="list-disc pl-4">
                      {order.items.map(item => (
                        <li key={item.id}>{item.type} - {item.quantity}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="px-4 py-2 flex gap-2">
                    <button
                      onClick={() => handleEdit(order.id)}
                      className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(order.id)}
                      className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
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
            onClick={() => setCurrentPage(prev => prev - 1)}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Prev
          </button>
          <span>Page {currentPage} of {totalPages}</span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(prev => prev + 1)}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Page;
