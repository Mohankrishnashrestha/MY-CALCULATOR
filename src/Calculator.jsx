import { useState } from "react";
import "./calculator.css"
function Calculator() {
  const [state, setState] = useState();
  const [value1, setvalue1] = useState();
  const [value2, setvalue2] = useState();
  const [operation, setOperation] = useState("result:");

  function calc1() {
    const res = value1 + value2;
    setOperation("addition:");
    setState(res);
  }

  function calc2() {
    const res = value1 - value2;
    setOperation("subtraction:");
    setState(res);
  }
  function calc3() {
    const res = value1 * value2;
    setOperation("multiplication:");
    setState(res);
  }
  function calc4() {
    const res = value1 / value2;
    setOperation("division:");
    setState(res);
  }
  function typing1(e) {
    const intVal = parseInt(e.target.value);
    setvalue1(intVal);
  }
  function typing2(e) {
    const intVal = parseInt(e.target.value);

    setvalue2(intVal);
  }
  return (<div className="main_container">
    <div className="contaier">
      <div className="calculator">
      <div className="input">
      <input type="number" onChange={typing1} />
      <input type="number" onChange={typing2} />
      </div>
      <div className="result">
        {operation}
        {state}
      </div>
      <div className="div_button">
        <button onClick={calc1} className="button">Add</button>
        <button onClick={calc2} className="button">Sub</button>
        <button onClick={calc3} className="button">mul</button>
        <button onClick={calc4} className="button">div</button>
      </div>
      </div>
    </div>
    </div>
  );
}

export default Calculator;
