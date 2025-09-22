"use client";

import React, { useState, useEffect } from "react";
import AdminLayout from "@/componets/admin/AdminLayout";
import { FaEdit, FaTrash } from "react-icons/fa";

interface FormEntry {
  id: number;
  name: string;
  number: string;
  district: string;
  state: string;
  formType: string;
  subject: string;
  message: string;
  status: "pending" | "resolved";
}

const Page: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [entries, setEntries] = useState<FormEntry[]>([
    {
      id: 1,
      name: "John Doe",
      number: "9876543210",
      district: "Pune",
      state: "Maharashtra",
      formType: "Complaint",
      subject: "Network issue",
      message: "Internet not working properly.",
      status: "pending",
    },
    {
      id: 2,
      name: "Jane Smith",
      number: "9876501234",
      district: "Delhi",
      state: "Delhi",
      formType: "Request",
      subject: "New service",
      message: "Requesting new connection.",
      status: "resolved",
    },
    {
      id: 3,
      name: "Alex Paul",
      number: "9876505678",
      district: "Mumbai",
      state: "Maharashtra",
      formType: "Complaint",
      subject: "Billing",
      message: "Incorrect bill received.",
      status: "pending",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const totalPages = Math.ceil(entries.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentEntries = entries.slice(indexOfFirstItem, indexOfLastItem);

  const handleEdit = (id: number) => {
    alert(`Edit entry ${id}`);
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this entry?")) {
      setEntries(prev => prev.filter(e => e.id !== id));
    }
  };

  return (
    <AdminLayout>
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold mb-6">Form Entries</h1>

        <div className="overflow-x-auto">
          <table className="min-w-[900px] divide-y divide-gray-200">
            <thead className="bg-secondary text-white">
              <tr>
                <th className="px-4 py-2 text-left">#</th>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Number</th>
                <th className="px-4 py-2 text-left">District</th>
                <th className="px-4 py-2 text-left">State</th>
                <th className="px-4 py-2 text-left">Form Type</th>
                <th className="px-4 py-2 text-left">Subject</th>
                <th className="px-4 py-2 text-left">Message</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentEntries.map(e => (
                <tr key={e.id}>
                  <td className="px-4 py-2">{e.id}</td>
                  <td className="px-4 py-2">{e.name}</td>
                  <td className="px-4 py-2">{e.number}</td>
                  <td className="px-4 py-2">{e.district}</td>
                  <td className="px-4 py-2">{e.state}</td>
                  <td className="px-4 py-2">{e.formType}</td>
                  <td className="px-4 py-2">{e.subject}</td>
                 <td className="px-4 py-2">
  <div className="w-64 h-20 p-2 border rounded overflow-y-auto">
    {e.message}
  </div>
</td>

                  <td className="px-4 py-2">
                    <select
                      value={e.status}
                      onChange={(ev) => {
                        const newStatus = ev.target.value as FormEntry["status"];
                        setEntries(prev =>
                          prev.map(entry => entry.id === e.id ? { ...entry, status: newStatus } : entry)
                        );
                      }}
                      className="border px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-[#7a0706]"
                    >
                      <option value="pending">Pending</option>
                      <option value="resolved">Resolved</option>
                    </select>
                  </td>
                  <td className="px-4 py-2 flex gap-2">
                    <button
                      onClick={() => handleEdit(e.id)}
                      className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(e.id)}
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
