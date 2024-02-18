import Image from "next/image";
import Link from "next/link";
import React from "react";
import pfp from "@/public/logo.jpeg";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-center">
      <div className="w-10 rounded-full overflow-hidden mr-4">
        <Image
          src={pfp}
          alt="Ajesh DS"
          className="w-full h-auto rounded-full"
        />
      </div>
      {/* <span className="font-bold text-xl">Ajesh DS</span> */}
    </Link>
  );
};

export default Logo;
