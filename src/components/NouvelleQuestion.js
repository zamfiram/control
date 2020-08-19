import React from "react";
import {_getQuestions} from "../Data/_DATA";

function NouvelleQuestion() {

  const questionTest = _getQuestions();
  // questionTest.then((value) => {console.log(value)});
 questionTest.then(result => console.log(result));  
  //console.log(questionTest);
  
    return (
      <p className="nouvelle-question"></p>
    );
  }

export default NouvelleQuestion;