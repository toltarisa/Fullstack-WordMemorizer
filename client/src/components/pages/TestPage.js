import React, { Component } from "react";
import Navbar from "../common/Navbar";
import Quiz from "../utils/Quiz/Quiz";
import axios from "axios";
import randomAnswer from "../randomAnswers";
class TestPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
      questionId: 1,
      question: "",
      answer: "",
      answers: [],
      words: [],
      err: ""
    };
  }
  getMeRandomElements = (sourceArray, neededElements, third) => {
    const result = [];
    for (let i = 0; i < neededElements; i++) {
      const index = Math.floor(Math.random() * sourceArray.length);
      result.push(sourceArray[index]);
      sourceArray.splice(index, 1);
    }
    result.push(third);
    let j, temp;
    for (let i = result.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = result[i];
      result[i] = result[j];
      result[j] = temp;
    }
    this.setState({ answers: result });
  };

  handleAnswerSelected = event => {
    this.setUserAnswer(event.currentTarget.dataset.id );
    if (this.state.questionId < this.state.words.length) {
      setTimeout(() => this.setNextQuestion(), 300);
      this.getMeRandomElements(
        randomAnswer,
        3,
        this.state.words[this.state.counter].translate
      );
    }
  };

  setNextQuestion = () => {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    this.setState({
      counter: counter,
      questionId: questionId,
      question: this.state.words[this.state.counter].word,
      answer: ""
    });
  };

  setUserAnswer = answer => {
    this.setState({
      answer: answer
    });
  };

  componentDidMount() {
    this.getWordData();
  }

  getWordData = () => {
    axios
      .get("/words")
      .then(res => {
        this.setState({
          question: res.data[0].word,
          words: res.data,
          err: ""
        });
        const data = [...this.state.words];
        this.getMeRandomElements(randomAnswer, 3, data[0].translate);
      })
      .catch(res => {
        if (!res.response) {
          this.setState({
            err: res
          });
        } else {
          this.setState({
            err: res
          });
        }
      });
  };
  render() {
    console.log(this.state.answer);
    return (
      <div className="main">
        <Navbar />
        <Quiz
          questionId={this.state.questionId}
          answer={this.state.answer}
          answerOptions={this.state.answers}
          question={this.state.question}
          onAnswerSelected={this.handleAnswerSelected}
        />
      </div>
    );
  }
}

export default TestPage;
