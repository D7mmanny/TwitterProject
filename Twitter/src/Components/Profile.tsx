import React from "react";

// components
import Header from "./Header";

function Profile() {
const name = localStorage.getItem("name");
const [active , setActive] = React.useState("posts")

  return (
    <div>
      {/* title */}
      <div className="flex items-center justify-between border-soled border-b-2 p-5  ">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl">
            {" "}
            <b>{name}</b>
          </h1>
          <p className="text-xs">number of posts</p>
        </div>
        <a href="/Home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </a>
      </div>
      <Header />

      {/* Navigate */}
      <div>
        <ul className="flex justify-center gap-72 pt-4 font-semibold">
          <a className=" cursor-pointer hover:text-sky-600" onClick={()=>{setActive("posts")}}><li>Posts</li></a>
          <a className=" cursor-pointer hover:text-sky-600" onClick={()=>{setActive("likes")}}><li>Likes</li></a> 
        </ul>
      </div>
      {/* {active == "posts" && } */}
      {/* {active == "Likes" && } */}
    </div>
  );
}

export default Profile;
