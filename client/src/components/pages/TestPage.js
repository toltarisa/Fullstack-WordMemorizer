import React, { Component } from "react";
import Navbar from "../common/Navbar";
import Quiz from "../utils/Quiz/Quiz";
import axios from "axios";
import randomAnswer from "../randomAnswers";
import Toastify from "toastify-js";
import moment from "moment";
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
      id: "",
      err: "",
      level: 0
    };
  }
  getMeRandomElements = (sourceArray, neededElements, lastElement) => {
    const result = [];
    for (let i = 0; i < neededElements; i++) {
      const index = Math.floor(Math.random() * sourceArray.length);
      result.push(sourceArray[index]);
      sourceArray.splice(index, 1);
    }
    result.push(lastElement);
    for (let i = result.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = result[i];
      result[i] = result[j];
      result[j] = temp;
    }
    this.setState({ answers: result });
  };

  handleAnswerSelected = event => {
    this.setUserAnswer(event.currentTarget.value);
    console.log(this.state.answer);

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
    this.checkQuestion();
    let counter = this.state.counter + 1;
    let questionId = this.state.questionId + 1;
    this.setState({
      counter: counter,
      questionId: questionId,
      id: this.state.words[this.state.counter]._id,
      question: this.state.words[this.state.counter].word
    });
  };

  setUserAnswer = answer => {
    this.setState({
      answer: answer
    });
  };

  checkQuestion = () => {
    let data = [...this.state.words];
    const getTranslateOfWords = data.map(word => {
      return word.translate;
    });
    if (getTranslateOfWords.includes(this.state.answer)) {
      let obj = {
        date:
          moment(Date.now())
            .add(10, "minutes")
            .format("YYYY-MM-DDTHH:mm:ss") + "Z",
        level: 1
      };
      axios.put(`http://localhost:3001/words/update/${this.state.id}`, obj);
      Toastify({
        text: "Doğru Cevap",
        backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
        positionLeft: true,
        duration: 500,
        gravity: "bottom"
      }).showToast();
      this.setState({
        answer: ""
      });
    } else {
      Toastify({
        text: "Yanlış Cevap",
        backgroundColor: "red",
        positionLeft: true,
        duration: 500,
        gravity: "bottom"
      }).showToast();
    }
  };

  componentDidMount() {
    this.getWordData();
  }

  renderQuiz = () => {
    return (
      <div>
        <Quiz
          questionId={this.state.questionId}
          answer={this.state.answer}
          answerOptions={this.state.answers}
          question={this.state.question}
          onAnswerSelected={this.handleAnswerSelected}
        />
      </div>
    );
  };

  getWordData = () => {
    axios
      .get("/words")
      .then(res => {
        this.setState({
          id: res.data[0]._id,
          question: res.data[0].word,
          words: res.data,
          err: ""
        });
        let data = [...this.state.words];
        this.getMeRandomElements(randomAnswer, 3, data[0].translate);
      })
      .catch(err => {
        this.setState({ err: err });
      });
  };
  render() {
    return (
      <div className="main">
        <Navbar />
        {
          this.state.words.filter(word => {
          let date = moment.utc().format("YYYY-MM-DDTHH:mm:ss") + "Z";
          return word.date < date || word.date === null ? word.date : null;
        }).map(word => {
          console.log(moment(word.date).utc().format("YYYY-MM-DDTHH:mm:ss"));
        })
        
        }
        {this.renderQuiz()}
      </div>
    );
  }
}

export default TestPage;
