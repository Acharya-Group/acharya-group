"use client";
import React, { useState } from "react";
import SubHeading from "../ui/SubHeading";
import Button from "../ui/Button";
import Image from "next/image";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch(`https://formsubmit.co/ajax/info@achariyagroup.com`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          number: "",
          message: "",
        });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting form");
    }
  };

  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-4 py-16 relative">
        <SubHeading content="Get in Touch" />
        <div className="flex flex-wrap items-center mt-8 bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Left Image */}
          <div className="w-full md:w-1/2">
            <Image
              src="/images/contact.jpg"
              alt="Contact illustration"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Form */}
          <div className="w-full md:w-1/2 p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Send us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name *"
                required
                value={formData.name}
                onChange={handleChange}
                className="border-2 border-gray-200 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                name="email"
                placeholder="Email *"
                required
                value={formData.email}
                onChange={handleChange}
                className="border-2 border-gray-200 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="tel"
                name="number"
                placeholder="Phone Number"
                value={formData.number}
                onChange={handleChange}
                className="border-2 border-gray-200 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <textarea
                name="message"
                placeholder="Message *"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="border-2 border-gray-200 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>

              <Button
                content="Submit"
                type="submit"
                className="w-auto px-6"
              />
            </form>
          </div>
        </div>
      </div>

      {/* Success Popup */}
      {success && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center space-y-4">
            <h3 className="text-green-600 font-semibold text-lg">✅ Success!</h3>
            <p>Your message has been sent successfully.</p>
            <button
              onClick={() => setSuccess(false)}
              className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-400"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
