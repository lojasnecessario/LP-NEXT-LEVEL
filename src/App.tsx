import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ThankYou from './pages/ThankYou';
import Quiz from './pages/Quiz';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/obrigado" element={<ThankYou />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
  );
}
