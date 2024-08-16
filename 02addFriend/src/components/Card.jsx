import React from "react";

function Card({ value, handelClick, index }) {
  const { name, profession, img, friend } = value;

  return (
    <>
      <div className="w-52 h-2/5 bg-white rounded-md overflow-hidden pb-2">
        <div className="bg-white w-full h-48">
          <img className="w-full h-full object-cover object-center" src={img} />
        </div>

        <div className="">
          <h1 className="font-bold">{name}</h1>
          <h3>{profession}</h3>
          <div
            className="w-full
                        text-center mt-3"
          >
            <button
              className={`${
                friend ? "bg-green-500" : "bg-blue-600"
              } rounded-md text-white py-1 px-2 text-center`}
              onClick={() => handelClick(index)}
            >
              {friend ? "Added" : "Add Friend"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
