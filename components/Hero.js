import Dashboard from "./Dashboard";
import React from "react";
import Header from "./Header";

function Hero() {
  return (
    <div className="flex flex-col flex-grow bg-gray-100">
      <Header />

      <Dashboard />
    </div>
  );
}

export default Hero;
