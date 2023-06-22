import React from "react";

const App = () => {
  const [text, setText] = useState("");

  function changeHandler() {
    console.log(text);
  }

  return (
    <div className="App">
      <input type="text" onChange={changeHandler}>
        {" "}
      </input>
    </div>
  );
};

export default App;
