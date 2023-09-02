import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import validator from 'validator';
import axios from 'axios';
import Nav from "../Components/Nav";


function SignUpe() {
  const [error,setErorr]=useState("")
  const navg=useNavigate()
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    url:""
  });
 
  

  const saveUser =() =>{ 
    const data ={
        name: user.name,
        username: user.username,
        email: user.email,
        password: user.password,
        url: user.url
    }
    console.log(data.username);
    
    if(data.username==""||data.email==""||data.password==""||data.url=="" ||data.name=="")
    {setErorr("There is something empty")}
    else if(data.username.length< 3 || data.password.length<8 ||data.name.length< 5){
      setErorr("The length of the username and password must be greater than eight characters")
    }else if(!validator.isEmail(data.email)){
      setErorr("The email is incorrect")  
    }
    else{
      axios.post(`https://64f20ce40e1e60602d24a55c.mockapi.io/twitter/users`,data)
      .then(res=>{
          console.log(res);
          navg("/")
      });
     
      setErorr("")
    }
       
  }
    return (

        <div>
      <Nav />
      <div className="flex justify-center items-center">
        <div className="flex border w-9/12 drop-shadow-lg mt-10">
          {/* Left side */}
          <div className="flex flex-col gap-5 justify-center items-center w-4/6 bg-gray-100 py-16">
            <div className="flex flex-col gap-10 justify-center items-center">
            <h1 className="text-3xl">Sign up</h1>
                <div className="flex flex-col gap-5 justify-center items-center">

                    <input 
                    className="py-2 px-12 rounded-xl drop-shadow-lg"
                    name="name" 
                    type="text" 
                    placeholder="Name"
                    onChange={(e) =>{setUser({ ...user, name: e.target.value })}}
                    />
                    <input 
                    className="py-2 px-12 rounded-xl drop-shadow-lg" 
                    name="username"
                    type="text" 
                    placeholder="UserName"
                    onChange={(e) =>{setUser({ ...user, username: e.target.value })}}
                    />
                    <input 
                    className="py-2 px-12 rounded-xl drop-shadow-lg" 
                    name="email"
                    type="email" 
                    placeholder="Email"
                    onChange={(e) =>{setUser({ ...user, email: e.target.value })}}
                    />

                    <input 
                    className="py-2 px-12 rounded-xl drop-shadow-lg" 
                    name="password"
                    type="password" 
                    placeholder="password"
                    onChange={(e) =>{setUser({ ...user, password: e.target.value })}}
                    />
                    <input 
                    className="py-2 px-12 rounded-xl drop-shadow-lg" 
                    name="url"
                    type="text" 
                    placeholder="Profile URL img"
                    onChange={(e) =>{setUser({ ...user, url: e.target.value })}}
                    />
                    
                </div>
            </div>
                
                <div>
                {error}
                </div>

                <button
                    className="py-2 px-10 rounded-xl drop-shadow-lg text-white bg-myBlue hover:bg-sky-600"
                    onClick={saveUser}
                >
                    Sign up    
                </button>

                <div className=" flex gap-1 text-sm justify-center items-center">
                <p>you have an account?</p>
                <a href="/">
                  <p className="text-myBlue hover:text-sky-600 ">Log in</p>
                </a>
              </div>
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

export default SignUpe;
