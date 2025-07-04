import { useState } from "react";
import "./App.css";
import BottomMainRight from "./component/BottomMainRight";

function App() {
  const [value, setValue] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setValue(e.target.name.value);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="enter name..." id="name" />
        <button type="submit">submit</button>
      </form>
      <BottomMainRight name={value} />
    </>
  );
}

export default App;
