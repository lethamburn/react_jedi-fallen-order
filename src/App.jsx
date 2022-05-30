import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SplashScreen from "./layout/SplashScreen";
import Container from "./pages/Container/Container";

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
          <Route path="/" element={<Container />} />
        </Routes>
      ) : (
        <SplashScreen />
      )}
    </BrowserRouter>
  );
};

export default App;
