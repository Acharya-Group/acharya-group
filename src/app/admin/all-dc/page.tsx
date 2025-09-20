"use client";

import React, { useEffect, useState } from "react";
import AdminLayout from "@/componets/admin/AdminLayout";
import { CSVLink } from "react-csv";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { FaEdit, FaTrash } from "react-icons/fa";

interface DC {
  id: number;
  name: string;
  email: string;
  number: string;
  district: string;
  state: string;
  address: string;
}

const Page: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const dcs: DC[] = [
    { id: 1, name: "John Doe", email: "john@example.com", number: "9876543210", district: "Pune", state: "Maharashtra", address: "123 MG Road" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", number: "9876501234", district: "Delhi", state: "Delhi", address: "45 Connaught Place" },
  ];

  const handleUpdate = (id: number) => alert(`Update DC ${id}`);
  const handleDelete = (id: number) => { if (confirm("Delete this DC?")) alert(`Deleted DC ${id}`); };

  const copyData = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(JSON.stringify(dcs));
      alert("Copied to clipboard!");
    }
  };

  const exportPDF = () => {
    if (typeof window === "undefined") return;

    const doc = new jsPDF();
    doc.text("DC List", 14, 16);

    const tableData = dcs.map(dc => [dc.name, dc.email, dc.number, dc.district, dc.state, dc.address]);

    autoTable(doc, {
      head: [["Name", "Email", "Number", "District", "State", "Address"]],
      body: tableData,
      startY: 20,
    });

    doc.save("dc-list.pdf");
  };

  return (
    <AdminLayout>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-6">All DCs</h1>

        {/* Buttons */}
        <div className="flex flex-wrap gap-2 mb-4">
          <button onClick={copyData} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition">Copy</button>
          <CSVLink data={dcs} filename="dc-list.csv" className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition">CSV</CSVLink>
          <button onClick={exportPDF} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition">PDF</button>
          <button onClick={() => { if (typeof window !== "undefined") window.print(); }} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition">Print</button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-[800px] divide-y divide-gray-200">
            <thead className="bg-secondary text-white">
              <tr>
                <th className="px-4 py-2 text-left">Sr no.</th>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Number</th>
                <th className="px-4 py-2 text-left">District</th>
                <th className="px-4 py-2 text-left">State</th>
                <th className="px-4 py-2 text-left">Address</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {dcs.map(dc => (
                <tr key={dc.id}>
                  <td className="px-4 py-2">{dc.id}</td>
                  <td className="px-4 py-2">{dc.name}</td>
                  <td className="px-4 py-2">{dc.email}</td>
                  <td className="px-4 py-2">{dc.number}</td>
                  <td className="px-4 py-2">{dc.district}</td>
                  <td className="px-4 py-2">{dc.state}</td>
                  <td className="px-4 py-2">{dc.address}</td>
                  <td className="px-4 py-2 flex gap-2">
                    <button onClick={() => handleUpdate(dc.id)} className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"><FaEdit /></button>
                    <button onClick={() => handleDelete(dc.id)} className="p-2 bg-red-500 text-white rounded hover:bg-red-600"><FaTrash /></button>
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

export default Page;
