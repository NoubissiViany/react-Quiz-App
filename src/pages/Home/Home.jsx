import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

function Home() {
  return (
    <div>
      <div className="heading">
        <div>
          <h2>React Quiz App</h2>
          <p className="heading__p1">
            A simple quiz application coded in React.js
          </p>
        </div>
        <div>
          <h2>Instructions</h2>
          <p className="heading__p2">
            You will be asked questions and you will answer either true or
            false.
          </p>
        </div>
        <Link to="/Questions" className="btn">
          Start the Game!
        </Link>
      </div>
    </div>
  );
}

export default Home;
