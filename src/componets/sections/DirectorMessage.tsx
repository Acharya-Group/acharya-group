import React from "react";
import Image from "next/image";

const DirectorMessage = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center gap-10">
          {/* Message Content */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Director&apos;s Message
          </h2>

          <div className="space-y-5 text-gray-700 leading-relaxed text-justify">
            <p>
              Progress for me has never been a dream. It has always been a distant
              reality and once one milestone is achieved, there is always another
              one waiting to be crossed. It is with this belief that I started
              Achariya Technologies Private Limited in 2008. Offering diversified
              customer-centric services in e-Governance, G2C-B2C-B2B, Finance
              Kiosk Banking, Insurance, and our other projects, we adopted a
              corporate structure that allows us to be a more competitive business
              and market player. The ongoing economic and social changes have
              required the focused attention of all our employees to improve
              performance and position us for success no matter what kind of
              markets we encounter.
            </p>

            <p>
              Overcoming challenge after challenge with the support of my brilliant
              team, I have been successful in bringing Achariya Technologies to a
              new milestone in service industry.
            </p>

            <p>
              At Achariya Technologies, we believe in doing things right and
              delivering foremost services to our clients. We are focusing on
              building an adaptive team and culture – one that can continually
              renew itself and thrive on change. We have demonstrated that we have
              the right strategy, right culture and right geographical footprint
              to deliver consistent and sustained value for our clients.
            </p>

            <p>
              The journey of Achariya is never-ending. But with the support of my
              team and clients, I am confident that the company will continue to
              scale milestones of excellence for years to come.
            </p>
          </div>

         
        </div>
       
        {/* Director Image */}
        <div className="flex-shrink-0 w-full md:w-1/3">
          <div className="relative w-full h-80 md:h-[400px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/directorImg.png"
              alt="Managing Director - Yespal Singh"
              layout="fill"
              objectFit="cover"
            />
          </div>
           {/* Signature */}
          <div className="mt-8">
            <p className="font-semibold text-lg text-gray-900">Yespal Singh</p>
            <p className="text-gray-500 italic mb-1">Managing Director</p>
            <p className="text-gray-500">director@achariyagroup.com</p>
            <p className="text-gray-500">Achariya Technologies Private Limited</p>
          </div>
        </div>

     
      </div>
    </section>
  );
};

export default DirectorMessage;
