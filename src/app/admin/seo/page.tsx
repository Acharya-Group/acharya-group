"use client"

import AdminLayout from '@/componets/admin/AdminLayout'
import React, { useState } from 'react'

const Page = () => {
  const [preview, setPreview] = useState<string | null>(null)

  // Handle image select
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setPreview(url)
    }
  }

  return (
    <AdminLayout>
      <div className="mx-auto bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold mb-6">Seo Add and Update</h1>

        <form className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              placeholder="Enter name"
              className="w-full px-4 py-2 border rounded-lg shadow-sm 
              focus:outline-none focus:ring-2 focus:ring-[#7a0706] focus:border-[#7a0706]
              hover:border-[#7a0706] transition"
            />
          </div>

          {/* Keywords */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Keywords
            </label>
            <textarea
              rows={4}
              placeholder="Enter Keywords"
              className="w-full px-4 py-2 border rounded-lg shadow-sm 
              focus:outline-none focus:ring-2 focus:ring-[#7a0706] focus:border-[#7a0706]
              hover:border-[#7a0706] transition"
            ></textarea>
          </div>
          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              rows={4}
              placeholder="Enter description"
              className="w-full px-4 py-2 border rounded-lg shadow-sm 
              focus:outline-none focus:ring-2 focus:ring-[#7a0706] focus:border-[#7a0706]
              hover:border-[#7a0706] transition"
            ></textarea>
          </div>

         

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#7a0706] cursor-pointer text-white py-2 px-4 rounded-lg 
            shadow-md hover:bg-[#261b7d] transition transform hover:scale-[1.02]"
          >
            Submit
          </button>
        </form>
      </div>
    </AdminLayout>
  )
}

export default Page
