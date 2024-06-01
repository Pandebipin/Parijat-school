import { useState } from "react";
import "./index.css";
import "./App.css";
import { Outlet } from "react-router-dom";
import Heading from "./Pages/Heading/Heading";
import Footer from "./Components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="bg-gray-200">
      <Heading />
      <div className="min-h-[70vh] mt-5">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}

export default App;
