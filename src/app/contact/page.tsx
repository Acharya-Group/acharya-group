import Header from '@/componets/layout/Header'
import CommonHero from '@/componets/sections/CommonHero'
import ContactUsPage from '@/componets/sections/ContactUsPage'
import React from 'react'

const page = () => {
  return (
    <>
    <Header/>
    <CommonHero title='Contact Us'/>
    <ContactUsPage/>
    </>
  )
}

export default page