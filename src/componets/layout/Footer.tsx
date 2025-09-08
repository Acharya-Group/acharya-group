"use client";
import Link from "next/link";
import { pages, support, socialLinks, projectsLink, navdropdowns } from "../../lib/utils";
const downloadsSection = navdropdowns.find(item => item.title === "Downloads");
import Image from "next/image";
export default function Footer() {

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 pt-10 pb-3">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* About Shopneo */}
          <div className="md:col-span-4">
            <div className="bg-white inline-block px-2 mb-3 rounded">
                <Image src="/images/logo.png" alt="Aacharya Group Logo" width={150} height={50} className="mb-4"/>
            </div>
            <p className="text-sm opacity-75 mb-3">
             "Aacharya Group is dedicated to delivering innovative solutions and exceptional services. Committed to excellence, we build lasting value for our clients and communities."
            </p>
            {/* Social Media */}
             <p className="font-semibold mb-0">Social Links</p>
           <ul className="flex gap-4 mt-4">
      {socialLinks.map((item, i) => {
        const Icon = item.icon;
        return (
          <li key={i}>
            <Link
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 w-8 rounded-full group bg-white text-[#261b7d] transition-all duration-300 flex hover:bg-blue-500 items-center justify-center"
            >
              <Icon className="cursor-pointer group-hover:text-white transition-all duration-300" />
            </Link>
          </li>
        );
      })}
    </ul>
          </div>

          {/* Pages */}
          <div className="md:col-span-2">
            <h5 className="text-lg font-semibold mb-3">Pages</h5>
            <ul className="space-y-2 text-sm">
              {pages.map((item, i) => (
                <li key={i}>
                  <Link
                   href={item.url}
                    className="transition-all duration-300 opacity-75 hover:text-yellow-400 hover:opacity-100"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div className="md:col-span-2">
            <h5 className="text-lg font-semibold mb-3">Projects</h5>
            <ul className="space-y-2 text-sm">
               {projectsLink.map((item, i) => (
    <li key={i}>
      <Link
        href={item.url}
        className="transition-all duration-300 opacity-75 hover:text-yellow-400 hover:opacity-100"
      >
        {item.title}
      </Link>
    </li>
  ))}
            </ul>
          </div>

          {/* Collections */}
          <div className="md:col-span-2">
            <h5 className="text-lg font-semibold mb-3">Downloads</h5>
           <ul className="space-y-2 text-sm">
    {downloadsSection?.links.map((link, index) => (
      <li key={index}>
        <Link
          href={link.href}
          className="transition-all duration-300 opacity-75 hover:text-yellow-400 hover:opacity-100"
          target={link.type === "download" ? "_blank" : "_self"}
          download={link.type === "download"}
        >
          {link.name}
        </Link>
      </li>
    ))}
  </ul>
          </div>

          {/* ONDC Network */}
          <div className="md:col-span-2">
            <h5 className="text-lg font-semibold mb-3">Support</h5>
     <ul className="space-y-2 text-sm">
  {support.map((item, i) => (
    <li key={i}>
      {item.type === "heading" ? (
        <span className="font-semibold">{item.title}</span>
      ) : (
        <a
          href={item.url}
          className="transition-all duration-300 opacity-75 hover:text-yellow-400 hover:opacity-100"
          target={item.type !== "internal" ? "_blank" : "_self"}
          rel={item.type !== "internal" ? "noopener noreferrer" : undefined}
        >
          {item.title}
        </a>
      )}
    </li>
  ))}
</ul>


          </div>
        </div>

        {/* Footer bottom */}
        <div className="py-3 border-t border-gray-700 mt-8">
          
            <p className="text-sm opacity-75 text-center">© {new Date().getFullYear()} AcharyaGroup All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}