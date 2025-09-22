'use client';

import React, { useState } from "react";
import AdminLayout from "@/componets/admin/AdminLayout";
import { FaEdit, FaTrash } from "react-icons/fa";

interface Slide {
  id: number;
  url: string;
}

const Page: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // ✅ Dummy Data with YouTube URLs
  const Sliders: Slide[] = [
    { id: 1, url: "https://www.youtube.com/embed/Cl9aYUNeZ1E" },
    { id: 2, url: "https://www.youtube.com/embed/Cl9aYUNeZ1E" },
    { id: 3, url: "https://www.youtube.com/embed/Cl9aYUNeZ1E" },
    { id: 4, url: "https://www.youtube.com/embed/Cl9aYUNeZ1E" },
    { id: 5, url: "https://www.youtube.com/embed/Cl9aYUNeZ1E" },
    { id: 6, url: "https://www.youtube.com/embed/Cl9aYUNeZ1E" },
  ];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Sliders.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(Sliders.length / itemsPerPage);

  // ✅ Handlers
  const handleUpdate = (id: number) => {
    alert(`Update Slide ${id}`);
  };

  const handleDelete = (id: number) => {
    if (confirm("Delete this slide?")) {
      alert(`Deleted Slide ${id}`);
    }
  };

  return (
    <AdminLayout>
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold mb-6">All Videos</h1>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-[300px] w-full divide-y divide-gray-200">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-4 py-2 text-left">Sr no.</th>
                <th className="px-4 py-2 text-left">Video</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentItems.map((slide) => (
                <tr key={slide.id}>
                  <td className="px-4 py-2">{slide.id}</td>
                  <td className="px-4 py-2">
                    <iframe
                      width="240"
                      height="135"
                      src={slide.url}
                      title={`Video ${slide.id}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded"
                    />
                  </td>
                  <td className="px-4 py-2 flex gap-2">
                    <button
                      onClick={() => handleUpdate(slide.id)}
                      className="p-2 bg-blue-500 cursor-pointer text-white rounded hover:bg-blue-600"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(slide.id)}
                      className="p-2 bg-red-500 cursor-pointer text-white rounded hover:bg-red-600"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

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
      </div>
    </AdminLayout>
  );
};

export default Page;
