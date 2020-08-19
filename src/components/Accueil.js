import React from "react";
import {_getUsers, _getQuestions} from '../Data/_DATA';

const userTest = _getUsers();
userTest.then((value) => {   
})
console.log(userTest);

function Accueil() {

  return (
    <div>
    <h3 className="accueil">Sophie demande...</h3>
    <p>Question</p>
          <p>Reponse</p>
          <img src="" alt="avatar" />
    </div>
  );
}

export default Accueil;
