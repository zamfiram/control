// créer un champ select qui nous permet de sélectionner un utilisateur 
import React, { useState } from "react";
import { render } from 'react-dom';
import App from "../App.css";

const Log = () => {

  const [userName, setUserName] = useState(["Select a user", "Bernard", "Sophie", "John"])
  const Add = userName.map(Add => Add)
  const handleUserNameChange = (e) => {return console.clear(), console.log((userName[e.target.value]))}

  return (
    < select
      onChange={e => handleUserNameChange(e)}
      className="custom-select" >
      {
        Add.map((userType, key) => <option key={key} value={key}>{userType}</option>)
      }
    </select >
    )
}
export default Log;
