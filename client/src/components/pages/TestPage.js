import React, { Component } from "react";
import Navbar from "../common/Navbar";
import Quiz from '../utils/Quiz/Quiz';
import axios from "axios";

class TestPage extends Component {
  state = {
    words: [],
    err: ""
  };
  componentDidMount() {
    this.getWordData();
  }

  getWordData = () => {
    axios
      .get("/words")
      .then(res => {
        this.setState({
          words: res.data,
          err: ""
        });
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
    return (
      <div>
        <Navbar />
        {this.state.words.map((data,index)=> (
           <Quiz data={data} key={index}/>
        ))}
       
      </div>
    );
  }
}

export default TestPage;
