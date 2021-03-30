import React, {useState} from "react";


const Characters = ({characters}) => {

  const [show, setShow] = useState(false)
  
  return (
        <div
          className="chars"
          style={{
            backgroundColor: (characters.gender === "Male" ? "#4169E1" : "#FF1493"),
          }}
          >

          <h2>{characters.name} </h2>
          
          <img className="photo" src={characters.image} alt={characters.name}/>

          <h3>{characters.nickname}</h3>

          {show && <h4>Gender: {characters.gender}</h4>}
          {show && <h4>Addict: {characters.addict}</h4>}
          {show && <h4>Alive: {characters.stillalive === true ? "Live" : "Dead"}</h4>}
          {show && <h4>Actor: {characters.actor}</h4>}

          {!show 
          ? <button onClick={() => setShow(!show)} >Show More</button> 
          : <button onClick={() => setShow(!show)} >Show Less</button>}

        </div>
      )} 


export default Characters;