import { shopneoFeatures } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { FaTags, FaTruck, FaLock, FaShoppingCart, FaUsers, FaStore } from "react-icons/fa";

const Shopneo = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-12">
      <div>
        <div className="container mx-auto px-4">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            ShopNeo.in <span className="text-secondary">- eCommerce Portal</span>
          </h2>
          <div className="grid md:grid-cols-5 gap-8 items-center mb-12">
            {/* Text Content - 80% width */}
            <div className="md:col-span-4 text-gray-700 leading-relaxed">
           <p className="text-gray-700 leading-relaxed">
            <strong>“ShopNeo.in”</strong> is the brand of Achariya Technologies Private Limited and serves as your ultimate online shopping destination, bringing together buyers and sellers across <strong>Pan India</strong> on a single, easy-to-use platform. Designed for convenience, efficiency, and security, ShopNeo.in allows customers to browse thousands of products across categories such as fashion, electronics, home essentials, personal care, and much more. The platform provides detailed product descriptions, customer reviews, personalized recommendations, and intuitive search and filter options to help shoppers make informed decisions. 
          
            For sellers, ShopNeo.in is a powerful tool to reach a nationwide audience without the need for physical stores. Sellers can easily list products, manage inventory, track sales, access real-time analytics, and run promotional campaigns to boost visibility and growth. Secure payment gateways, reliable shipping options, and a dedicated support system ensure smooth transactions for both buyers and sellers.  
          
            With ShopNeo.in, online shopping becomes a seamless experience that combines choice, convenience, and confidence. Whether you’re looking for the latest trends, exclusive deals, or a trusted platform to sell your products, ShopNeo.in empowers every user to make the most of the digital marketplace. Join today and explore a world of shopping and selling opportunities designed to make your online experience enjoyable, secure, and rewarding.
          </p>
          
            </div>
          
            {/* Image Content - 20% width */}
            <div className="md:col-span-1">
              <Image
                src="/images/shopneo_logo.png"
                alt="ShopNeo eCommerce Portal"
                width={300} 
                height={300}
                className="rounded-lg shadow-lg mx-auto border-2 border-amber-600"
              />
            </div>
          </div>
          
          
                <div className="grid md:grid-cols-2 gap-8">
            {/* For Buyers */}
          <div className="bg-white shadow-md rounded-2xl p-8 mb-10 border-l-4 border-primary relative overflow-hidden">
             <div className="bg-secondary h-[100px] w-[100px] absolute  opacity-10 top-[-40px] left-[-40px] rounded-full"></div>
 <div className="bg-secondary h-[100px] w-[100px] absolute  opacity-10 bottom-[-40px] right-[-40px] rounded-full"></div>
            <h3 className="text-2xl font-semibold text-primary mb-4">For Buyers</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Wide selection of products across categories: fashion, electronics, home essentials, and more.</li>
              <li>User-friendly interface for smooth browsing and checkout.</li>
              <li>Secure payments with multiple options.</li>
              <li>Fast delivery and easy tracking of orders.</li>
              <li>Exclusive deals, discounts, and festive offers.</li>
              <li>Product reviews and ratings to make informed decisions.</li>
            </ul>
          </div>
          {/* For Sellers */}
          <div className="bg-white shadow-md rounded-2xl p-8 mb-10 border-l-4 border-secondary overflow-hidden relative">
             <div className="bg-secondary h-[100px] w-[100px] absolute  opacity-10 top-[-40px] left-[-40px] rounded-full"></div>
 <div className="bg-secondary h-[100px] w-[100px] absolute  opacity-10 bottom-[-40px] right-[-40px] rounded-full"></div>
            <h3 className="text-2xl font-semibold text-secondary mb-4">For Sellers</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Reach customers across India without geographical limits.</li>
              <li>Showcase your products professionally on a modern platform.</li>
              <li>Easy onboarding with free registration.</li>
              <li>Advanced analytics to track sales and performance.</li>
              <li>Marketing and promotional support to boost sales.</li>
              <li>Secure payment settlement and reliable support.</li>
            </ul>
          </div>
                </div>
        </div>

        {/* Key Features */}
      <div className="bg-gray-50">
  <div className="py-12 container mx-auto px-4">
    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
      Key Features of ShopNeo.in
    </h3>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {shopneoFeatures.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <div
            key={index}
            className="p-6 bg-white shadow-[0px_3px_8px_rgba(0,0,0,0.24)] rounded-xl hover:bg-[rgba(122,7,6,0.2)] transition flex flex-col items-center text-center"
          >
            <Icon className="text-secondary text-3xl mb-3" />
            <h4 className="font-semibold text-lg mb-2">{feature.title}</h4>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        );
      })}
    </div>
  </div>
</div>


        {/* Call to Action */}
        <div className="mt-12 text-center container mx-auto px-4">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Join ShopNeo Today!
          </h3>
          <p className="text-gray-700 mb-6">
            Free registration for <strong>sellers</strong> across Pan India. Grow your business or shop with ease!
          </p>
          <a
            href="https://shopneo.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-secondary hover:bg-primary text-white font-medium px-8 py-3 rounded-full transition-all duration-300"
          >
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Shopneo;
