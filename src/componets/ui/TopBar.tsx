import Link from "next/link";
import { FiPhone, FiMail, FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

export default function TopBar() {
  return (
    <div className="bg-[#261b7d] text-white font-semibold py-2 px-5 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">
      {/* Left: Info text */}
      <p className="text-sm md:text-base text-center md:text-start">Note : Achariya Tech. doesn't accept any cash payments.</p>

      {/* Right: Contact & social */}
      <div className="flex flex-wrap justify-center gap-1 items-center sm:gap-4 text-sm md:text-base">
       <Link href="tel:+918901903333" className="flex items-center gap-1 hover:underline">
  <FiPhone />
  <span>+91 890-190-3333</span>
</Link>

     <a href="mailto:info@achariyagroup.com" className="flex items-center gap-1 hover:underline">
  <FiMail />
  <span>info@achariyagroup.com</span>
</a>

        <div className="md:flex items-center gap-3 hidden">
          <span>Follow us:</span>
          <Link href="" className="h-8 w-8 rounded-full group bg-white text-[#261b7d] transition-all duration-300 flex hover:bg-blue-500 items-center justify-center">
              <FiFacebook className=" cursor-pointer group-hover:text-white transition-all duration-300" />
          </Link>
          <Link href="" className="h-8 w-8 rounded-full group bg-white text-[#261b7d] transition-all duration-300 flex hover:bg-blue-500 items-center justify-center">
             <FiTwitter className="group-hover:text-white cursor-pointer transition-all duration-300" />
          </Link>
          <Link href="" className="h-8 w-8 rounded-full group bg-white text-[#261b7d] transition-all duration-300 flex hover:bg-blue-500 items-center justify-center">
            <FiInstagram className="group-hover:text-white cursor-pointer transition-all duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
}
