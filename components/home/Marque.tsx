"use client";

import Link from "next/dist/client/link";
import Marquee from "react-fast-marquee";

const Marque = () => {
  return (
    <div className="flex items-center fixed bottom-0 left-0">
      <div className="absolute left-0 bottom-0 bg-mred font-redhat text-white font-bold text-base z-20">
        <span className="p-[14px] block">Short News</span>
      </div>
      <Marquee
        direction="left"
        loop={1}
        speed={30}
        pauseOnHover
        className="w-full  bg-[#BBBB] z-10 my-[11px]"
        gradient={false}
      >
        <Link href={"/"} className="mr-6 py-1">
          Omicron Is Making America’s Bad Jobs Even Worse
        </Link>
        <Link href={"/"} className="mr-6 py-1">
          A Major New Index Fund Should Unnerve Climate-Skeptical CEOs
        </Link>
        <Link href={"/"} className="mr-6 py-1">
          6 Months Inside One of America’s Most Dangerous Industries
        </Link>
        <Link href={"/"} className="mr-6 py-1">
          Omicron Is Making America’s Bad Jobs Even Worse
        </Link>
        <Link href={"/"} className="mr-6 py-1">
          A Major New Index Fund Should Unnerve Climate-Skeptical CEOs
        </Link>
        <Link href={"/"} className="mr-6 py-1">
          6 Months Inside One of America’s Most Dangerous Industries
        </Link>
      </Marquee>
    </div>
  );
};

export default Marque;
