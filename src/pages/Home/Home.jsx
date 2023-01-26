import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div>
      <div className="heading">
        <div>
          <h1>React Quiz App</h1>
          <p className="heading__p1">
            A simple quiz application coded in React.js
          </p>
        </div>
        <div>
          <h1>Instructions</h1>
          <p className="heading__p2">
            You will be asked questions and you will answer either true or
            false.
          </p>
        </div>
        <Link to="/question1" className="btn">
          Start the Game!
        </Link>
      </div>
    </div>
  );
}

export default Home;
