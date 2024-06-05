import { useState } from "react";
import "./index.css";
import "./App.css";
import { Outlet } from "react-router-dom";
import Heading from "./Pages/Heading/Heading";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="bg-gray-200">
      <Nav />
      <div className="min-h-[80vh] mt-3 pt-4">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}

export default App;
