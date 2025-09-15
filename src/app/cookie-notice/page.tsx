import Header from '@/componets/layout/Header'
import CommonHero from '@/componets/sections/CommonHero'
import Cookie from '@/componets/sections/Cookie'
import React from 'react'

const page = () => {
  return (
    <>
    <Header/>
    <CommonHero title="Cookie Notice"/>
    <Cookie/>
    </>
  )
}

export default page