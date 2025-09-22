'use client';

import React, { useState } from "react";
import AdminLayout from "@/componets/admin/AdminLayout";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import Link from "next/link";

interface Category {
  id: number;
  name: string;
}

const Page: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([
    { id: 1, name: "School" },
    { id: 2, name: "College" },
    { id: 3, name: "Hospital" },
    { id: 4, name: "Office" },
  ]);

  const handleEdit = (id: number) => alert(`Edit Category ${id}`);
  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this category?")) {
      setCategories(prev => prev.filter(cat => cat.id !== id));
    }
  };

  return (
    <AdminLayout>
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold mb-6">Categories</h1>

        <div className="overflow-x-auto">
          <table className="min-w-[500px] w-full divide-y divide-gray-200">
            <thead className="bg-secondary text-white">
              <tr>
                <th className="px-4 py-2 text-left">Sr no.</th>
                <th className="px-4 py-2 text-left">Category</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {categories.map((cat, index) => (
                <tr key={cat.id}>
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{cat.name}</td>
                  <td className="px-4 py-2 flex gap-2">
                    <button
                      onClick={() => handleEdit(cat.id)}
                      className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                      title="Edit"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(cat.id)}
                      className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
                      title="Delete"
                    >
                      <FaTrash />
                    </button>
                    <Link
                      href={`/admin/gallery/${cat.name.toLowerCase()}`}
                      className="p-2 flex gap-2 text-nowrap bg-green-500 text-white rounded hover:bg-green-600  items-center"
                      title="View Images"
                    >
                      <FaEye />View Images
                    </Link>
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
