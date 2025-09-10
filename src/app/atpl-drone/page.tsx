import Header from '@/componets/layout/Header'
import CommonHero from '@/componets/sections/CommonHero'
import React from 'react'

const page = () => {
  return (
    <>
    <Header/>
    <CommonHero title='Insurance'/>
    <div className='min-h-[400px] flex items-center justify-center text-2xl font-semibold'>Coming Soon...</div>
    </>
  )
}

export default page