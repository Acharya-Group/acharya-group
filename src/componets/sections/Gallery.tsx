"use client"
import React from 'react'
import Link from 'next/link'
import SubHeading from '../ui/SubHeading'
import Button from '../ui/Button'
import Image from 'next/image'
import { galleryItems } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const Gallery = () => {
  const pathname = usePathname()

  // अगर home path है तो 8 ही items दिखें वरना सारे
  const previewItems = pathname === "/" ? galleryItems.slice(0, 8) : galleryItems

  return (
    <div className="container mx-auto px-4 py-12 relative">
 {pathname === "/" ? <SubHeading content="Gallery" /> : ""}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {previewItems.map((item) => (
          <div key={item.id} className="overflow-hidden rounded-lg shadow-md">
            <Image
              height={200}
              width={300}
              src={item.image}
              alt="Gallery Image"
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Show More Button केवल home page पर दिखे */}
      {pathname === "/" && (
        <div className="flex justify-center mt-8">
          <Link href="/gallery">
            <Button
              content="Show more"
              className="w-auto px-6 cursor-pointer"
            />
          </Link>
        </div>
      )}
    </div>
  )
}

export default Gallery
