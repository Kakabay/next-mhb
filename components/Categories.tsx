import { ICategory } from "@/typings/category.type";
import Category from "./Category";
import { v4 } from "uuid";

const Categories = () => {
  const samples: ICategory[] = [
    {
      id: 1,
      name: "Redaktoryň saýlany",
    },
    {
      id: 2,
      name: "Makalalar",
    },
    {
      id: 3,
      name: "Kinofilmler",
    },
    {
      id: 4,
      name: "Dokumental filmler",
    },
    {
      id: 5,
      name: "Multfilmler",
    },
    {
      id: 6,
      name: "Redaktoryň saýlany",
    },
    {
      id: 7,
      name: "Makalalar",
    },
    {
      id: 8,
      name: "Kinofilmler",
    },
    {
      id: 9,
      name: "Dokumental filmler",
    },
    {
      id: 10,
      name: "Multfilmler",
    },
  ];
  return (
    <ul className="flex flex-wrap gap-x-2 gap-y-3">
      {samples.map((sample) => (
        <Category id={sample.id} name={sample.name} key={v4()} />
      ))}
    </ul>
  );
};

export default Categories;
