import React, { Component } from 'react'

class QuizQuestionButton extends Component {
    render(){
        function handleClick(){
            if(this.props.quiz_question.answer == this.props.button_text){
                this.props.showNextQuestionHandler()
            }
        }

        return (
            <li><button onClick={this.handleClick.bind(this)}>{this.props.button_text}</button></li>

        )
    }
}

export default QuizQuestionButton
