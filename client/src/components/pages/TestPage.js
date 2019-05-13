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
      counter: 0,
      questionId: 0,
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
    if (this.state.questionId < this.state.words.length) {
      setTimeout(() => this.setNextQuestion(), 300);
      this.getMeRandomElements(randomAnswer,3,this.state.words[this.state.counter].translate);
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

  setLevelOfWord = (time,kind,level) => {
    let obj = {
      date:moment(Date.now()).add(time, kind).local().format("YYYY-MM-DDTHH:mm:ss") + "Z",
      level: level
    };
    axios.put(`http://localhost:3001/words/update/${this.state.id}`, obj);
  }
  checkAndSetLevel = (word) => {
      switch(word[this.state.counter].level){
        case 0 : this.setLevelOfWord(1,"minutes",1);
        break;
        case 1 :this.setLevelOfWord(1,"week",2);
        break;
        case 2 : this.setLevelOfWord(1,"month",3);
        break;
        case 3 : this.setLevelOfWord(6,"month",4);
        break; 
        default: this.setLevelOfWord(null,null,0);
      }
  } 

  checkQuestion = () => {
    let data = [...this.state.words];
    const getTranslateOfWords = data.map(word => {
      return word.translate;
    });
    /* Eger state'teki answer degiskenine atanan cevabımız sadece 
    cevapları cektigimiz array icinde mevcut ise soru dogru*/
    const word = data.map(word =>  word);
    if (getTranslateOfWords.includes(this.state.answer)) {
      
      this.checkAndSetLevel(word);
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
    this.getWordDataForFirst();
    this.getWordDataForLevel1();
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
  getWordDataForLevel1 = () => {
    axios
      .get("/test/tenminutelater")
      .then(res => {
        res.data.map(word => {
          let date = moment.utc(word.date).local().format('YYYY-MM-DD HH:mm:ss')
          let now = moment.utc().local().format('YYYY-MM-DD HH:mm:ss');
          
          //console.log(moment.duration(date.diff(now)));
          if(date === now){
            this.setState({
              id:res.data[0]._id,
              question:res.data[0].word,
              words:res.data
            })
            let data = [...this.state.words];
            this.getMeRandomElements(randomAnswer, 3, data[0].translate);
          }
        })
      })
  }
  getWordDataForFirst = () => {
    axios
      .get("/words")
      .then(res => {
        /* filtered degiskenine objemizdeki level degiskeninin degeri 
        0 olanları tekrar assign edip state'i set ediyoruz.Boylece bu sayfada sadece yeni eklenen kelimeler sorulacak */
        const filteredWords = res.data.reduce((filteredArray, word) => {
          if (word.level === 0) {
            let newQuestions = {
              _id:word._id,
              word: word.word,
              translate: word.translate,
              kind: word.kind,
              date: word.date,
              level:word.level
            };
            filteredArray.push(newQuestions);
          }
          return filteredArray;
        }, []);
        this.setState({
          id: filteredWords[0]._id,
          question: filteredWords[0].word,
          words: filteredWords,
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
        {this.state.words.length === 0 ? <h1 className="textChart">Tüm soruları doğru cevaplandırdın.Yeni Kelimeler Ekleyebilirsin</h1>:this.renderQuiz()}
      </div>
    );
  }
}
export default TestPage;