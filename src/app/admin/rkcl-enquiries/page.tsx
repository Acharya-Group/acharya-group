"use client";

import React, { useState, useEffect } from "react";
import AdminLayout from "@/componets/admin/AdminLayout";
import { FaEdit, FaTrash } from "react-icons/fa";

interface Enquiry {
  id: number;
  name: string;
  email: string;
  number: string;
  district: string;
  tehsil: string;
  city: string;
  pinCode: string;
  course: string;
  status: "pending" | "processing" | "completed" | "cancelled";
}

const Page: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [enquiries, setEnquiries] = useState<Enquiry[]>([
    { id: 1, name: "John Doe", email: "john@example.com", number: "9876543210", district: "Pune", tehsil: "Haveli", city: "Pune", pinCode: "411001", course: "Computer Course", status: "pending" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", number: "9876501234", district: "Delhi", tehsil: "New Delhi", city: "Delhi", pinCode: "110001", course: "Accounting", status: "processing" },
    { id: 3, name: "Alex Paul", email: "alex@example.com", number: "9876505678", district: "Mumbai", tehsil: "Andheri", city: "Mumbai", pinCode: "400050", course: "Math", status: "completed" },
    { id: 4, name: "Sara Lee", email: "sara@example.com", number: "9876509999", district: "Chennai", tehsil: "Guindy", city: "Chennai", pinCode: "600032", course: "English", status: "cancelled" },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const totalPages = Math.ceil(enquiries.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentEnquiries = enquiries.slice(indexOfFirstItem, indexOfLastItem);

  const handleEdit = (id: number) => {
    alert(`Edit enquiry ${id}`);
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this enquiry?")) {
      setEnquiries(prev => prev.filter(e => e.id !== id));
    }
  };

  return (
    <AdminLayout>
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold mb-6">RKCL Enquiries</h1>

        <div className="overflow-x-auto">
          <table className="min-w-[900px] divide-y divide-gray-200">
            <thead className="bg-secondary text-white">
              <tr>
                <th className="px-4 py-2 text-left">#</th>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Number</th>
                <th className="px-4 py-2 text-left">District</th>
                <th className="px-4 py-2 text-left">Tehsil</th>
                <th className="px-4 py-2 text-left">City</th>
                <th className="px-4 py-2 text-left">Pin Code</th>
                <th className="px-4 py-2 text-left">Course</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentEnquiries.map(e => (
                <tr key={e.id}>
                  <td className="px-4 py-2">{e.id}</td>
                  <td className="px-4 py-2">{e.name}</td>
                  <td className="px-4 py-2">{e.email}</td>
                  <td className="px-4 py-2">{e.number}</td>
                  <td className="px-4 py-2">{e.district}</td>
                  <td className="px-4 py-2">{e.tehsil}</td>
                  <td className="px-4 py-2">{e.city}</td>
                  <td className="px-4 py-2">{e.pinCode}</td>
                  <td className="px-4 py-2">{e.course}</td>
                  <td className="px-4 py-2">
                    <select
                      value={e.status}
                      onChange={(ev) => {
                        const newStatus = ev.target.value as Enquiry["status"];
                        setEnquiries(prev =>
                          prev.map(enq => enq.id === e.id ? { ...enq, status: newStatus } : enq)
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
