import React, { Fragment, lazy, Suspense, useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './styles/styles.css';

const Pano = lazy(() => import('./components/Pano'));
const Tour = lazy(() => import('./components/Tour'));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=> {
    const img = ["../images/ne-beg-1.webp"];

    cacheImage(img);
  },[]);

  const cacheImage = async (srcArray) => {
    const promises = await srcArray.map((src) => {
      return new Promise(function (resolve,reject) {
        const img = new Image();
        img.src = src;
        img.onload = resolve();
        img.onerror = reject();
      });
    });

    await Promise.all(promises);

    setIsLoading(false);
  };

  return (
    <div className="App">
      {isLoading ?
        <Suspense fallback={<div>Loading...</div>} />
        :
        <Fragment>
          <Router>
            <Routes>
              <Route
                path="/"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <Pano/>
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
        </Fragment>}
    </div>
  );
}

export default App;
