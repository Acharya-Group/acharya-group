import Header from '@/componets/layout/Header'
import CommonHero from '@/componets/sections/CommonHero'
import RkclSection from '@/componets/sections/RkclSection'
import React from 'react'

const page = () => {
  return (
    <>
    <Header/>
    <CommonHero title='RKCL'/>
    <RkclSection/>
    </>
  )
}

export default page