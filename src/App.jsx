import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Question1 from './pages/Questions/Question1';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route
            path="question1"
            element={<Question1 number={1} path="/question2" />}
          />
          <Route
            path="question2"
            element={<Question1 number={2} path="/question3" />}
          />
          <Route
            path="question3"
            element={<Question1 number={3} path="/question4" />}
          />
          <Route
            path="question4"
            element={<Question1 number={4} path="/question5" />}
          />
          <Route
            path="question5"
            element={<Question1 number={5} path="/question6" />}
          />
          <Route
            path="question6"
            element={<Question1 number={6} path="/question7" />}
          />
          <Route
            path="question7"
            element={<Question1 number={7} path="/question8" />}
          />
          <Route
            path="question8"
            element={<Question1 number={8} path="/question9" />}
          />
          <Route
            path="question9"
            element={<Question1 number={9} path="/question10" />}
          />
          <Route path="question10" element={<Question1 number={10} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
