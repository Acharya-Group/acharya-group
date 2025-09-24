"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import AdminLayout from "@/componets/admin/AdminLayout";
import toast from "react-hot-toast";
import { useBlogs, Blog } from "@/hooks/blogs";
import axios from "axios";

const UpdateBlogPage = () => {
  const router = useRouter();
  const params = useParams();
  const blogId = Array.isArray(params.id) ? params.id[0] : params.id; 

  const { updateBlog } = useBlogs();

  const [title, setTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch existing blog data
  useEffect(() => {
    if (!blogId) return;
    const fetchBlog = async () => {
      try {
        const { data } = await axios.get<{ blog: Blog }>(
          `${process.env.NEXT_PUBLIC_API_URL}/blogs/${blogId}`
        );
        setTitle(data.blog.title);
        setShortDescription(data.blog.shortDescription);
        setDescription(data.blog.description);
        setPreview(data.blog.image);
      } catch (err: any) {
        toast.error(err?.message || "Failed to load blog!");
      }
    };
    fetchBlog();
  }, [blogId]);

  // Handle image change
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  // Submit updated blog
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!blogId) {
      toast.error("Blog ID not found!");
      return;
    }

    if (!title || !shortDescription || !description) {
      toast.error("Please fill all required fields!");
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("shortDescription", shortDescription);
    formData.append("description", description);
    if (imageFile) formData.append("image", imageFile);

    updateBlog.mutate(
      { id: blogId, formData },
      {
        onSuccess: () => {
          toast.success("Blog updated successfully!");
          setIsSubmitting(false);
          router.push("/admin/all-blog");
        },
        onError: (err: any) => {
          toast.error(err?.message || "Failed to update blog!");
          setIsSubmitting(false);
        },
      }
    );
  };

  return (
    <AdminLayout>
      <div className="mx-auto bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          Update Blog Post
        </h1>

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

          {/* Description */}
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
            ></textarea>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Featured Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#7a0706] focus:border-[#7a0706] hover:border-[#7a0706] transition"
            />
            {preview && (
              <div className="mt-3">
                <p className="text-sm text-gray-600 mb-1">Preview:</p>
                <img
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
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#7a0706] hover:bg-[#5a0505]"
            } text-white py-3 px-4 rounded-lg shadow-md transition transform hover:scale-[1.01] font-medium`}
          >
            {isSubmitting ? "Updating..." : "Update Blog Post"}
          </button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default UpdateBlogPage;
