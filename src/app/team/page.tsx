import Header from '@/componets/layout/Header'
import CommonHero from '@/componets/sections/CommonHero'
import TeamSection from '@/componets/sections/TeamSection'
import React from 'react'

const page = () => {
  return (
    <>
    <Header/>
    <CommonHero title='Our Team'/>
    <TeamSection/>
    </>
  )
}

export default page