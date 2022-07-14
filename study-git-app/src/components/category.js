import { Select } from "@chakra-ui/react";
import React from "react";

export const Category = (props) => {

  return (
    <>
      <Select
        value={props.currentCategory}
        onChange={(event) => props.onCurrentCategoryChange(event.target.value)}
      >
        <option value="car">car</option>
        <option value="rent">rent</option>
        <option value="grocery">grocery</option>
      </Select>
    </>
  );
};
