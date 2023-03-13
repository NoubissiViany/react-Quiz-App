/* eslint-disable react/jsx-no-constructed-context-values */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Home from './pages/Home/Home';
import Questions from './pages/Questions/Questions';
import ApiContext from './context/Context';
import Result from './pages/Result/Result';

function App() {
  const [count, setCount] = useState(0);
  const [questions, setQuestions] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      'https://opentdb.com/api.php?amount=11&difficulty=hard&type=boolean'
    );
    const data = await response.json();
    return setQuestions([...data.results]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(questions);

  return (
    <div className="App">
      <ApiContext.Provider value={{ questions, count, setCount }}>
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/Questions/:id" element={<Questions />} />
            <Route path="/Result" element={<Result />} />
          </Routes>
        </BrowserRouter>
      </ApiContext.Provider>
    </div>
  );
}

export default App;
