import React from "react";
import axios from "axios";
import Twit from "./Twit";

function Likes() {
  type alltwt = {
    id: string;
    username: string;
    twitText: string;
    url: string;
    lik: string;
  };
  const [apiTwit, setApiTwit] = React.useState<alltwt[]>([]);

  React.useEffect(() => {
    axios
      .get("https://64f20ce40e1e60602d24a55c.mockapi.io/twitter/Posts")
      .then((res) => {
        setApiTwit(res.data);
      });
  }, [apiTwit]);

  return (
    <div>
    
    {
        apiTwit.map((item) =>{ 
            if(item.lik == "true" ) {
                return(
                    <>
                    <Twit id={item.id} username={item.username} url={item.url} twitText={item.twitText} lik={item.lik} /> 
                    </>
                    )
            }
            
        }).reverse()  
      }  
    </div>
  )
}

export default Likes;
