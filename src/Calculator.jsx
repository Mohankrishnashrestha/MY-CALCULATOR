import { useState } from "react";
import "./calculator.css"
const stateInIt={
  value1 :"",
  value2 :"",
  operation:"result",
  result:null,
};
function Calculator() {
  const [state, setState] = useState(stateInIt);
  

  function calc1() {
    const res = state.value1 + state.value2;
    setState({...state,result:res,operation:"add"});
  }

  function calc2() {
    const res = state.value1 - state.value2;  
    setState({...state,result:res,operation:"subtract"});
  }
  function calc3() {
    const res = state.value1 * state.value2;
    setState({...state,result:res,operation:"multiply"});
  }
  function calc4() {
    const res = state.value1 / state.value2;
    setState({...state,result:res,operation:"divide"});
  }
  function typing1(e) { 
    const intVal = parseInt(e.target.value);
    setState({...state,value1:intVal});
  }
  function typing2(e) {
    const intVal = parseInt(e.target.value);

    setState({...state,value2:intVal});
  }

  return (<div className="main_container">
    <div className="contaier">
      <div className="calculator">
      <div className="input">
      <input type="number" onChange={typing1} />
      <input type="number" onChange={typing2} />
      </div>
      <div className="result">
        {state.operation}:{state.result}
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
