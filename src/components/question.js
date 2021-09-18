import React from 'react';
import PropTypes from 'prop-types';

function Question(props) {
  return (
    <>
      <div>
        <span className="quizHeader">Question {props.number}.</span>
        <br />
        <br />
        <p className="quizQuestion">{props.question}</p>
        <br />
      </div>
    </>
  );
}

Question.propTypes = {
  number: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired
};

export default Question;
