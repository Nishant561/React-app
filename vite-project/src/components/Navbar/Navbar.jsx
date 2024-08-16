import React from "react";

function Navbar({ value }) {
  return (
    <>
      <div className="flex w-full p-5 justify-between items-center">
        <div>
          <h1 className="text-orange-500">Orange</h1>
        </div>

        <div>
          <h1 className="text-xs cursor-pointer text-white py-2 px-4 bg-orange-500 rounded-md">
            Favourate {value.filter((item) => item.added).length}
          </h1>
        </div>
      </div>
    </>
  );
}

export { Navbar };
