
import {Route,Routes} from "react-router-dom"
import './App.css'

//components
import Home from "./Pages/Home";
import LogIn from "./Pages/LogIn";
import SignUpe from "./Pages/SignUpe"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/Home" element={<Home />} />
      <Route path="/SignUpe" element={<SignUpe/>} />
    </Routes>
    </>
  );
}

export default App;
