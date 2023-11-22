import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { backendUrl } from "../utils/backendUrl";
import { Link, useNavigate, useParams } from "react-router-dom";

function TodoEdit() {
  const [data, setData] = useState({title:'',description:''});
  const { id } = useParams();
  
  const navigate = useNavigate();

  async function fetchData() {
    const response = await fetch(backendUrl("GetOne/" + id));
    const result = await response.json();

    setData(result);
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(backendUrl("Update/" + id), {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      toast.success('Berhasil memperbarui data')
      navigate("/");
    } catch (err) {
      toast.error("Gagal memperbarui data");
      console.log(err);
    }
  };
  return (
    <form className="flex flex-col gap-4 px-4" onSubmit={handleSubmit}>
      <input
        value={data.title}
        onChange={e => setData({...data,title:e.target.value})}
        type="text"
        placeholder="Title"
        className="border border-green-200 rounded-md py-2 px-3 outline-none focus:border-green-300 focus:border-2"
      />

      <textarea
        onChange={e => setData({...data,description:e.target.value})}
        value={data.description}
        cols="30"
        rows="10"
        className="border border-green-200 rounded-md py-2 px-3 outline-none focus:border-green-300 focus:border-2"
        placeholder="Description"
      >

      </textarea>

      <div className="flex gap-4">
        <button className="px-5 py-2 bg-green-400 text-white rounded-md hover:bg-green-300">
          Update Todo
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

export default TodoEdit;
