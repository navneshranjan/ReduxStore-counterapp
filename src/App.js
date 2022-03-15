import React from "react";
import "./App.css";
import { incNumber, decNumber } from "./actions/index";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <h1 className="heading">Increament/Decrement counter</h1>
        <h3>Using react-redux</h3>
        <div className="counter">
          <a title="Decrement" onClick={() => dispatch(decNumber())}>
            <span className="butt">-</span>
          </a>
          <input type="text" value={myState} />
          <a title="Increment" onClick={(state) => dispatch(incNumber(5))}>
            <span className="butt">+</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default App;
