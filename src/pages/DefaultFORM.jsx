import React from "react";

const DefaultFORM = () => {
  return (
    <div className="w-full mt-20 h-full flex flex-col justify-center items-center">
      FORM
      <label id="name" htmlFor="naem">Name</label>
      <input type="text" name="Enter username" id="name" />
      <label id="password" htmlFor="passsadf">Password</label>
      <input type="text" name="Enter password" id="password" />
      <button className="p-2 bg-orange-500 rounded-md" type="button">
        Sumbit
      </button>
    </div>
  );
};

export default DefaultFORM;
