import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Body from "./components/Body/Body";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
