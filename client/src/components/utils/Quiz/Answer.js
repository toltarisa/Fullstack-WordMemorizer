import React from "react";
const Answer = props => {
  return (
    <li className="answerOption">
      <input
        type="radio"
        className="radioCustomButton"
        name="radioGroup"
        id="radioGroup"
        value={props.answerContent}
        onChange={ props.onAnswerSelected}
      />
      <label className="radioCustomLabel">
        {props.answerContent}
      </label>
    </li>
  );
};

export default Answer;
