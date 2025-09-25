"use client";

import { useState } from "react";
import AdminLayout from "@/componets/admin/AdminLayout";
import useDc from "@/hooks/dc";
import toast from "react-hot-toast";

const Page = () => {
  const { createDc } = useDc();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    district: "",
    state: "",
    address: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.number) {
      toast.error("Please fill in all required fields!");
      return;
    }

    setIsSubmitting(true);

    createDc.mutate(formData, {
      onSuccess: () => {
        toast.success("DC created successfully!");
        setFormData({
          name: "",
          email: "",
          number: "",
          district: "",
          state: "",
          address: "",
        });
        setIsSubmitting(false);
      },
      onError: (err) => {
        toast.error(err?.message || "Failed to create DC!");
        setIsSubmitting(false);
      },
    });
  };

  return (
    <AdminLayout>
      <div className="mx-auto bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold mb-6">Add DC</h1>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {["name", "email", "number", "district", "state"].map((field) => (
            <div key={field}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                type={
                  field === "email"
                    ? "email"
                    : field === "number"
                    ? "number"
                    : "text"
                }
                name={field}
                value={formData[field as keyof typeof formData]}
                onChange={handleChange}
                placeholder={`Enter ${field}`}
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7a0706] focus:border-[#7a0706] hover:border-[#7a0706] transition"
              />
            </div>
          ))}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows={3}
              placeholder="Enter address"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7a0706] focus:border-[#7a0706] hover:border-[#7a0706] transition"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full ${
              isSubmitting ? "bg-gray-400" : "bg-[#7a0706] hover:bg-[#5a0505]"
            } text-white py-3 px-4 rounded-lg shadow-md transition transform hover:scale-[1.01] font-medium`}
          >
            {isSubmitting ? "Creating..." : "Create DC"}
          </button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default Page;
