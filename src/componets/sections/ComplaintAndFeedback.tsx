"use client";
import React, { useState } from "react";
import Button from "../ui/Button";

const ComplaintAndFeedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    district: "",
    state: "",
    type: "Complaint",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false); 

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true); 
    
    try {
      const res = await fetch(
        `https://formsubmit.co/ajax/sumitkhan.dhana@gmail.com`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (res.ok) {
        setSuccess(true);
        setFormData({
          name: "",
          phone: "",
          district: "",
          state: "",
          type: "Complaint",
          subject: "",
          message: "",
        });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting form");
    } finally {
      setLoading(false); // Stop loading regardless of outcome
    }
  };

  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-4 py-12 relative">
        <div className="flex flex-wrap items-center bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Right Form */}
          <div className="w-full p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex gap-1 flex-wrap md:flex-nowrap md:space-x-2">
                  <div className="grid gap-3 w-full">
                      <input
                        type="text"
                        name="name"
                        placeholder="Name *"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="border-2 border-gray-200 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary"
                        disabled={loading} // Disable inputs during loading
                      />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone No *"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="border-2 border-gray-200 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary"
                        disabled={loading}
                      />
                      <input
                        type="text"
                        name="district"
                        placeholder="District *"
                        required
                        value={formData.district}
                        onChange={handleChange}
                        className="border-2 border-gray-200 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary"
                        disabled={loading}
                      />
                  </div>
                  <div className="grid gap-3 w-full">
                      <input
                        type="text"
                        name="state"
                        placeholder="State *"
                        required
                        value={formData.state}
                        onChange={handleChange}
                        className="border-2 border-gray-200 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary"
                        disabled={loading}
                      />
                      <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="border-2 border-gray-200 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary"
                        disabled={loading}
                      >
                        <option value="Complaint">Complaint</option>
                        <option value="Feedback">Feedback</option>
                      </select>
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject *"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="border-2 border-gray-200 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary"
                        disabled={loading}
                      />
                  </div>
              </div>
              <textarea
                name="message"
                placeholder="Type your message here..."
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="border-2 border-gray-200 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary"
                disabled={loading}
              ></textarea>

              <Button
                content={loading ? "Submitting..." : "Submit"}
                type="submit"
                className="w-auto px-6"
              />
            </form>
          </div>
        </div>
      </div>

      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center space-y-4 flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-700">Submitting your form, please wait...</p>
          </div>
        </div>
      )}

      {/* Success Popup */}
      {success && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
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

export default ComplaintAndFeedback;