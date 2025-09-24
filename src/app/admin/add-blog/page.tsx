"use client";

import { useState } from "react";
import AdminLayout from "../../../componets/admin/AdminLayout";
import toast from "react-hot-toast";
import { useBlogs } from "../../../hooks/blogs";
import Image from "next/image";

const Page = () => {
  const [title, setTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { createBlog } = useBlogs();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setPreview(reader.result);
        }
      };
      reader.readAsDataURL(file);
    } else {
      setImageFile(null);
      setPreview(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !shortDescription || !description || !imageFile) {
      toast.error("All fields including image are required!");
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("shortDescription", shortDescription);
    formData.append("description", description);
    formData.append("image", imageFile);

    createBlog.mutate(formData, {
      onSuccess: () => {
        toast.success("Blog added successfully!");
        setTitle("");
        setShortDescription("");
        setDescription("");
        setImageFile(null);
        setPreview(null);
        setIsSubmitting(false);
      },
      onError: (err) => {
        toast.error(err?.message || "Failed to add blog!");
        setIsSubmitting(false);
      },
    });
  };

  return (
    <AdminLayout>
      <div className="mx-auto bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Add Blog Post</h1>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter blog title"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7a0706] focus:border-[#7a0706] hover:border-[#7a0706] transition"
              required
            />
          </div>

          {/* Short Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Short Description
            </label>
            <input
              type="text"
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
              placeholder="Enter a brief summary"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7a0706] focus:border-[#7a0706] hover:border-[#7a0706] transition"
              required
            />
          </div>

          {/* Full Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Write your full blog description here..."
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7a0706] focus:border-[#7a0706] hover:border-[#7a0706] transition min-h-[150px]"
              required
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Featured Image
            </label>

            {/* Hidden file input */}
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
              required
            />

            {/* Custom Upload Button */}
            <label
              htmlFor="fileInput"
              className="inline-block px-4 py-2 bg-[#7a0706] text-white rounded-lg cursor-pointer shadow-md hover:bg-[#5a0505] transition"
            >
              {imageFile ? "Change Image" : "Choose Image"}
            </label>

            {/* Image Preview */}
            {preview && (
              <div className="mt-3">
                <p className="text-sm text-gray-600 mb-1">Preview:</p>
                <Image
                height={160}
                width={160}
                  src={preview}
                  alt="Selected Preview"
                  className="w-40 h-40 object-cover rounded-lg border shadow-sm"
                />
              </div>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full ${
              isSubmitting ? "bg-gray-400" : "bg-[#7a0706] hover:bg-[#5a0505]"
            } text-white py-3 px-4 rounded-lg shadow-md transition transform hover:scale-[1.01] font-medium`}
          >
            {isSubmitting ? "Publishing..." : "Publish Blog Post"}
          </button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default Page;
