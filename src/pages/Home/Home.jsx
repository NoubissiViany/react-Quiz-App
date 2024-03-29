import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ApiContext from '../../context/Context';
import './Home.css';

function Home() {
  const { setCount } = useContext(ApiContext);
  setCount(0);
  return (
    <div>
      <div className="heading">
        <div>
          <h1>Brain Buster App</h1>
          <p className="heading__p1">
            A simple quiz application coded in React.js
          </p>
        </div>
        <div>
          <h1>Instructions</h1>
          <p className="heading__p2">
            You will be asked questions and you will answer either True or
            False.
          </p>
        </div>
        <Link to="/Questions/1" className="btn">
          Start the Game!
        </Link>
      </div>
    </div>
  );
}

export default Home;
