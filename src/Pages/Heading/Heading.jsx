import { useState } from "react";
import Nav from "../../Components/Nav";
import "./Heading.css";

function Heading() {
  return (
    <main className="bg-gray-200">
      <div className="page1 relative">
        <Nav />
      </div>
      <h1 className="text-2xl text-white absolute top-0">
        welcome to our company
      </h1>
    </main>
  );
}

export default Heading;
