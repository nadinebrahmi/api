import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
function UserList() {
  const [Obj, setObj] = useState([])
useEffect(() => {
  const options = {
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/users",

      headers: {
        "X-RapidAPI-Key": "8bd9d6c688msh68d31c229fdad4ap11c13ajsn87b83ab7f99a",
        "X-RapidAPI-Host": "weatherbit-v1-mashape.p.rapidapi.com",
      },
    };

    axios.request(options).then(function(response) {
      console.log(response.data)
      
      setObj(response.data)

      })
      .catch(function (error) {
        console.error(error);

  
    
        }, [])})
  return (
    <div className="f">
    { Obj.map((el)=> <div>
  <div className="card-container">
    <span className="pro">{el.id}</span>
    <img className="round" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7-d5qr9WzS926jiHDPlYrCL01Eb0M8C8c4w&usqp=CAU" alt="user" />
    <h3>{el.name}</h3>
    <h6>USERNAME:{el.username}</h6>
    <p>ADDRESS: {el.address.street} <br /> CITY: {el.address.city}</p>
    <div className="buttons">
      <p>PHONE: {el.phone}  </p>
    </div>
    <div className="skills">
      
      <p> EMAIL: {el.email}<br/> WEBSITE: {el.website}</p>
    </div>
  </div>
  <footer>
    <p>
     MY checkpoint API
    </p>
  </footer>
</div>
)}
  
</div>

 
 
  )
}

export default UserList