import React from "react";

export default function Investments() {
  const name = sessionStorage.getItem("username");
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        Hi <u>{name}!</u>{" "}
      </h1>
      <h4>
        Welcome to Investments Page. You can access all the banking features
        here. Thank you for using our banking services. Have a nice day ahead!
      </h4>
    </div>
  );
}
