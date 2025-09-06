import React from 'react';
import SubHeading from '../ui/SubHeading';

const About = () => {
  return (
    <section className='bg-primary-50'>
        <div className='container mx-auto px-4 py-12 overflow-hidden'>
          <SubHeading content='About Achariya Group' align='center' />
        
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 items-center mt-8'>
            {/* Text Content */}
            <div className='order-2 lg:order-1'>
                <h3 className='font-semibold text-xl'>The Largest Service Network You Can Trust</h3>
              <p className="text-justify">
                Achariya Technologies Private Limited commenced its operations in the year 2008. Since then the company has periodically incorporated innovative technologies and updated its methods to match current global standards ensuring overall optimization of its processes. Now we are leading and nationally accepted Service Provider in e-Governance, <b>e-Mitra, G2C- B2C- B2B Services, Insurance, RKCL-RSCIT & BankBc (CSP)</b> across Pan India.
                
                {/* Content that shows only on medium screens and up */}
                <span className="hidden md:inline">
                  {" "}Over the last 15 years, Achariya Technologies Pvt. Ltd. has played an integral role in Digital Transformation & Emerging Technologies to serve the customers across the Nation. Integrated Information, high standards of delivery, quality service with premium value, employing advanced technological mechanisms, transparent and efficient client servicing - all together contribute towards the success story of Achariya Technologies Private Limited.
                </span>
                
                {/* Truncated content for mobile screens */}
                <span className="inline md:hidden">
                  {" "}Over the last 15 years, we have played an integral role in Digital Transformation & Emerging Technologies across the Nation.
                </span>
              </p>
        
              <div className="group mt-6 inline-block">
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 bg-primary text-white font-semibold rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group-hover:scale-105 hover:bg-secondary"
                >
                  Learn More
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
        
            {/* Image Content */}
            <div className='order-1 lg:order-2 relative'>
              <div className='relative overflow-hidden rounded-2xl shadow-2xl'>
                <img
                  src="/images/about-img.png"
                  alt="About Achariya Group"
                  className='w-full h-auto transform transition-all duration-700 hover:scale-105'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-end'>
                  <div className='p-6 text-white translate-y-4 hover:translate-y-0 transition-transform duration-500'>
                    <h3 className='text-xl font-bold'>Innovation & Excellence</h3>
                    <p className='mt-2'>Driving progress since 2008</p>
                  </div>
                </div>
              </div>
        
              {/* Decorative elements */}
              <div className='absolute -z-10 -top-4 -right-4 w-32 h-32 bg-blue-200 rounded-full opacity-50 blur-xl'></div>
              <div className='absolute -z-10 -bottom-4 -left-4 w-24 h-24 bg-indigo-200 rounded-full opacity-50 blur-xl'></div>
            </div>
          </div>
        </div>
    </section>
  );
}

export default About;