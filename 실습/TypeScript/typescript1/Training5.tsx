import React from "react";

const Training5 = () => {
  function setUser(
    name: string,
    comment1: string,
    comment2: string = `${comment1} ${name}`
  ): void {
    console.log([name, comment1, comment2]);
  }

  setUser("JB", "Hello");
  setUser("JB", "Hello", "Nice to meet you");

  return <></>;
};

export default Training5;
