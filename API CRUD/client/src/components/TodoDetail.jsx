import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useTodo from "../hooks/useTodo";
import { backendUrl } from "../utils/backendUrl";

function TodoDetail() {
  const [data, setData] = useState({});
  const { id } = useParams();
  async function fetchData() {
    const response = await fetch(backendUrl("GetOne/" + id));
    const result = await response.json();

    setData(result);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-[400px] p-8">
      <table>
        <tbody>
          <tr>
            <td className="w-[200px]">Title</td>
            <td>{data.title}</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>{data.description}</td>
          </tr>
        </tbody>
      </table>
      <Link
        to={"/"}
        className="inline-block mt-10 ml-10 py-2 px-8 rounded-md font-semibold text-white bg-green-400"
      >
        Back
      </Link>
    </div>
  );
}

export default TodoDetail;
