import { ICategory } from "@/typings/category.type";
import Link from "next/dist/client/link";

const Category = ({ id, name }: ICategory) => {
  return (
    <li className="flex-1 max-w-[180px]">
      <Link
        href={"/"}
        className="bg-categorybg rounded-five px-3 py-2 flex justify-center w-full whitespace-nowrap font-redhat"
      >
        {name}
      </Link>
    </li>
  );
};

export default Category;
