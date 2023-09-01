import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//components
import Nav from "../Components/Nav";

function LogIn() {

const nav = useNavigate()
  // interfaces
  type IUser = {
    username: string;
    password: string;
  };
  type IUserApi = {
    username: string;
    password: string;
    name: string;
    url: string;
  };

  // useState
  const [userApi, setUserApi] = React.useState<IUserApi[]>([]);
  const [userInput, setUserInput] = React.useState<IUser>({
    username: "",
    password: "",
  });
  const [error, setErorr] = React.useState("");

  // get API
  React.useEffect(() => {
    axios
      .get("https://64f20ce40e1e60602d24a55c.mockapi.io/twitter/users")
      .then((response) => {
        setUserApi(response.data);
      });
  },[]);

  // onClick function
  const checkInfo = () => {
    userApi.map((user) => {
      if (userInput.username != "" && userInput.password != "") {
        if (
          userInput.username == user.username &&
          userInput.password == user.password
        ) {
          setErorr("");
          localStorage.setItem("name", user.name);
          localStorage.setItem("username", user.username);
          localStorage.setItem("url", user.url);
          nav("/Home")
        } else {
          setErorr("Incorect username or password");
        }
      } else {
        setErorr("empty");
      }
    });
  };

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
                placeholder="username"
                onChange={(e) => {
                  setUserInput({ ...userInput, username: e.target.value });
                }}
              />

              <input
                className="py-2 px-12 rounded-xl drop-shadow-lg"
                type="password"
                placeholder="password"
                onChange={(e) => {
                  setUserInput({ ...userInput, password: e.target.value });
                }}
              />
            </div>

            <div className="flex flex-col justify-center items-center gap-6">
              <div className="flex flex-col justify-center items-center gap-2">
                {error}
                <button
                  className="py-2 px-10 rounded-xl drop-shadow-lg text-white bg-myBlue hover:bg-sky-600"
                  onClick={checkInfo}
                >
                  Log in
                </button>
              </div>

              <div className=" flex gap-1 text-sm justify-center items-center">
                <p>don't have an account?</p>
                <a href="/SignUp">
                  <p className="text-myBlue hover:text-sky-600 ">
                    create account
                  </p>
                </a>
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className=" bg-myBlue w-2/6 flex justify-center items-center">
            <img
              className=" w-56"
              src="https://i.pinimg.com/originals/81/16/88/811688d44a9906c2b1db6cde2304168b.gif"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
