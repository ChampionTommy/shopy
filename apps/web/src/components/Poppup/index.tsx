"use client";
import { Icon20SortOutline, Icon24ChevronDown } from "@vkontakte/icons";
import { useState } from "react";

type SortItem = {
  name: string;
};

const sortList = [
  { name: "Sort by newest" },
  { name: "Sort by oldest" },
];
export const Poppup = () => {
  const [sortValue, setSortValue] = useState("")
  const [openPoppup, setOpenPoppup] = useState(false);
  
  const handleSort = () => {
    setOpenPoppup(!openPoppup);
  };
  
  const onClickListItem = (obj: SortItem) => {
    setSortValue(obj.name);
    setOpenPoppup(!openPoppup);
    
  };

  return (
    <div className="navbar__poppup_sort">
      <Icon20SortOutline />
      <div className="navbar__poppup_sort__block">
        <span
          className="navbar__poppup_sort__block--title"
          onClick={handleSort}
        >
          {sortValue === "" ? "Sort by newest": sortValue }
        </span>
        {openPoppup && (
          <ul>
            {sortList.map((obj, i) => <li key={i} onClick={() => onClickListItem(obj)}>{obj.name}</li>)}
          </ul>
        )}
      </div>
      <Icon24ChevronDown width={20} height={20} color="#A3A3A3" />
    </div>
  );
};
