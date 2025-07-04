import React, { useState } from "react";
import { categories } from "../assets/dummyData/categories";

export const CategoryList: React.FC = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="flex gap-2 p-2 ">
      {categories.map((category, index) => (
        <div
          onClick={() => setActive(index)}
          className={`rounded-md py-2 px-3 cursor-pointer
             ${
               active === index
                 ? "bg-main-300 text-main-100 dark:bg-main-500"
                 : "bg-main-100 text-black hover:bg-main-300 dark:bg-main-300 dark:text-main-100 dark:hover:bg-main-500"
             }`}
          key={index}
        >
          {category}{" "}
        </div>
      ))}
    </div>
  );
};
