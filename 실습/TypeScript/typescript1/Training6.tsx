import React from "react";

const Training6 = () => {
  function setUser(
    id: string,
    name: string,
    age: number = 20,
    address: string = "Seoul"
  ): void {
    // JSX.Element
    document.write(`<h2>userID: ${id}</h2>`);
    document.write(`<h2>userName: ${name}</h2>`);
    document.write(`<h2>userAge: ${age}</h2>`);
    document.write(`<h2>userAddress: ${address}</h2>`);
    document.write("----------");

    // <div>
    //   <p>userID: {id}</p>
    //   <p>userName: {name}</p>
    //   <p>userAge: {age}</p>
    //   <p>userAdress: {address}</p>
    // </div>;
  }

  setUser("admin", "JB");
  setUser("admin", "JB", 30);
  setUser("admin", "JB", 40, "Busan");

  return <div></div>;
};

export default Training6;
