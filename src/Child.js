import { useState, useEffect } from "react";

const Child = (props) => {
  useEffect(() => {
    const fetchApi = async () => {
      let response = await fetch("https://jsonplaceholder.typicode.com/todos");
      let data = await response.json();
      console.log(data);
      props.apiData(data);
    };
    fetchApi();
  }, []);
};
export default Child;
