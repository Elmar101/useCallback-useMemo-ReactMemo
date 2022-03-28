import React, { useState } from "react";
import "./styles.css";

export default React.memo(function Child({
  name,
  number,
  calCulate,
  incriment
}) {
  console.log("Child Re-Render");
  return (
    <div className="App">
      <h1> Child Working {number} </h1>
      <code> {JSON.stringify(name)} </code>
      <br />
      <code>{calCulate}</code>
      <br /> <br />
      <button onClick={incriment}>IncNumber from child</button>
    </div>
  );
});
