"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/componets/layout/Footer";
import Header from "@/componets/layout/Header";
import CommonHero from "@/componets/sections/CommonHero";
import { useBlogs, Blog as BlogType } from "@/hooks/blogs";
import toast from "react-hot-toast";

const BlogDetailsPage: React.FC = () => {
  const params = useParams();
  const { allBlogs } = useBlogs();
  const [blog, setBlog] = useState<BlogType | null>(null);
  const [relatedBlogs, setRelatedBlogs] = useState<BlogType[]>([]);

  useEffect(() => {
    if (allBlogs.isSuccess && allBlogs.data) {
      const foundBlog = allBlogs.data.find((b) => b._id === params.id);
      if (foundBlog) {
        setBlog(foundBlog);
        setRelatedBlogs(allBlogs.data.filter((b) => b._id !== params.id));
      } else {
        toast.error("Blog not found!");
      }
    }
  }, [allBlogs.isSuccess, allBlogs.data, params.id]);

  if (allBlogs.isLoading) return <p className="text-center py-10">Loading...</p>;
  if (!blog) return <p className="text-center py-10">Blog not found.</p>;

  return (
    <>
      <Header />
      <CommonHero title="Blog Details" />

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-8">
          {/* Main Blog Content */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
            <Image
              src={blog.image}
              alt={blog.title}
              width={1200}
              height={600}
              className="w-full h-auto rounded-lg mb-6 object-cover"
            />
            <p className="text-gray-700 mb-4 font-semibold">{blog.shortDescription}</p>
            <div className="prose max-w-full text-gray-800">
              <p>{blog.description}</p>
            </div>
          </div>

          {/* Related Blogs Sidebar */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold mb-4">Related Blogs</h2>
            {relatedBlogs.map((b) => (
              <div key={b._id} className="bg-white gap-3 flex rounded shadow p-3 hover:shadow-lg transition">
                <Image
                  src={b.image}
                  alt={b.title}
                  width={100}
                  height={100}
                  className="w-[100px] h-[70px] object-cover rounded mb-2"
                />
                <div>
                    <h3 className="text-lg font-bold">{b.title}</h3>
                    <p className="text-gray-600 text-sm truncate">{b.shortDescription}</p>
                    <Link href={`/blog/${b._id}`}>
                      <p className="text-primary hover:underline transition-all duration-300">
                        Read More
                      </p>
                    </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BlogDetailsPage;
