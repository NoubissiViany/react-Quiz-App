import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ApiContext from '../../context/Context';
import './Result.css';

function Result() {
  const { count } = useContext(ApiContext);
  const countdown = 10 - count;
  return (
    <div>
      <div className="Result__container">
        <h1 className="Result__h1">Congratulation, Quize Completed.</h1>
        <p className="Result__p">Attempts: 10</p>
        <p className="Result__p">Wrong Answers: {countdown} </p>
        <p className="Result__p">Right Answers: {count}</p>
        <Link to="/" className="Result__btn">
          Continue
        </Link>
      </div>
    </div>
  );
}

export default Result;
