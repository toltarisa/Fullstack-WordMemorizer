import React, { Component } from "react";
import Navbar from "../common/Navbar";
import Quiz from "../utils/Quiz/Quiz";
import axios from "axios";
import randomAnswer from "../randomAnswers";
import Toastify from "toastify-js";
import moment from 'moment';
class TestPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
      questionId: 0,
      question: "",
      answer: "",
      answers: [],
      words: [],
      isTrue: false,
      id: "",
      err: "",
      level:0,
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
    if (this.state.questionId < this.state.words.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    }
    this.getMeRandomElements(randomAnswer,3,this.state.words[this.state.counter].translate);
  };

  setNextQuestion = () => {
    let counter = this.state.counter + 1;
    let questionId = this.state.questionId + 1;
    this.checkQuestion();
    this.setState({
      counter: counter,
      questionId: questionId,
      id: this.state.words[this.state.counter]._id,
      question: this.state.words[this.state.counter].word,
      answer: "",
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
      let level = this.state.level + 1;
      this.setState({
        level:level,
      });
      let obj = {
        date:moment(Date.now()).add(10, 'minutes').format('YYYY-MM-DD hh:mm:ss'),
        level : this.state.level
      }
      axios.put(`http://localhost:3001/words/update/${this.state.id}`,obj)
      Toastify({
        text: "Doğru Cevap",
        backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
        positionLeft: true,
        duration: 4000,
        gravity: "bottom"
      }).showToast();
    } else {
      Toastify({
        text: "Yanlış Cevap",
        backgroundColor: "red",
        positionLeft: true,
        duration: 4000,
        gravity: "bottom"
      }).showToast();
    }
  };

  componentDidMount() {
    this.getWordData();
  }

  getWordData = () => {
    axios
      .get("/words")
      .then(res => {
            this.setState({
              id: res.data[0]._id,
              question: res.data[0].word,
              words: res.data,
              err: "",
            });
            let data = [...this.state.words];
            this.getMeRandomElements(randomAnswer, 3, data[0].translate);
      })
      .catch(res => {
        if (!res.response) {
          this.setState({err: res});
        } else {
          this.setState({err: res});
        }
      });
  };
  render() {
    
    return (
      <div className="main">
        <Navbar />
        {this.state.answers.length === 0 ? (
          <div style={{textAlign: "center",color: "red",position: "relative",fontSize: "2rem"}}>
            Tüm soruları dogru cevapladınız.Tekrar Kelime ekleyebilirisin !
          </div>
        ) : (
          <div>
            <Quiz
              questionId={this.state.questionId}
              answer={this.state.answer}
              answerOptions={this.state.answers}
              question={this.state.question}
              onAnswerSelected={this.handleAnswerSelected}
            />
          </div>
        )}
      </div>
    );
  }
}

export default TestPage;
