"use client";

import React, { useEffect, useState } from "react";
import AdminLayout from "@/componets/admin/AdminLayout";
import { CSVLink } from "react-csv";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { FaEdit, FaTrash } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  description: string;
  image: string;
}

const Page: React.FC = () => {
  // ✅ All hooks declared at the top
  const [mounted, setMounted] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Dummy testimonial data
  const testimonials: Testimonial[] = [
    { id: 1, name: "John Doe", description: "Great service and support!", image: "/images/review1.jpg" },
    { id: 2, name: "Jane Smith", description: "Amazing experience overall.", image: "/images/review1.jpg" },
    { id: 3, name: "Alex Paul", description: "Very professional team!", image: "/images/review1.jpg" },
    { id: 4, name: "Sara Lee", description: "Would recommend to others.", image: "/images/review1.jpg" },
    { id: 5, name: "Mike Ross", description: "Best service in town.", image: "/images/review1.jpg" },
    { id: 6, name: "Rachel Zane", description: "Exceeded my expectations.", image: "/images/review1.jpg" },
  ];

  // Pagination logic
  const itemsPerPage = 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = testimonials.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  // Early return for client-only features
  if (!mounted) return null;

  // Handlers
  const handleDelete = (id: number) => { if (confirm("Are you sure to delete this testimonial?")) alert(`Deleted testimonial ${id}`); };

  const copyData = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(JSON.stringify(testimonials));
      alert("Copied to clipboard!");
    }
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text("Testimonials", 14, 16);
    const tableData = testimonials.map(t => [t.name, t.description]);
    autoTable(doc, { head: [["Name", "Description"]], body: tableData, startY: 20 });
    doc.save("testimonials.pdf");
  };

  return (
    <AdminLayout>
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold mb-6">All Testimonials</h1>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2 mb-4">
          <button onClick={copyData} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition">Copy</button>
          <CSVLink data={testimonials} filename="testimonials.csv" className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition">CSV</CSVLink>
          <button onClick={exportPDF} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition">PDF</button>
          <button onClick={() => window.print()} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition">Print</button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-[600px] w-full divide-y divide-gray-200">
            <thead className="bg-secondary text-white">
              <tr>
                <th className="px-4 py-2 text-left">Sr no.</th>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Description</th>
                <th className="px-4 py-2 text-left">Image</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentItems.map(t => (
                <tr key={t.id}>
                  <td className="px-4 py-2">{t.id}</td>
                  <td className="px-4 py-2 text-nowrap">{t.name}</td>
                <td className="px-4 py-2">
  <div className="max-w-[200px] truncate overflow-hidden whitespace-nowrap">
    {t.description}
  </div>
</td>

                  <td className="px-4 py-2">
                    <Image height={64} width={64} src={t.image} alt={t.name} className="w-16 h-16 object-cover rounded" />
                  </td>
                  <td className="px-4 py-2 flex gap-2">
                    <Link href="/admin/update-testimonial"><button className="p-2 bg-blue-500 cursor-pointer text-white rounded hover:bg-blue-600"><FaEdit /></button></Link>
                    <button onClick={() => handleDelete(t.id)} className="p-2 bg-red-500 cursor-pointer text-white rounded hover:bg-red-600"><FaTrash /></button>
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
