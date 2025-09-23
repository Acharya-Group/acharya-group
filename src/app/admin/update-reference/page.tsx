"use client";

import React, { useState } from "react";
import AdminLayout from "@/componets/admin/AdminLayout";

const page: React.FC = () => {
  const [formData, setFormData] = useState({
    referenceNo: "",
    date: "",
    issuedTo: "",
    issuedBy: "",
    subject: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Reference Data:", formData);
    alert("Reference added successfully!");
    setFormData({ referenceNo: "", date: "", issuedTo: "", issuedBy: "", subject: "" });
  };

  return (
    <AdminLayout>
      <div className="bg-white p-6 rounded-2xl shadow-md  mx-auto mt-6">
        <h1 className="text-2xl font-bold mb-6">Update Reference</h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Reference No.</label>
            <input
              type="text"
              name="referenceNo"
              value={formData.referenceNo}
              onChange={handleChange}
              placeholder="Enter reference number"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7a0706] focus:border-[#7a0706]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7a0706] focus:border-[#7a0706]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Issued To</label>
            <input
              type="text"
              name="issuedTo"
              value={formData.issuedTo}
              onChange={handleChange}
              placeholder="Enter recipient"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7a0706] focus:border-[#7a0706]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Issued By</label>
            <input
              type="text"
              name="issuedBy"
              value={formData.issuedBy}
              onChange={handleChange}
              placeholder="Enter issuer"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7a0706] focus:border-[#7a0706]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
            <textarea
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              rows={3}
              placeholder="Enter subject"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7a0706] focus:border-[#7a0706]"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#7a0706] text-white py-2 px-4 rounded-lg hover:bg-[#261b7d] transition transform hover:scale-[1.02]"
          >
            Update Reference
          </button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default page;
