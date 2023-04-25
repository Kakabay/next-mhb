import Link from "next/dist/client/link";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner bg-[#121268] py-[22px] px-8 grid grid-cols-footer gap-4">
          <div className="flex flex-col gap-14">
            <ul className="grid grid-cols-2 gap-3">
              <li>
                <Link
                  href={"/main/news"}
                  className="w-full h-full text-left font-redhat text-lg text-white"
                >
                  Habarlar
                </Link>
              </li>
              <li>
                <Link
                  href={"/main/advert"}
                  className="w-full h-full text-left font-redhat text-lg text-white"
                >
                  Mahabat
                </Link>
              </li>
              <li>
                <Link
                  href={"/main/treasury"}
                  className="w-full h-full text-left font-redhat text-lg text-white"
                >
                  Hazyna
                </Link>
              </li>
              <li>
                <Link
                  href={"/main/about"}
                  className="w-full h-full text-left font-redhat text-lg text-white"
                >
                  Biz barada
                </Link>
              </li>
              <li>
                <Link
                  href={"/main/live"}
                  className="w-full h-full text-left font-redhat text-lg text-white"
                >
                  Göni Ýaýlym
                </Link>
              </li>
              <li>
                <Link
                  href={"/main/contact"}
                  className="w-full h-full text-left font-redhat text-lg text-white"
                >
                  Habarlaşmak üçin
                </Link>
              </li>
            </ul>
            <p className="font-alexandria text-[#5151CF]">
              {year} © TurkmenTV. All rights reserved.
            </p>
          </div>
          <div className="flex flex-col gap-9">
            <p className="relative font-redhat font-normal opacity-60 text-white flex flex-col gap-3 pl-[18px]">
              <a href="tel:+99312493705">Phone: +993 12 493705</a>
              <span>Aşgabat şäheri Oguzhan 13</span>
              <a href="mailto:mahabat@turkmentv.gov.tm">
                mahabat@turkmentv.gov.tm
              </a>
              <span className="absolute top-0 left-0 w-[5px] h-full bg-white"></span>
            </p>
            <Link
              href={"/main/tarif"}
              className="bg-[#37ABE1] w-full py-3 px-4 rounded-five text-center text-white font-redhat font-bold text-lg"
            >
              Go Premium
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
