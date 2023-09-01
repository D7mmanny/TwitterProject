import {Route,Routes} from "react-router-dom"
import './App.css'
import Home from "./Pages/Home"
import SignUpe from "./Pages/SignUpe"


function App() {


  return (
    <>
   
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/SignUpe" element={<SignUpe/>} />
    </Routes>

    </>
  )
}

export default App
