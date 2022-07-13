import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './home';
import Thanks from './thanks';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
    </div>
  );
}

export default App;
