import React from "react";
import { incNumber, decNumber } from "./actions/index";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <h1>Increament/Decrement counter</h1>
        <h3>Using react-redux</h3>
        <div>
          <a title="Decrement" onClick={() => dispatch(decNumber())}>
            <span>-</span>
          </a>
          <input type="text" Value={myState} />
          <a title="Increment" onClick={(state) => dispatch(incNumber())}>
            <span>+</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default App;
