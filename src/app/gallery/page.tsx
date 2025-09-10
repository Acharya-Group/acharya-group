import Header from '@/componets/layout/Header'
import CommonHero from '@/componets/sections/CommonHero'
import Gallery from '@/componets/sections/Gallery'
import React from 'react'

const page = () => {
  return (
    <>
    <Header/>
    <CommonHero title='Gallery'/>
    <Gallery/>
    </>
  )
}

export default page