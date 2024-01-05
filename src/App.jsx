import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { RandomizeColor } from "./components/RandomizeColor";

function App() {
  return <main className="my-5 text-center">
    <RandomizeColor/>
  </main>;
}

export default App;
