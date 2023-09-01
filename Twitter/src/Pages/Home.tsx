import React from "react";
import{useState ,useEffect} from "react"
import axios from "axios"


// Components
import Profile from "../Components/Profile";
import NewTwit from "../Components/NewTwit";
import Twit from "../Components/Twit";
import AllTwit from "../Components/AllTwit";


function Home() {
    const [active,setActive]=useState("Home")
    type alltwt={
        username:string;
        twitText: string;
        url: string;
        lik: string;

    }

    const [apiTwit,setApiTwit]=useState<alltwt[]>([])

    useEffect( ()=>{
        axios
        .get("https://64f20ce40e1e60602d24a55c.mockapi.io/twitter/Posts")
        .then((res) =>{
            setApiTwit(res.data)
        })
    },[])

    return (
        <div>
        <div className="flex ">
            {/* left side */}
            <div className=" w-3/12 h-screen border-solid border-x-4 flex border-b-slate-950  justify-center">
            <div className="flex flex-col w-2/3 text-2xl  ">
                <svg
                viewBox="0 0 24 24"
                className="h-12 w-12 text-sky-500 mt-5 mb-10"
                fill="currentColor"
                >
                <g>
                    <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
                </g>
                </svg>

                <div className=" flex flex-col gap-10 text-lg">
                <a 
                className="flex hover:text-sky-500 cursor-pointer"
                onClick={()=>{setActive("Home")}}
                >
                    <svg
                    className="mr-4 h-8 w-8"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6"
                    />
                    </svg>
                    Home
                </a>
                <a href="" className="flex hover:text-sky-500">
                    <svg
                    className="mr-4 h-8 w-8"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    >
                    <path d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path>
                    </svg>
                    Explore
                </a>

                <a href="" className="flex hover:text-sky-500">
                    <svg
                    className="mr-4 h-8 w-8"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    >
                    <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                    </svg>
                    Notifications
                </a>
                <a href="" className="flex hover:text-sky-500">
                    <svg
                    className="mr-4 h-8 w-8"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    >
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    Messages
                </a>
                <a href="" className="flex hover:text-sky-500">
                    <svg
                    className="mr-4 h-8 w-8"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    >
                    <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                    </svg>
                    Bookmarks
                </a>
                <a href="" className="flex hover:text-sky-500">
                    <svg
                    className="mr-4 h-8 w-8"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    >
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                    </svg>
                    Lists
                </a>
                <a 
                
                className="flex hover:text-sky-500 cursor-pointer"
                onClick={()=>{setActive("Profile")}}
                >
                    <svg
                    className="mr-4 h-8 w-8"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    >
                    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                    Profile
                </a>
                <a href="" className="flex hover:text-sky-500">
                    <svg
                    className="mr-4 h-8 w-8"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    >
                    <path d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    More
                </a>
                <a href="" className="flex hover:text-sky-500"></a>
                </div>
                <button className="py-3 px-4 text-lg font-bold  bg-sky-500 rounded-full text-cyan-50 hover:bg-sky-600">
                Post
                </button>
            </div>
            </div>

            {/* The middle side */}
            <div className=" w-5/12 h-screen">
                {/* new twit */}
                <div className="h-2/5">
                    {active=="Home" && <NewTwit/>}
                    {active=="Profile" && <Profile/>}
                </div>
                {/* all twit */}
                <div className="h-3/5 overflow-y-auto ">
                    <AllTwit/>
                
                </div>
            </div>

            {/* Right side */}
            <div className=" w-4/12 h-screen border-solid border-x-4  border-b-slate-950 pl-5 ">
                {/* search box */} 
                <div className="border-solid border-2 r w-5/6 h-12 mt-5 rounded-full flex items-center bg-zinc-100">
                    <button className="h-full pl-4 ">
                        <svg className="h-5 w-5 fill-current" 
                        viewBox="0 0 56.966 56.966">
                            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
                        </svg>
                    </button>
                    <input type="text" className=" pl-4 outline-none w-2/3 bg-zinc-100" placeholder="Search Twitter" />
                </div>
                {/*setting  */}
                <div className="border-solid border-2 r w-5/6 h-4/5 my-5 rounded-2xl  bg-zinc-100">
                    {/* trending */}
                <div className="flex justify-between my-2">
                    <h1 className="text-xl px-5"><b> Our accounts</b></h1>
                    <svg 
                    className="mr-2 h-6 w-6 text-sky-500" 
                    fill="none" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24">
                        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z">
                            </path>
                            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z">
                                </path>
                                </svg>
                    
                </div>

                    <div className="border-solid border-y-2 border-gray-200 p-5">
                        <p className="text-gray-400">Git hup account</p>
                        <a href=""><b>Abdulrahman</b> </a>
                    </div>
                    <div className="border-solid border-b-2 border-gray-200 p-5">
                        <p className="text-gray-400">Git hup account</p>
                        <a href="https://github.com/shazmend"><b>Shatha</b> </a>
                    </div>
                    <div className="border-solid border-b-2 border-gray-200 p-5">
                        <p className="text-gray-400">LinkedIn account</p>
                        <a href=""><b>Abdulrahman</b> </a>
                    </div>
                    <div className="border-solid border-b-2 border-gray-200 p-5">
                        <p className="text-gray-400">LinkedIn account</p>
                        <a href="https://www.linkedin.com/in/shatha-alfqih/"><b>Shatha</b> </a>
                    </div>

                </div>
                

                
            </div>
        </div>
        </div>
    );
    }

export default Home;
