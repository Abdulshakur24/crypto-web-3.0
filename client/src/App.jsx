import React, { useState } from "react";
import {
  Navbar,
  Welcome,
  Footer,
  Services,
  Transactions,
} from "./components/index";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className=" min-h-screen">
      <Toaster />
      <div className=" gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
}

export default App;
