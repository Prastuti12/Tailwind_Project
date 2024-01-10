import React from "react";

const list = ({Heading,items}) => {
  return (
    <div>
      <div className="resource-type border-2 w-full border-zinc py-2 px-4 rounded-xl mt-6">
        <div className="head flex justify-between">
          <div className="type">
            <h1>{Heading}</h1>
          </div>
          <div className="left flex">
            <input type="checkbox" name="" id="" />
            <p className="pl-2">All</p>
          </div>
        </div>
       
      </div>
      <div className="list border-2 border-zinc py-2 h-fit px-8 mt-2 rounded-xl">
          <ul className="list-[square]">
          {items.map((item, index) => (
            <li className="py-2 " key={index}>{item}</li>
          ))}
          </ul>
        </div>
    </div>
  );
};

export default list;
