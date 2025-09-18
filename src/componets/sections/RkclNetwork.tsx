"use client";
import React, { useState } from "react";

const RkclNetwork: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    district: "",
    tehsil: "",
    cityVillage: "",
    pinCode: "",
    course: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("✅ Form Submitted:", formData);

    // Show popup
    alert("🎉 Form submitted successfully!");

    // Reset form fields
    setFormData({
      name: "",
      phone: "",
      email: "",
      district: "",
      tehsil: "",
      cityVillage: "",
      pinCode: "",
      course: "",
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-2xl text-primary font-bold text-center mb-6">
        Send a Query for Admission
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            NAME
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            PHONE
          </label>
          <input
            type="number"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            EMAIL
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3"
          />
        </div>

        {/* District */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            DISTRICT
          </label>
          <input
            type="text"
            name="district"
            placeholder="Enter your district"
            value={formData.district}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3"
          />
        </div>

        {/* Tehsil */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            TEHSIL
          </label>
          <input
            type="text"
            name="tehsil"
            placeholder="Enter your tehsil"
            value={formData.tehsil}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3"
          />
        </div>

        {/* City/Village */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            CITY / VILLAGE
          </label>
          <input
            type="text"
            name="cityVillage"
            placeholder="Enter your city or village"
            value={formData.cityVillage}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3"
          />
        </div>

        {/* Pin Code */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            PIN CODE
          </label>
          <input
            type="text"
            name="pinCode"
            placeholder="Enter your pin code"
            value={formData.pinCode}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3"
          />
        </div>

        {/* Course Dropdown */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            COURSE
          </label>
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3"
            required
          >
            <option value="">Select Course</option>
            <option value="RS-CFA">RS-CFA</option>
            <option value="RSCIT">RSCIT</option>
            <option value="RS-CIT Plus">RS-CIT Plus</option>
            <option value="O Level">O Level</option>
            <option value="CCC">CCC</option>
          </select>
        </div>

        {/* Submit button */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full px-10 py-3 rounded cursor-pointer bg-gradient-to-r duration-300 from-[#261b7d] to-[#7a0706] hover:from-[#7a0706] hover:to-[#261b7d] transition text-white font-semibold"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RkclNetwork;
