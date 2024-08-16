import React from "react";
import { useForm } from "react-hook-form";
function Input({ handleData }) {
  const { handleSubmit, register, reset } = useForm();

  const handelClickSubmit = (data) => {
    handleData(data);
    reset();
  };

  return (
    <>
      <div className=" mt-5">
        <form
          onSubmit={handleSubmit(handelClickSubmit)}
          className="flex items-center justify-between gap-5"
        >
          <input
            {...register("name")}
            className="px-2 focus:outline-none rounded-md"
            type="text"
            name="name"
            placeholder="Name"
          />
          <input
            {...register("email")}
            className="px-2 focus:outline-none rounded-md"
            type="text"
            name="email"
            placeholder="Email"
          />
          <input
            {...register("image")}
            className="px-2 focus:outline-none rounded-md"
            type="text"
            name="image"
            placeholder="Image"
          />
          <input
            type="submit"
            className="px-2 py-1 bg-blue-300 text-white rounded-md text-xs"
          />
        </form>
      </div>
    </>
  );
}

export default Input;
