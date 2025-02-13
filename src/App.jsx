import { useState, useEffect } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/sections/Home";
function App() { 
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Simulate the loading delay after 3 seconds
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 3000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <>
      {!isLoaded ? (
        <LoadingScreen />
      ) : (
        <div className={`app-container ${menuOpen ? "menu-open" : ""}`}>
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          
          < Home />
        </div>
      )}
    </>
  );
}

export default App;
