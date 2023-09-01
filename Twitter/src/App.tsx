import { Route, Routes } from "react-router-dom";
import "./App.css";

//components
import Home from "./Pages/Home";
import LogIn from "./Pages/LogIn";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
