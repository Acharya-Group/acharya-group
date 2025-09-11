import { galleryItems } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

const EMitraImages = () => {
  return (
    <div className='container mx-auto px-4 relative'>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {galleryItems.map((item) => (
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
    </div>
  )
}

export default EMitraImages