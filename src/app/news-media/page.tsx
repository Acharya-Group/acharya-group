import Header from '@/componets/layout/Header'
import CommonHero from '@/componets/sections/CommonHero'
import NewsAndMedia from '@/componets/sections/NewsAndMedia'
import React from 'react'

const page = () => {
  return (
    <>
    <Header/>
    <CommonHero title='News & Media'/>
    <NewsAndMedia/>
    </>
  )
}

export default page