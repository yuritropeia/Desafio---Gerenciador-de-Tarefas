/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "../src/components/Header.js";
import Content from "./components/Content.js";
import Footer from "./components/Footer.js";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="container">
      <Header />
      <Content tasks={tasks} setTasks={setTasks} />
      <Footer tasks={tasks} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
