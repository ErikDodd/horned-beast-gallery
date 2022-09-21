// imports!
import React from "react";
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

// extends

class App extends React.Component {
  render () {
    return (
      <>
      <Header/>
      <Main/>
      <Footer/>
      </>
    );
  }
}


// export it
export default App;
