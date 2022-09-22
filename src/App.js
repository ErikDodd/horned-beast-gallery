// imports!
import React from "react";
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import data from './assets/data.json';
import BeastForm from "./BeastForm";


// extends

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: {},
    };
  }

  setShowModalTrue = (key) => {
    this.setState({ showModal: true });
    const filteredBeast = data.filter((beast) => {
      return beast.title === key;
    });
    this.setState({ selectedBeast: filteredBeast[0] });

  }
  setShowModalFalse = () => {
    this.setState({ showModal: false });
  }


  render() {
    return (
      <>
        <Header />
        <Main showModal={this.state.showModal} setShowModalFalse={this.setShowModalFalse} setShowModalTrue={this.setShowModalTrue} selectedBeast={this.state.selectedBeast} />
        <Footer />
      </>
    );
  }
}


// export it
export default App;
