import "./styles.css";
import Child from "./Child";
import { useState } from "react";

export default function App() {
  const [title, setTitle] = useState([]);
  const getAPIData = (val) => {
    setTitle(val);
  };

  return (
    <div className="App">
      <h1>Calling API</h1>
      <Child apiData={getAPIData} />
      {title.map((dt) => (
        <p>{dt.title}</p>
      ))}
    </div>
  );
}
