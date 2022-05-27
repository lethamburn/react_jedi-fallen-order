import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SplashScreen from "./layout/SplashScreen";
import Home from "./pages/Home/Home";

const App = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 5000);
  });
  return (
    <BrowserRouter>
      {loaded ? (
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      ) : (
        <SplashScreen />
      )}
    </BrowserRouter>
  );
};

export default App;
