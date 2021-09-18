import React from 'react';
import '../style.css';
import { Link } from 'react-router-dom';
import Question from './question';
import Questions from '../res/quizQuestions';

export default class Quiz extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 1,
      chosen: '',
      correct: null,
      show: false,
      counter: 0
    };

    this.handleCheck = this.handleCheck.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleStart = this.handleStart.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleRetake = this.handleRetake.bind(this);
  }

  handleCheck(e) {
    e.preventDefault();
    this.state.correct === this.state.chosen
      ? this.setState({
          show: true,
          counter: this.state.counter + 1,
          number: this.state.number + 1
        })
      : this.setState({
          show: true,
          number: this.state.number + 1
        });
  }

  handleChange(e) {
    this.setState({
      chosen: e.target.value,
      correct: e.target.name
    });
  }

  handleStart() {
    document.querySelector(`[id="${this.state.number}"]`).scrollIntoView();
  }

  handleNext() {
    document.querySelector(`[id="${this.state.number}"]`).scrollIntoView();
    this.setState({
      show: false
    });
  }

  handleRetake() {
    document.querySelector(`[id="explanation"]`).scrollIntoView();
    this.setState({
      show: false,
      number: 1
    });
  }
  componentDidMount() {
    document.body.style.overflow = 'hidden';
  }
  componentWillUnmount() {
    document.body.style.overflow = 'visible';
  }

  render() {
    return (
      <>
        <div id="explanation" className="quizExplanation">
          <h2>
            <span className="quizHeader">
              Welcome to The Periodic Table Quiz!
            </span>
          </h2>
          <div className="quizDesc bottom">
            Before(or after) you explore the interactive periodic table, we have
            made a quiz for you to test your knowledge of it and see how much
            you learn on this site! All the answers to the quiz questions can be
            found exploring the different elements, so you can treat the quiz as
            a sort of scavenger hunt as well! We wish you the best of luck :)
          </div>
          <br />
          <a onClick={e => this.handleStart(e)}>
            <span className="quizMove">Let's go! ---&gt;</span>
          </a>
        </div>
        <ul className="questions">
          {Questions.map(question => (
            <>
              <li
                id={question.number}
                className="question"
                key={question.number}
              >
                <Question
                  number={question.number}
                  question={question.question}
                />
                <form>
                  <div className="options">
                    <input
                      type="radio"
                      name={question.correct}
                      id={question.opt1}
                      value={question.opt1}
                      onChange={this.handleChange}
                    />
                    <label hmtlfor={question.opt1}>{question.opt1}</label>
                    <br />
                    <br />
                    <input
                      type="radio"
                      name={question.correct}
                      id={question.opt2}
                      value={question.opt2}
                      onChange={this.handleChange}
                    />
                    <label hmtlfor={question.opt2}>{question.opt2}</label>
                    <br />
                    <br />
                    <input
                      type="radio"
                      name={question.correct}
                      id={question.opt3}
                      value={question.opt3}
                      onChange={this.handleChange}
                    />
                    <label hmtlfor={question.opt3}>{question.opt3}</label>
                    <br />
                    <br />
                    <input
                      type="radio"
                      name={question.correct}
                      id={question.opt4}
                      value={question.opt4}
                      onChange={this.handleChange}
                    />
                    <label hmtlfor={question.opt4}>{question.opt4}</label>
                  </div>
                  <br />
                  <p className="checkAnswer">
                    {' '}
                    {this.state.show === true ? (
                      this.state.chosen === this.state.correct ? (
                        <span className="correct">Correct!</span>
                      ) : (
                        <span className="incorrect">Incorrect!</span>
                      )
                    ) : null}{' '}
                  </p>{' '}
                  <br />
                  {this.state.show === true ? (
                    this.state.number <= 9 ? (
                      <a onClick={this.handleNext}>
                        <span className="quizMove">Next ---&gt;</span>
                      </a>
                    ) : (
                      <>
                        <span className="results">
                          Results - {this.state.counter}/{question.number}
                        </span>
                        <br />
                        <br />
                        <br />
                        <a className="quizMove" onClick={this.handleRetake}>
                          R e t a k e !
                        </a>
                      </>
                    )
                  ) : (
                    <input
                      className="check"
                      onClick={this.handleCheck}
                      type="submit"
                      value="Check answer!"
                    />
                  )}
                </form>
                <Link className="check quizHome" to={'/'}>
                  <span>Home</span>
                </Link>
              </li>
            </>
          ))}
        </ul>
      </>
    );
  }
}
