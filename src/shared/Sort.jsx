import React from "react";
import Dropdown from "./Dropdown";

const sortOptions = ["most viewed", "highest related", "newest"];

const Sort = React.memo(() => {
  return (
    <Dropdown
      options={sortOptions}
      label="Sort by"
      getSelectedOption={(option) => console.log(option)}
    />
  );
});

Sort.displayName = "Sort";

export default Sort;
