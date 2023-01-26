import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Question.css';

function Question({ number, path }) {
  const [questions, setQuestions] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'
    );
    const data = await response.json();
    return setQuestions([...data.results]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    questions.length > 0 && (
      <div>
        <div className="Question__container">
          <div className="header">
            <p className="header__p">Question {number} out of 10</p>
            <p className="header__p">Score: 0</p>
          </div>
          <div className="Question__question">
            <p className="Question__p1">
              Category - {questions[number - 1].category}
            </p>

            <p className="Question__p2">{questions[number - 1].question}</p>
            <div className="Question__btn">
              <button className="Question__btn1" type="button">
                True
              </button>
              <button className="Question__btn2" type="button">
                False
              </button>
            </div>
          </div>
          <div className="Question__linkContainer">
            <Link to={path} className="Question__link">
              Next Question
            </Link>
          </div>
        </div>
      </div>
    )
  );
}

export default Question;
