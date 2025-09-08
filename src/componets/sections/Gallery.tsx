import React from 'react'
import Link from 'next/link'
import SubHeading from '../ui/SubHeading'
import Button from '../ui/Button'
import Image from 'next/image'

// Example gallery items
const galleryItems = [
  { id: 1, image: '/images/about-img.png'},
  { id: 2, image: '/images/about-img.png'},
  { id: 3, image: '/images/about-img.png'},
  { id: 4, image: '/images/about-img.png'},
  { id: 5, image: '/images/about-img.png'},
  { id: 6, image: '/images/about-img.png'},
  { id: 7, image: '/images/about-img.png'},
  { id: 8, image: '/images/about-img.png'},
  { id: 9, image: '/images/about-img.png'},
  { id: 10, image: '/images/about-img.png'},
]

const Gallery = () => {
  // Show first 8 items for 2 rows
  const previewItems = galleryItems.slice(0, 8)

  return (
    <div className="container mx-auto px-4 py-12 relative">
      <SubHeading content="Gallery" align="center" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {previewItems.map((item) => (
          <div key={item.id} className="overflow-hidden rounded-lg shadow-md">
            <Image
            height={200}
            width={300}
              src={item.image}
              alt='Gallery Image'
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="flex justify-center mt-8">
        <Link
          href="/gallery">
              <Button
                                content="Show more"
                                className="w-auto px-6 cursor-pointer"
                            />
        </Link>
      </div>
    </div>
  )
}

export default Gallery
