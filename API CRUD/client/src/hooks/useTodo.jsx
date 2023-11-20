import React, { useEffect, useState } from "react";

function useTodo(id = null) {
  const [data, setData] = useState([]);
  let url;
  if (id) {
    url = "http://127.0.0.1:8000/GetOne/" + id;
  } else {
    url = "http://127.0.0.1:8000/GetAll";
  }

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    } catch (err) {
      console.log({ err });
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  async function deleteTodo(id) {
    try{
//delete
    }catch(err){
        console.log({err});
    }
  }

  return { data,deleteTodo };
}

export default useTodo;
