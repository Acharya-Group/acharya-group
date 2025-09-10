import Header from '@/componets/layout/Header'
import CommonHero from '@/componets/sections/CommonHero'
import KioskBank from '@/componets/sections/KioskBank'
import React from 'react'

const page = () => {
  return (
    <>
    <Header/>
    <CommonHero title='Kiosk Banking'/>
    <KioskBank/>
    </>
  )
}

export default page