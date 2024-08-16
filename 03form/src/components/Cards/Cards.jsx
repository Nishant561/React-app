import React from "react";
import Card from "../Card/Card";
function Cards({ value, handelRemove }) {
  return (
    <div className="w-[57rem] h-[300px] gap-4 flex-wrap overflow-auto flex p-5  bg-blue-300">
      {value.map((item, index) => (
        <Card
          key={index}
          index={index}
          handelRemove={handelRemove}
          value={item}
        />
      ))}
    </div>
  );
}

export default Cards;
