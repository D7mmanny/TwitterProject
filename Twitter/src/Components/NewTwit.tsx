import  { useState } from "react";
import axios from 'axios';

function NewTwit() {
    const ProfileUrl =localStorage.getItem("url")
    const userName  =localStorage.getItem("username")
    const [error,setErorr]=useState("")
    const [content, setcontent] = useState({
      username:"",  
      twitText: "",
      lik:""
    });
  
    const handleInput = (e) => {
      e.persist();
      setcontent({ ...content, [e.target.name]: e.target.value });
    };
  
    const saveContentr =(e) =>{ 
      e.preventDefault();
      const data ={
        username: userName,
         twitText: content.twitText,
        lik:"false"
        
          
      }
      if(data.twitText=="")
      {setErorr(" it is empty")
    }
      else{
        setErorr("")
        axios.post(`https://64f20ce40e1e60602d24a55c.mockapi.io/twitter/Posts`,data)
        .then();
        
      }
         
    }
    
    return (
        <div>
            {/* title */}
            <div className="flex justify-between border-soled border-b-2 p-5  ">
            <h1 className="text-2xl"> <b>Home</b></h1> 
            <svg 
            className="m-2 h-6 w-6 text-sky-500" 
            fill="currentColor" 
            viewBox="0 0 24 24">
                <g>
                    <path d="M22.772 10.506l-5.618-2.192-2.16-6.5c-.102-.307-.39-.514-.712-.514s-.61.207-.712.513l-2.16 6.5-5.62 2.192c-.287.112-.477.39-.477.7s.19.585.478.698l5.62 2.192 2.16 6.5c.102.306.39.513.712.513s.61-.207.712-.513l2.16-6.5 5.62-2.192c.287-.112.477-.39.477-.7s-.19-.585-.478-.697zm-6.49 2.32c-.208.08-.37.25-.44.46l-1.56 4.695-1.56-4.693c-.07-.21-.23-.38-.438-.462l-4.155-1.62 4.154-1.622c.208-.08.37-.25.44-.462l1.56-4.693 1.56 4.694c.07.212.23.382.438.463l4.155 1.62-4.155 1.622zM6.663 3.812h-1.88V2.05c0-.414-.337-.75-.75-.75s-.75.336-.75.75v1.762H1.5c-.414 0-.75.336-.75.75s.336.75.75.75h1.782v1.762c0 .414.336.75.75.75s.75-.336.75-.75V5.312h1.88c.415 0 .75-.336.75-.75s-.335-.75-.75-.75zm2.535 15.622h-1.1v-1.016c0-.414-.335-.75-.75-.75s-.75.336-.75.75v1.016H5.57c-.414 0-.75.336-.75.75s.336.75.75.75H6.6v1.016c0 .414.335.75.75.75s.75-.336.75-.75v-1.016h1.098c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z">
                    </path>
                </g>
            </svg>
            </div>
            {/* twit massage */}
            <div className='flex pt-7  p-5'>
                <img 
                className="border rounded-full w-14 h-14 p-0 mx-3"
                src={""+ProfileUrl}  />
                
                <textarea 
                className='text-justify outline-none p-4'
                name="twitText" 
                cols={70} 
                rows={3} 
                placeholder='What is happening'
                onChange={handleInput}
                ></textarea>
            </div>
            {/* button and icon */}
            <div className='flex'>
                <ul className='flex justify-evenly w-4/5 items-center text-sky-500'>
                    <a href="">
                        <svg 
                        className="text-center h-7 w-6" 
                        fill="none" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24">
                            <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z">
                            </path>
                        </svg>
                    </a>
                    <a href="">
                        <svg 
                        className="text-center h-7 w-6" 
                        fill="none" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" stroke="currentColor" 
                        viewBox="0 0 24 24">
                            <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                            </path>
                        </svg>
                    </a>
                    <a href="">
                        <svg 
                        className="text-center h-7 w-6" 
                        fill="none" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" stroke="currentColor" 
                        viewBox="0 0 24 24">
                            <path d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z">
                            </path>
                        </svg>
                    </a>
                    <a href="">
                        <svg 
                        className="text-center h-7 w-6" 
                        fill="none" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24">
                            <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                            </path>
                        </svg>
                    </a>
                </ul>

                <div className='flex justify-end w-full my-5 mr-5'>
                <button 
                className='bg-sky-500 text-white w-24 h-10 rounded-full hover:bg-sky-600'
                onClick={saveContentr}
                >
                <b>Tweet</b> 
                </button>
                </div>
                
                </div>
                <div className=" border-soled border-b-8 text-center">
                {error}
                </div>
                
                    
        </div>
    )
}

export default NewTwit