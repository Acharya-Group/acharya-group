import React from 'react';
import SubHeading from '../ui/SubHeading';

const VerifyApply = () => {
  // Data array for cards
  const cardsData = [
    {
      id: 1,
      title: "Verify e-Mitra",
      link: "/verify-emitra",
      icon: "✅"
    },
    {
      id: 2,
      title: "Apply For New e-Mitra",
      link: "/contact",
      icon: "📝"
    },
    {
      id: 3,
      title: "Join Telegram Channel",
      link: "https://t.me/myachariya",
      icon: "📢",
      external: true
    },
    {
      id: 4,
      title: "SSO Sign In",
      link: "/sso-signin",
      icon: "🔐" 
    }
  ];

  return (
    <div className='container mx-auto px-4 py-12'>
      <SubHeading content='Verify & Apply'/>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
        {cardsData.map((card) => (
          <a 
            key={card.id}
            href={card.link}
            target={card.external ? "_blank" : "_self"}
            rel={card.external ? "noopener noreferrer" : ""}
            className='group block p-4 border rounded-lg shadow hover:shadow-lg transition-all duration-300 hover:bg-[#261b7d]' // Using direct color code
          >
            <div className="text-3xl group-hover:scale-110 group-hover:text-white mb-2 flex justify-center transition-transform duration-300">
              {card.icon}
            </div>
            <h3 className='text-xl font-semibold text-gray-800 text-center group-hover:text-white transition-colors duration-300'>
              {card.title}
            </h3>
          </a>
        ))}
      </div>
    </div>
  );
}

export default VerifyApply;