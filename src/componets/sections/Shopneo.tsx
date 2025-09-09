import Image from "next/image";
import React from "react";
import { FaTags, FaTruck, FaLock, FaShoppingCart, FaUsers, FaStore } from "react-icons/fa";

const Shopneo = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-6 lg:px-12">
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
      className="rounded-lg shadow-lg mx-auto"
    />
  </div>
</div>


      <div className="grid md:grid-cols-2 gap-8">
          {/* For Buyers */}
        <div className="bg-white shadow-md rounded-2xl p-8 mb-10 border-l-4 border-primary">
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
        <div className="bg-white shadow-md rounded-2xl p-8 mb-10 border-l-4 border-secondary">
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

        {/* Key Features */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Key Features of ShopNeo.in
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition">
              <FaTags className="text-secondary text-3xl mb-3" />
              <h4 className="font-semibold text-lg mb-2">Wide Selection</h4>
              <p className="text-gray-600">Thousands of products across multiple categories to choose from.</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition">
              <FaShoppingCart className="text-secondary text-3xl mb-3" />
              <h4 className="font-semibold text-lg mb-2">Exclusive Deals</h4>
              <p className="text-gray-600">Regular discounts, festive sales, and special offers for buyers.</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition">
              <FaLock className="text-secondary text-3xl mb-3" />
              <h4 className="font-semibold text-lg mb-2">Secure Payments</h4>
              <p className="text-gray-600">Safe transactions with multiple payment options and encryption.</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition">
              <FaTruck className="text-secondary text-3xl mb-3" />
              <h4 className="font-semibold text-lg mb-2">Fast Delivery</h4>
              <p className="text-gray-600">Reliable shipping services for quick doorstep delivery.</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition">
              <FaUsers className="text-secondary text-3xl mb-3" />
              <h4 className="font-semibold text-lg mb-2">User-Friendly Interface</h4>
              <p className="text-gray-600">Seamless browsing, personalized recommendations, and easy checkout.</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition">
              <FaStore className="text-secondary text-3xl mb-3" />
              <h4 className="font-semibold text-lg mb-2">Seller Support</h4>
              <p className="text-gray-600">Tools for managing inventory, tracking sales, and marketing products.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Join ShopNeo Today!
          </h3>
          <p className="text-gray-700 mb-6">
            Free registration for <strong>buyers and sellers</strong> across Pan India. Grow your business or shop with ease!
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
