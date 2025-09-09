import Header from '@/componets/layout/Header'
import CommonHero from '@/componets/sections/CommonHero'
import EMitra from '@/componets/sections/EMitra'
import React from 'react'

const page = () => {
  return (
    <>
    <Header/>
    <CommonHero  title="E-Mitra" />
    <EMitra/>
    </>
  )
}

export default page