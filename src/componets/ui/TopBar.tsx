import { socialLinks } from "@/lib/utils";
import Link from "next/link";
import { FiPhone, FiMail} from "react-icons/fi";

export default function TopBar() {
  return (
    <div className="bg-[#261b7d] text-white font-semibold py-2 px-5 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">
      {/* Left: Info text */}
   <p className="text-sm md:text-base text-center md:text-start">
  {"Note : Achariya Tech. doesn't accept any cash payments."}
</p>
      {/* Right: Contact & social */}
      <div className="flex flex-wrap justify-center gap-1 items-center sm:gap-4 text-sm md:text-base">
       <Link href="tel:+918901903333" className="flex items-center gap-1 hover:underline">
  <FiPhone />
  <span>+91 890-190-3333</span>
</Link>

     <a href="mailto:info@Achariyagroup.com" className="flex items-center gap-1 hover:underline">
  <FiMail />
  <span>info@Achariyagroup.com</span>
</a>

       <div className="flex items-center gap-3">
  <span>Follow us:</span>
  {socialLinks.map((item, i) => {
    const Icon = item.icon;
    return (
      <Link
        key={i}
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="h-8 w-8 rounded-full group bg-white text-[#261b7d] flex items-center justify-center hover:bg-blue-500 transition-all duration-300"
      >
        <Icon className="group-hover:text-white transition-all duration-300" />
      </Link>
    );
  })}
</div>

      </div>
    </div>
  );
}
