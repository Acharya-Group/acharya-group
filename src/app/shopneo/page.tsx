import Header from '@/componets/layout/Header'
import CommonHero from '@/componets/sections/CommonHero'
import Shopneo from '@/componets/sections/Shopneo'
import React from 'react'

const page = () => {
  return (
    <>
    <Header/>
    <CommonHero  title="Shopneo" />
    <Shopneo/>
    </>
  )
}

export default page