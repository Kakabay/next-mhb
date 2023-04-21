import Link from "next/dist/client/link";

interface IProps {
  href: string;
  color: string;
  content: string;
}

const LinkBlock = ({ color, href, content }: IProps) => {
  return (
    <Link
      href={href}
      className="flex items-center justify-center p-4 w-full h-full font-aeroport font-bold text-[34px] text-white text-center"
      style={{ backgroundColor: color }}
    >
      {content}
    </Link>
  );
};

export default LinkBlock;
