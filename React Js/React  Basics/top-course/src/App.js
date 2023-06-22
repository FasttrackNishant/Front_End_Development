import React from "react";
import "./App.css";
import { useEffect, useState } from "react";

const App = () => {
  const [text, setText] = useState("");

  //use effect hook

  // //variation 1 -->every render
  // useEffect(() =>
  // {
  //   console.log("ui rendering done")
  // })

  //variation 2 ->first render
  // useEffect(() => {
  //   console.log("Ui RENDEREING DONE");
  // }, []);

  //variation 3 -> isme ek baar run hoga (first render + whenveve dependencies change)
  // useEffect(() => {
  //   console.log("change observed");
  // }, [text]);

  //variation 4 ->
  useEffect(() => {
    //add event listener

    console.log("event listener added");

    return () => {
      console.log("listner removed ");
    };
  }, [text]);

  function changeHandler(event) {
    console.log(text);
    setText(event.target.value);
  }

  return (
    <div className="App">
      Enter the Text :<input type="text" onChange={changeHandler}></input>
    </div>
  );
};

export default App;
