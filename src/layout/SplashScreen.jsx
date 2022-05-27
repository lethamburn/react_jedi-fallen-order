import React, { useState, useEffect } from "react";

const SplashScreen = () => {
  const [animation, setAnimation] = useState("fadeIn");

  useEffect(() => {
    setTimeout(() => {
      setAnimation("fadeOut");
    }, 3000);
  });

  return (
    <main>
      <section className="splashScreen">
        <img src="./images/logo.png" alt="Jedi Fallen Order Logo" className={animation}/>
      </section>
    </main>
  );
};

export default SplashScreen;
