"use client";

import React, { useState } from "react";
import AdminLayout from "@/componets/admin/AdminLayout";
import { FaEdit, FaTrash } from "react-icons/fa";

interface Slide {
  id: number;
  image: string;
}

const Page: React.FC = () => {

  const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 4; 


  // ✅ Dummy Data
  const Sliders: Slide[] = [
    { id: 1, image: "/images/hero-slide-1.jpg" },
    { id: 2, image: "/images/hero-slide-2.jpg" },
    { id: 3, image: "/images/hero-slide-3.jpg" },
    { id: 4, image: "/images/hero-slide-1.jpg" },
    { id: 5, image: "/images/hero-slide-2.jpg" },
    { id: 6, image: "/images/hero-slide-3.jpg" },
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
        <h1 className="text-2xl font-bold mb-6">All Slides</h1>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-[200px] w-full divide-y divide-gray-200">
            <thead className="bg-secondary text-white">
              <tr>
                <th className="px-4 py-2 text-left">Sr no.</th>
                <th className="px-4 py-2 text-left">Image</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentItems.map((slide) => (
                <tr key={slide.id}>
                  <td className="px-4 py-2">{slide.id}</td>
                  <td className="px-4 py-2">
                    <img
                      src={slide.image}
                      alt={`Slide ${slide.id}`}
                      className="w-24 h-16 object-cover rounded"
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
