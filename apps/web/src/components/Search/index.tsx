"use client";
import { Icon16SearchOutline } from "@vkontakte/icons";
export const Search = () => {
  return (
    <div className="search input__default">
      <Icon16SearchOutline color="#A3A3A3" />
      <input
        className="search--input search--text"
        type="text"
        placeholder="Type to search..."
      />
    </div>
  );
};
