"use client";
import Footer from '@/componets/layout/Footer'
import Header from '@/componets/layout/Header'
import CommonHero from '@/componets/sections/CommonHero'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const Page = () => {

    const searchParams = useSearchParams()


    return (
        <>
            <Header />
            <CommonHero title='Payment Success' />
              <section>
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
            <h1 className="text-4xl font-bold text-green-600 mb-4">Payment Successful</h1>
            <p className="text-lg text-gray-700 mb-2">Your payment was completed successfully.</p>
            <p className="text-gray-600">Order ID: {JSON.stringify(searchParams.get("orderId"))}</p>
            <p className="text-gray-600">Transaction ID: {JSON.stringify(searchParams.get("txnid"))}</p>
          </div>
        </div>
       </section>
            <Footer />
        </>
    )
}

export default Page