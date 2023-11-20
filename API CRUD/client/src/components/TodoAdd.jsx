import React, { useRef } from "react";
import { toast } from "react-toastify";
import { backendUrl } from "../utils/backendUrl";
import { Link, useNavigate } from "react-router-dom";

function TodoAdd() {
  const titleRef = useRef(null);
  const descRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", titleRef.current.value);
    formData.append("description", descRef.current.value);
    try {
      await fetch(backendUrl("Create"), {
        method: "POST",
        body: formData,
      });
      navigate("/");
    } catch (err) {
      toast.error("Gagal menambahkan data");
      console.log(err);
    }
  };
  return (
    <form className="flex flex-col gap-4 px-4" onSubmit={handleSubmit}>
      <input
        ref={titleRef}
        type="text"
        placeholder="Title"
        className="border border-green-200 rounded-md py-2 px-3 outline-none focus:border-green-300 focus:border-2"
      />

      <textarea
        ref={descRef}
        cols="30"
        rows="10"
        className="border border-green-200 rounded-md py-2 px-3 outline-none focus:border-green-300 focus:border-2"
        placeholder="Description"
      ></textarea>

      <div className="flex gap-4">
        <button className="px-5 py-2 bg-green-400 text-white rounded-md hover:bg-green-300">
          Add Todo
        </button>
        <Link
          to={"/"}
          className="block ml-10 py-2 px-8 rounded-md font-semibold text-white bg-red-400 hover:bg-red-300"
        >
          Back
        </Link>
      </div>
    </form>
  );
}

export default TodoAdd;
