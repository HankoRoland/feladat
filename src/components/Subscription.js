import React, {useState, useEffect} from "react";
import LoadingMask from './LoadingMask'

const Subscription = () => {
  const [email, setEmail] = useState("");
  const [hotel, setHotel] = useState("")

  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false)

  const sendSubscribe = (e) => {
    e.preventDefault();  

    setLoader(true) 
    setShow(!show)

    fetch("api/hotels/subscribe", 
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, hotel: hotel})

    })
      .then((response) => response.json())
      .then((data) => {setMessage(data);setLoader(false)})
      
      .catch(function() {
        setError(true)
        setLoader(false)
    })

    
  };
  
  const [show, setShow] = useState(false);
  const [loader, setLoader] = useState(false)
  
  
  return (
  <div>

    { !show 
     && (
     <form onSubmit={(e) => sendSubscribe(e)}>
       <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
       />

       <input
        type="submit" 
        value="Submit"
        disabled={ !(email.includes('@') && email.includes('.'))}
       />
     </form>
      ) 
      }
    
    { loader
      && <LoadingMask />
    }

    { message 
      && <h3>Subscribed</h3>
    }

    {/* { error 
      && <p>Oops, something happened</p> 
    } */}
  </div>
)
};

export default Subscription;