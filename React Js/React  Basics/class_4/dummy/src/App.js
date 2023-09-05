import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [text, settext] = useState("");
  // const [name, setname] = useState("dd");
  const [size, setsize] = useState(window.innerWidth);

  //Variation 1
  // useEffect(() => {
  //   console.log("UI RENDERING DONE");
  // });

  //Varation 2 :
  //  useEffect(()=>
  //  {
  //   console.log("Variation 2");
  //  },[]);

  //  Varation 3
  // useEffect(()=>
  // {
  //   console.log('variation 3 ');
  // },[name]);

  // Varation 4
  // listrener laga rahe hain lekin naya listener lagane se pehle purane wale ko remove karo tabhi optimize performance aayega

  /*
  useEffect(()=>
  {
    console.log("added");

    return () =>
    {
      console.log("removed");
    }
  },[text]); 
*/

  useEffect(() => {
    console.log(window.innerWidth+"changed");
  }, [size]);

  function changeHandler(event) {
    settext(event.target.value);
    console.log(text);
  
  return (
    <div className="App">
      <input type="text" onChange={changeHandler}></input>
    </div>
  );
}
}
export default App;



// Home work window update

/*
import './App.css';
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [size, setsize] = useState(window.innerWidth);
  function winresize() {
    setsize(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', winresize);
    return () => window.removeEventListener('resize', winresize);
  }, []);
  return (
    <div>
      <button>Submit {size}</button>
    </div>
  );
}

export default MyComponent;


*/