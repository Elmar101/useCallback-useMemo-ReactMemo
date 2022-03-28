import { useCallback, useMemo, useState } from "react";
import Child from "./Child";
import "./styles.css";
const dataObj = { name: "Elmar" };
function calCulate() {
  console.log("Hesablama Basladi");
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
      for (let k = 0; k < i * j; k++) {}
    }
  }
  console.log("Hesablama Bitdi");
  return "Hesabla";
}
export default function App() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");
  // const data = dataObj;
  const data = useMemo(() => {
    return dataObj;
  }, []);

  const calc = useMemo(() => {
    return calCulate();
  }, []);

  const incrimentForChildFn = useCallback(() => {
    setNumber((prevNumber) => prevNumber + 1);
  }, []);
  return (
    <div className="App">
      <Child
        name={data}
        number={number < 100 ? 0 : number}
        calCulate={calc}
        incriment={incrimentForChildFn}
      />
      <hr />
      <h1>Parent Number is {number} </h1>
      <button onClick={() => setNumber((number) => number + 1)}>
        IncNumber
      </button>
      <br />
      <br />
      <input value={text} onChange={({ target }) => setText(target.value)} />
    </div>
  );
}
