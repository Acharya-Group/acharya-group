'use client';

import React, { useState, ChangeEvent } from 'react';
import AdminLayout from '@/componets/admin/AdminLayout';
import Image from 'next/image';

interface Image {
  url: string;
  publicId: string;
}

interface Gallery {
  category: string;
  images: Image[];
}

const Page: React.FC = () => {
  const [galleries, setGalleries] = useState<Gallery[]>([
    {
      category: 'school',
      images: [],
    },
  ]);

  const [newCategory, setNewCategory] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  // Add new category
  const handleAddCategory = () => {
    if (!newCategory) return;
    if (galleries.find(g => g.category === newCategory.toLowerCase())) {
      alert('Category already exists!');
      return;
    }
    setGalleries([...galleries, { category: newCategory.toLowerCase(), images: [] }]);
    setNewCategory('');
  };

  // Handle file selection & create preview URLs
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setSelectedFiles(filesArray);
      setPreviewUrls(filesArray.map(file => URL.createObjectURL(file)));
    }
  };

  // Add images to selected category
  const handleAddImages = () => {
    if (!selectedCategory) return alert('Select a category');
    if (!selectedFiles.length) return alert('Select image(s)');

    const updatedGalleries = galleries.map(g => {
      if (g.category === selectedCategory) {
        const newImages: Image[] = selectedFiles.map(file => ({
          url: URL.createObjectURL(file),
          publicId: file.name,
        }));
        return { ...g, images: [...g.images, ...newImages] };
      }
      return g;
    });

    setGalleries(updatedGalleries);
    setSelectedFiles([]);
    setPreviewUrls([]);
  };

  return (
    <AdminLayout>
      <div className="mx-auto bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold mb-4">Add Gallery</h1>

        {/* Add Category */}
        <div className="my-4">
          <input
            type="text"
            value={newCategory}
            onChange={e => setNewCategory(e.target.value)}
            placeholder="New Category"
            className="w-full px-4 py-2 mb-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7a0706]"
          />
          <button
            onClick={handleAddCategory}
            className="w-full px-4 py-2 bg-[#7a0706] text-white rounded-lg hover:bg-[#5a0505] transition"
          >
            Add Category
          </button>
        </div>

        {/* Select Category */}
        <div className="">
          <select
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7a0706]"
          >
            <option value="">Select Category</option>
            {galleries.map(g => (
              <option key={g.category} value={g.category}>
                {g.category}
              </option>
            ))}
          </select>
        </div>

        {/* Upload Images */}
        <div className="my-4">
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            className="w-full px-4 py-2 border rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#7a0706]"
          />
          {previewUrls.length > 0 && (
            <div className="flex flex-wrap gap-4 mt-2">
              {previewUrls.map((url, index) => (
                <Image
                height={128}
                width={128}
                  key={index}
                  src={url}
                  alt={`preview-${index}`}
                  className="w-32 h-32 object-cover rounded-lg border"
                />
              ))}
            </div>
          )}
        </div>

        {/* Add Images Button */}
        <button
          onClick={handleAddImages}
          className="w-full px-4 py-2 bg-[#7a0706] text-white rounded-lg hover:bg-[#5a0505] transition"
        >
          Add Images to Category
        </button>
      </div>
    </AdminLayout>
  );
};

export default Page;
