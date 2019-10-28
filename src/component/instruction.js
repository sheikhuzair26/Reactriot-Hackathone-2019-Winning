import React from "react";
import "./instruction.css";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

const Instruction = () => {
  return (
    <div>
      <div className="InsBg">
        <div className="InsContent">
          <h1>instruction</h1>

          <ul>
            <li>
              Answer 5 Questions right to proceed to the next level. <br></br>
              (If your Questions are wrong you will lost)
            </li>
            <li>Type all Answers must be in a lowercase</li>
          </ul>

          <div className="proceed">
            <button className="InstBtn">
              <Link style={{ textDecoration: 'none'}} to="/select-player">Proceed</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instruction;
