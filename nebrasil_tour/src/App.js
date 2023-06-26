import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './styles/styles.css';

const Pano = lazy(() => import('./components/Pano'));
const Tour = lazy(() => import('./components/Tour'));

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Pano />
              </Suspense>
            }
          />
          <Route
            path="/tour"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Tour />
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
