"use client";

import AdminLayout from "@/componets/admin/AdminLayout";
import React, { useState } from "react";

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

const FormTable: React.FC = () => {
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
  ]);

  // Handle delete
  const handleDelete = (id: number) => {
    setEntries((prev) => prev.filter((entry) => entry.id !== id));
  };

  // Handle edit (dummy for now, you can expand later)
  const handleEdit = (id: number) => {
    const entry = entries.find((e) => e.id === id);
    if (entry) {
      alert(`Editing entry for ${entry.name}`);
    }
  };

  // Handle status change
  const handleStatusChange = (id: number, newStatus: "pending" | "resolved") => {
    setEntries((prev) =>
      prev.map((entry) =>
        entry.id === id ? { ...entry, status: newStatus } : entry
      )
    );
  };

  return (
     <AdminLayout>
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="overflow-x-auto bg-white rounded-2xl shadow-md">
        <table className="min-w-full border-collapse">
          <thead className="bg-[#7a0706] text-white">
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
            {entries.map((e, index) => (
              <tr key={e.id} className="hover:bg-gray-50">
                <td className="px-4 py-2">{index + 1}</td>
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
                    onChange={(ev) =>
                      handleStatusChange(
                        e.id,
                        ev.target.value as "pending" | "resolved"
                      )
                    }
                    className="border px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-[#7a0706]"
                  >
                    <option value="pending">Pending</option>
                    <option value="resolved">Resolved</option>
                  </select>
                </td>
                <td className="px-4 py-2 flex gap-2">
                  <button
                    onClick={() => handleEdit(e.id)}
                    className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(e.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </AdminLayout>
  );
};

export default FormTable;
