"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import useFeedbackComplaint, { CreateFeedbackInput } from "@/hooks/feedbackComplaint";

const FeedbackComplaintForm: React.FC = () => {
  const { createFeedback } = useFeedbackComplaint();

  const [formData, setFormData] = useState<CreateFeedbackInput>({
    name: "",
    number: "",
    district: "",
    state: "",
    formType: "Complaint",
    subject: "",
    message: "",
    status: "pending",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await createFeedback.mutateAsync(formData);
      toast.success("🎉 Form submitted successfully!");
      setFormData({
        name: "",
        number: "",
        district: "",
        state: "",
        formType: "Complaint",
        subject: "",
        message: "",
        status: "pending",
      });
    } catch (error) {
      toast.error("Failed to submit form");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-2xl text-primary font-bold text-center mb-6">
        Submit Feedback / Complaint
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
          required
        />
        <input
          type="tel"
          name="number"
          placeholder="Phone No"
          value={formData.number}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
          required
        />
        <input
          type="text"
          name="district"
          placeholder="District"
          value={formData.district}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
          required
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={formData.state}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
          required
        />
        <select
          name="formType"
          value={formData.formType}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        >
          <option value="Complaint">Complaint</option>
          <option value="Feedback">Feedback</option>
        </select>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg md:col-span-2"
          required
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className={`md:col-span-2 px-6 py-3 cursor-pointer rounded-lg text-white font-medium w-full flex items-center justify-center
            bg-gradient-to-r from-[#261b7d] to-[#7a0706] hover:from-[#7a0706] hover:to-[#261b7d] disabled:opacity-50 transition`}
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              SUBMITTING...
            </>
          ) : (
            "SUBMIT"
          )}
        </button>
      </form>
    </div>
  );
};

export default FeedbackComplaintForm;
