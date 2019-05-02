import React, { Component } from 'react';
import Question from './Question';
import Answer from './Answer';
class Quiz extends Component {
    render() { 
        
        return ( 
        <div className="container">
            <Question data={this.props} />
            <Answer />
        </div> 
        
        );
    }
}
 
export default Quiz;