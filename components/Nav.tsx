"use client";

import Image from "next/dist/client/image";
import Link from "next/dist/client/link";
import { usePathname } from "next/navigation";
import { AiOutlineUser } from "react-icons/ai";
import ThemeSwitch from "./home/ThemeSwitch";

const Nav = () => {
  const path = usePathname();
  return (
    <nav className="nav py-1 border-b-2 border-solid border-[#D9D9D9] ">
      <div className="container">
        <div className="nav-inner flex justify-between gap-4 items-center">
          <div className="flex gap-11 items-center justify-start">
            <Link href={"/"} className="logo">
              <Image
                priority
                src={"/logo.jpg"}
                alt="logo"
                unoptimized
                unselectable="off"
                width={60}
                height={60}
                className="w-[60px] h-[60px] object-contain"
              />
            </Link>
            <ul className="flex gap-5 items-center justify-start">
              <li>
                <Link
                  href={"/main/news"}
                  className="block text-lg text-black transition-all font-redhat font-bold"
                  style={path.includes("news") ? { color: "#FFAB48" } : {}}
                >
                  Habarlar
                </Link>
              </li>
              <li>
                <Link
                  href={"/main/treasury"}
                  className="block text-lg text-black transition-all font-redhat font-bold"
                  style={path.includes("treasury") ? { color: "#FFAB48" } : {}}
                >
                  Hazyna
                </Link>
              </li>
              <li>
                <Link
                  href={"/main/live"}
                  className="block text-lg text-black transition-all font-redhat font-bold"
                  style={path.includes("live") ? { color: "#FFAB48" } : {}}
                >
                  Göni Ýaýlym
                </Link>
              </li>
              <li>
                <Link
                  href={"/main/advert"}
                  className="block text-lg text-black transition-all font-redhat font-bold"
                  style={path.includes("advert") ? { color: "#FFAB48" } : {}}
                >
                  Mahabat
                </Link>
              </li>
            </ul>
          </div>
          <ul className="flex gap-4 items-center">
            <li>
              <Link href={"/"} className="font-redhat font-normal text-lg">
                Habarlaşmak üçin
              </Link>
            </li>
            <li>
              <span className="text-[#B2B1B1]">|</span>
            </li>
            <li>
              <AiOutlineUser color="black" className="w-[22px] h-[22px]" />
            </li>
            <li>
              <span className="text-[#B2B1B1]">|</span>
            </li>
            <li>
              <ThemeSwitch />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
