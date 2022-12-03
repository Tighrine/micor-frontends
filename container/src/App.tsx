import React from "react";
import ReactDOM from "react-dom";
import { Counter } from 'counter/Counter';

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <h1 className="text-3xl font-bold">Name: container</h1>
    <Counter />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
