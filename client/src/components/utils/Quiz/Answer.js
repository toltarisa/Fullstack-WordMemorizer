import React from "react";


const Answer = props => {
  return (
    <li onClick={props.onAnswerSelected.bind(this)} className="answerOption">
      <label className="radioCustomLabel" /*htmlFor={props.answerType}*/>
        {props.answerContent}
      </label>
    </li>
  );
};

export default Answer;
