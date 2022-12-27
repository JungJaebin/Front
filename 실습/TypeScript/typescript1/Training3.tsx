import { type } from "@testing-library/user-event/dist/type";
import React from "react";

const Training3 = () => {
  let productID: number | string;
  let name: string;
  let price: number | string;
  let count: number | string;
  let total: number;

  type overlapType = number | string;

  const getTotal = (price: overlapType, count: number) => {
    return total;
  };

  const setProduct = (
    productID: overlapType,
    name: string,
    price: overlapType
  ) => {
    return productID;
  };

  return <div></div>;
};

export default Training3;
