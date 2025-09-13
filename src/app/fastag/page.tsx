import Header from '@/componets/layout/Header'
import CommonHero from '@/componets/sections/CommonHero'
import Fastag from '@/componets/sections/Fastag'
import React from 'react'

const page = () => {
  return (
    <>
    <Header/>
    <CommonHero title="Order e-Mitra Stationery" />
    <Fastag/>
    </>
  )
}

export default page