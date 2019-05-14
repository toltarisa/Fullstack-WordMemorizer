import React from 'react';
import Question from './Question';
import Answer from './Answer';
import { CSSTransitionGroup } from 'react-transition-group';
const Quiz = props => {
  const renderAnswerOptions = (key) =>  {
    return (
      <Answer
        key={key}
        answerContent={key}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  }
          
        return ( 
          
        <CSSTransitionGroup
        className="container"
        component="div"
        transitionName="fade"
        transitionEnterTimeout={800}
        transitionLeaveTimeout={500}
        transitionAppear
        transitionAppearTimeout={500}
      >
      
        <div key={props.questionId}>
        <Question question={props.question} />
        <ul className="answerOption">
          {props.answerOptions.map(renderAnswerOptions)}
        </ul>
        <p className="textChart">Kelimenin Türü : {props.kind}</p>
        <p className="textChart">Ipucu : {props.exampleSentence}</p>
        <p className="textChart">Sorunun Seviyesi : {props.level}</p>
        </div>
      </CSSTransitionGroup>
        
        
        );
}
 
export default Quiz;