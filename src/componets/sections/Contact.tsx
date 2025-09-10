"use client"
import React from 'react'
import SubHeading from '../ui/SubHeading'
import Button from '../ui/Button'
import Image from 'next/image'

const Contact = () => {
    return (
        <section className="bg-gray-50">
            <div className="container mx-auto px-4 py-16 relative">
                <SubHeading content="Get in Touch" />
                <div className="flex flex-wrap items-center mt-8 bg-white rounded-2xl shadow-lg overflow-hidden">
                    {/* Left Image */}
                    <div className="w-full md:w-1/2">

                        <Image
                            src="/images/contact.jpg"
                            alt="Contact illustration"
                            width={600}
                            height={400}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Right Form */}
                    <div className="w-full md:w-1/2 p-8">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                            Send us a Message
                        </h3>
                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="border-2 border-gray-200 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="border-2 border-gray-200 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <input
                                type="number"
                                placeholder="Phone Number"
                                className="border-2 border-gray-200 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <textarea
                                placeholder="Message"
                                rows={4}
                                className="border-2 border-gray-200 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary"
                            ></textarea>
                            <Button
                                content="Submit"
                                onClick={() => alert("Clicked!")}
                                className="w-auto px-6"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
