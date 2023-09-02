import LikeF from "./LikeF";
import LikeT from "./LikeT";
import React from "react";
import axios from "axios";

interface Twits {
  username: string;
  twitText: string;
  url: string;
  lik: string;
}

function Twit(props: Twits) {

    type alltwt={
        username:string;
        twitText: string;
        url: string;
        lik: string;
        id:string;
    }

  const localTwittText = localStorage.getItem("postTwitText");
  const [clicked, setClicked] = React.useState(false);
  const handleClick = () => {
    setClicked(!clicked);
    localStorage.setItem("postTwitText", props.twitText);
    
  };

  const [apiTwit, setApiTwit] = React.useState<alltwt[]>([]);
  const [postId, setPostId] = React.useState("");
  

  const  deletPost = async () => {

    fetch("https://64f20ce40e1e60602d24a55c.mockapi.io/twitter/Posts")
    .then (response => {
      return  response.json()
    })
    .then(data => {
        setApiTwit(data)
    })

    apiTwit.map((item) => {
      if (item.twitText == localTwittText) {
        setPostId(item.id) 

      }
    })

    axios.delete(`https://64f20ce40e1e60602d24a55c.mockapi.io/twitter/Posts/${postId}`)
  .then(() => {
    console.log(`Deleted post with ID ${postId}`);
    window.location.reload(false);
  })
  .catch(error => {
    console.log(error);
  });
  };
  return (
    <div className="border-b-2 border-gray-300">
      <div className=" pt-7  p-5 ">
        <div className="flex gap-5">
          <img
            className="border rounded-full w-14 h-14 p-0 mx-3"
            src={"" + props.url}
          />
          <h4>
            <b>{props.username}</b>{" "}
          </h4>
          <h4 className="text-gray-400">@{props.username}</h4>
        </div>

        <textarea
          className="text-justify outline-none mx-14"
          name="twitText"
          cols={70}
          rows={3}
          placeholder="What is happening"
          value={props.twitText}
        ></textarea>
      </div>
      <div>
        <ul className="flex justify-evenly text-sky-500">
          <a>
            <svg
              className="text-center h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
          </a>
          {/* <a >
                <svg
                className="text-center h-7 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
                >
                <path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path>
                </svg>
            </a> */}
          <a>
            {props.lik == "false" && <LikeF />}
            {props.lik == "true" && <LikeT />}
          </a>
          <a>
            <svg
              className="text-center h-7 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
            </svg>
          </a>
          {/* <a >
                <svg
                className="text-center h-7 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
                >
                <path d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"></path>
                </svg>
            </a> */}
          <div className="flex flex-col items-center">
            <a onClick={handleClick} className=" cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="text-center h-7 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </a>
            {clicked ? (
              <ul className="border px-6 py-1 mb-2 bg-slate-100">
                <li
                  onClick={deletPost}
                  className=" cursor-pointer text-black hover:text-red-600"
                >
                  Delete
                </li>
              </ul>
            ) : (
              <div />
            )}
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Twit;
