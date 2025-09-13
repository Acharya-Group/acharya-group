import { socialLinks } from "@/lib/utils";
import Link from "next/link";

export default function TopBar() {
  return (
    <div className="bg-[#261b7d] text-white font-semibold py-2 px-5 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">
      {/* Left: Info text */}
   <p className="text-sm md:text-base text-center md:text-start">
  {"Note : Achariya Tech. doesn't accept any cash payments."}
</p>
<div className="flex flex-wrap items-center justify-center gap-3 lg:gap-6">

  <div className="flex items-center">
      {/* Ping Circle */}
      <div className="relative flex">
        <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex h-3 w-3 rounded-full bg-white"></span>
      </div>

      {/* The link */}
      <Link
        href="/order-e-mittra-stationery"
        className="ms-2 hover:underline text-white font-semibold"
      >
        Order e-mitra Stationery
      </Link>
    </div>

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
