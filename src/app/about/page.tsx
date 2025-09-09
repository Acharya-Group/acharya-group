import Header from '@/componets/layout/Header'
import AboutAcharya from '@/componets/sections/AboutAcharya'
import CommonHero from '@/componets/sections/CommonHero'
import React from 'react'

const page = () => {
  return (
    <>
    <Header/>
<CommonHero  title="About Us" />  
<AboutAcharya/> 
    </>
  )
}

export default page