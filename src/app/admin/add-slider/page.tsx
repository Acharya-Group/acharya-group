"use client";
import AdminLayout from "@/componets/admin/AdminLayout";
import Image from "next/image";
import React, { useState, ChangeEvent } from "react";

const Page: React.FC = () => {
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    if (selectedFile) {
      setPreview(URL.createObjectURL(selectedFile));
    } else {
      setPreview(null);
    }
  };



  return (
    <AdminLayout>
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold mb-6">Add Slider</h1>

        <form className="space-y-5">
          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full text-gray-700 cursor-pointer 
              file:mr-4 file:py-2 file:px-4
              file:rounded-lg file:border-0
              file:text-sm file:font-semibold
              file:bg-[#7a0706] file:text-white
              hover:file:bg-[#261b7d] transition"
              required
            />
          </div>

          {/* Image Preview */}
          {preview && (
            <div className="mt-4">
              <p className="text-sm text-gray-600 mb-2">Preview:</p>
              <Image
                  height={256}
              width={256}
                src={preview}
                alt="Preview"
                className="w-full max-h-64 object-contain rounded-lg border"
              />
            </div>
          )}

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
  );
};

export default Page;
