import Tour from './components/Tour';
import Pano from './components/Pano';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './styles/styles.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path="/" element={<Pano />} />
            <Route path="/tour" element={<Tour />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
