import React from "react";

const Training1 = () => {
  let productID: string = "p1234";
  let name: string = "사과";
  let count: number = 30;
  let sale: boolean = false;

  return (
    <div>
      <h2>상품 번호: {productID}</h2>
      <h2>상품 이름: {name}</h2>
      <h2>상품 수량: {count}</h2>
      <h2>세일 여부: {sale ? "세일 기간" : "정상 판매"}</h2>
    </div>
  );
};

export default Training1;
