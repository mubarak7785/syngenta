import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function App() {
  const [disc, setDisc] = useState(0);
  const [c1, setC1] = useState("d1");
  const [c2, setC2] = useState("d2");
  const [c3, setC3] = useState("d3");
  const [c4, setC4] = useState("d4");
  const [c5, setC5] = useState("d5");
  const setdisk = () => {
    if (disc == 1) {
      setC1("disk1");
    }
    if (disc == 2) {
      setC2("disk2");
    }
    if (disc == 3) {
      setC3("disk3");
    }
    if (disc == 4) {
      setC4("disk4");
    }
    if (disc == 5) {
      setC5("disk5");
    }
  };
  const takevalue = (e) => {
    const { value } = e.target;
    setDisc(value);
  };
  const repalce1 = () => {
    setC1("d1");
  };
  const repalce2 = () => {
    setC2("d2");
  };
  const repalce3 = () => {
    setC3("d3");
  };
  const repalce4 = () => {
    setC4("d4");
  };
  const repalce5 = () => {
    setC5("d5");
  };
  return (
    <div className="App">
      <div className="container">
        <div>
          <div className="left-div"></div>
          <br />
          <input className="input-taker" placeholder="Enter Number (1-5)" type="number" onChange={takevalue} />
          <button onClick={setdisk}>Shoot</button>
        </div>
        <div className="right-div">
          <div className={c1} onClick={repalce1}></div>
          <div className={c2} onClick={repalce2}></div>
          <div className={c3} onClick={repalce3}></div>
          <div className={c4} onClick={repalce4}></div>
          <div className={c5} onClick={repalce5}></div>
        </div>
      </div>
    </div>
  );
}
export default App;
