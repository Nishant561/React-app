import React from "react";

function Card({ value, index, handelClick }) {
  const { title, img, added, singer } = value;

  return (
    <>
      <div className="w-24  h-24 bg-orange-400">
        <img
          src={img}
          className="w-full delay-1000 animate-pulse h-full object-cover object-center"
        />
      </div>

      <div>
        <h1 className="font-bold whitespace-nowrap">Title: {title}</h1>
        <h3 className="text-xs">Singer: {singer}</h3>
      </div>

      <button
        onClick={() => handelClick(index)}
        className={`${
          added ? "bg-green-500" : "bg-orange-500"
        } rounded-xl  text-white text-xs absolute -bottom-4 px-4 py-2 left-1/2 -translate-x-[50%]`}
      >
        {added ? "Added" : "Add Favourite"}
      </button>
    </>
  );
}

export { Card };
