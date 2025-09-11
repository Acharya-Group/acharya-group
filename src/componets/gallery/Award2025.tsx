import { awardItems } from '@/lib/utils'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

const Award2025 = () => {
  const [loading, setLoading] = useState(true)

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className='container mx-auto px-4 relative'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {loading ? (
          // Skeleton loading state
          Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md">
              <div className="w-full h-48 bg-gray-200 animate-pulse"></div>
            </div>
          ))
        ) : (
          // Loaded content
          awardItems.map((item) => (
            <div key={item.id} className="overflow-hidden rounded-lg shadow-md">
              <Image
                height={200}
                width={300}
                src={item.image}
                alt="Awards Image"
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Award2025