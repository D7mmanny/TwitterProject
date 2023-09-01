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
 
  
  const handleInput = (e) => {
    e.persist();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const saveUser =(e) =>{ 
    e.preventDefault();
    const data ={
        name: user.name,
        username: user.username,
        email: user.email,
        password: user.password,
        url: user.url
    }
    if(data.username==""||data.email==""||data.password==""||data.url=="")
    {setErorr("There is something empty")}
    else if(data.username.length< 3 ||data.password.length<8){
      setErorr("The length of the username and password must be greater than eight characters")
    }else if(!validator.isEmail(data.email)){
      setErorr("The email is incorrect")  
    }
    else{
      axios.post(`https://64ec519ff9b2b70f2bfa171d.mockapi.io/CRUD-HW`,data)
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
        <div className="flex border w-9/12 drop-shadow-lg mt-20">
          {/* Left side */}
          <div className="flex flex-col gap-12 justify-center items-center w-4/6 bg-gray-100 py-32">
                <h1 className="text-3xl">Sin up</h1>
                <div className="flex flex-col gap-5 justify-center items-center">

                    <input 
                    className="py-2 px-12 rounded-xl drop-shadow-lg" 
                    type="text" 
                    placeholder="Name"/>
                    <input 
                    className="py-2 px-12 rounded-xl drop-shadow-lg" 
                    type="text" 
                    placeholder="UserName"/>
                    <input 
                    className="py-2 px-12 rounded-xl drop-shadow-lg" 
                    type="email" 
                    placeholder="Email"/>

                    <input 
                    className="py-2 px-12 rounded-xl drop-shadow-lg" 
                    type="password" 
                    placeholder="password"/>
                    <input 
                    className="py-2 px-12 rounded-xl drop-shadow-lg" 
                    type="text" 
                    placeholder="Profile URL img"/>
                </div>

                <button
                    className="py-2 px-10 rounded-xl drop-shadow-lg text-white bg-myBlue hover:bg-sky-600"
                >
                    Sign up    
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

export default SignUpe;
