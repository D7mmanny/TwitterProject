import React from "react";

//components
import Nav from "../Components/Nav";

function LogIn() {
  const [userApi, setUserApi] = React.useState({
    userName: "",
    passWord: "",
    Like: "false",
  });
  return (
    <div>
      <Nav />
      <div className="flex justify-center items-center">
        <div className="flex border w-9/12 drop-shadow-lg mt-20">
          {/* Left side */}
          <div className="flex flex-col gap-12 justify-center items-center w-4/6 bg-gray-100 py-32">
                <h1 className="text-3xl">Log In</h1>
                <div className="flex flex-col gap-5 justify-center items-center">

                    <input 
                    className="py-2 px-12 rounded-xl drop-shadow-lg" 
                    type="text" 
                    placeholder="userName"/>

                    <input 
                    className="py-2 px-12 rounded-xl drop-shadow-lg" 
                    type="password" 
                    placeholder="password"/>
                </div>

                <button
                    className="py-2 px-10 rounded-xl drop-shadow-lg text-white bg-myBlue hover:bg-sky-600"
                >
                    Log in    
                </button>
          </div>

          {/* Right side */}
          <div className=" bg-myBlue w-2/6 flex justify-center items-center">
            <img className=" w-56" src="https://i.pinimg.com/originals/81/16/88/811688d44a9906c2b1db6cde2304168b.gif"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
