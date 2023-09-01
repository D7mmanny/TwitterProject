import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import validator from 'validator';
import axios from 'axios';


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
        <div className="flex ">
            
            <div className=" w-2/4 h-screen">
            
                {/* sign up */}
                <div className="h-screen flex justify-end items-center">
                    <div className=" mt-10 w-96  flex flex-col gap-5 text-center">
                    <h1 className="text-2xl">Sign up</h1>
                    <input
                        className="  placeholder:italic text-center rounded-full h-10  border-solid  border-2 border-black"
                        name="name"
                        type="text"
                        placeholder="name"
                    />
                    <input
                        className="  placeholder:italic text-center rounded-full h-10  border-solid  border-2 border-black"
                        name="username"
                        type="text"
                        placeholder="Username"
                    />
                    <input
                        className="placeholder:italic text-center rounded-full h-10 border-solid  border-2 border-black"
                        name="email"
                        type="email"
                        placeholder="Email"
                    />
                    <input
                        className=" placeholder:italic text-center rounded-full h-10  border-solid  border-2 border-black"
                        name="password"
                        type="password"
                        placeholder="Password"
                    />
                    <input
                        className="  placeholder:italic text-center rounded-full h-10  border-solid  border-2 border-black"
                        name="ProfileUrlImg"
                        type="text"
                        placeholder="Profile URL img"
                    />

                    <div className="flex flex-col items-center  mt-10">
                        {/* <div className="text-white mb-5">{error}</div> */}
                        <button
                        className=" text-white transform w-2/3 py-2 px-16 mb-12 rounded-full font-bold duration-300 bg-sky-500 border-transparent hover:bg-sky-600"
                        type="submit"
                        >
                        Sign up
                        </button>
                    </div>

                    </div>
                </div>
                
            

            </div>
                {/* twitter icon */}
            <div className=" w-2/4 h-screen flex justify-center items-center">
            <svg
                viewBox="0 0 24 24"
                className="h-1/3 w-1/3 text-sky-500  "
                fill="currentColor"
            >
                <g>
                <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
                </g>
            </svg>
            </div>

        </div>
        </div>
    );
}

export default SignUpe;
