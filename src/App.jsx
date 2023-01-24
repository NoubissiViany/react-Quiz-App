import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Questions from './pages/Questions/Question';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="questions" element={<Questions />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
