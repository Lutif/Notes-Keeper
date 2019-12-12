import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from "./component/Header";
import Footer from "./component/Footer";
import Note from "./component/Note";

import Timer from './component/Timer';

function App() {
  return (
    <div>
      <Header />
      <Note />
      <Note />
      <Note />
      <Timer/>
      <Footer />
    </div>
  );
}

export default App;


