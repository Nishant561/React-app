import React from "react";

function Card({ value, handelRemove, index }) {
  const { name, email, image } = value;
  return (
    <>
      <div className="w-[188px] relative h-[240px] bg-slate-300 rounded-md flex flex-col items-center p-2 ">
        <div className="w-[50px] h-[50px] ">
          <img
            className="w-full h-full object-cover object-top rounded-full "
            src={image}
            alt=""
          />
        </div>

        <div className="mt-4 flex flex-col items-center gap-2">
          <h1 className="font-bold">{name}</h1>
          <h3 className="text-xs">{email}</h3>
          <h5 className="font-semibold text-xs leading-none text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            veritatis perspiciatis id esse?
          </h5>
        </div>

        <div className="left-1/2 bottom-[10px] absolute mt-4 -translate-x-[50%]">
          <button
            onClick={() => handelRemove(index)}
            className="px-2 py-1 bg-red-600 text-white rounded-md text-xs"
          >
            Remove it
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
