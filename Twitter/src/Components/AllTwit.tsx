import React from 'react'
import axios from "axios"
import Twit from "../Components/Twit";

function AllTwit() {
    type alltwt={
        username:string;
        twitText: string;
        url: string;
        lik: string;

    }
    const [apiTwit,setApiTwit]=React.useState<alltwt[]>([])

    const getPosts = () =>{
      axios
      .get("https://64f20ce40e1e60602d24a55c.mockapi.io/twitter/Posts")
      .then((res) =>{
          setApiTwit(res.data)
      })
    }

    React.useEffect(()=>{
      getPosts()  
    },[]);


  return (
    <div>
    {
        apiTwit.map((item) =>{ 
            return(
            <>
                <Twit username={item.username} url={item.url} twitText={item.twitText} lik={item.lik} /> 
            </>
            )
        }).reverse()  
      }  
    </div>
  )
}

export default AllTwit