import React from "react";
import {_getUsers, _getQuestions} from '../Data/_DATA';

const userTest = _getUsers();
userTest.then((value) => {   
})
console.log(userTest);

function Accueil() {

  return (
    <div className="accueil">
    <h3>Sophie demande...</h3>
    <p>Question</p>
    <p>Reponse</p>
    <img src='https://cdn3.vectorstock.com/i/1000x1000/20/67/woman-avatar-profile-vector-21372067.jpg' alt="avatar" width="150"
/>
    </div>
  );
}

export default Accueil;
