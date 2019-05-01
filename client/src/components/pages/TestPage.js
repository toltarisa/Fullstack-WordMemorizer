import React, { Component } from 'react';
import Navbar from '../common/Navbar';
import axios from 'axios';

class TestPage extends Component {
    state = { 
        words: [],
        err: ''    
     }
     componentDidMount(){
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
        </div> );
    }
}
 
export default TestPage;