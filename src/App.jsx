import { useState, useEffect } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";

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
          
          <main className="p-4">
            <h1 className="text-4xl font-bold text-white">Welcome to My App</h1>
            <p className="mt-2 text-gray-300">This is a sample page.</p>
          </main>
        </div>
      )}
    </>
  );
}

export default App;
