import React from "react";

const Training4 = () => {
  function add(a: number, b: number): number {
    return a + b;
  }

  let result = add(3, 4);

  return <h2>숫자 3과 4의 합: {result}</h2>;
};

export default Training4;
