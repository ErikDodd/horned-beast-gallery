// imports!
import React from "react";
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import data from './assets/data.json';
import BeastModal from './BeastModal.js';

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
  this.setState({showModal: true});
  const filteredBeast = data.filter((beast) => {
    return beast._id === key;
  });
  this.setState({selectedBeast: filteredBeast[0]});

  setShowModalFalse = () => {
    this.setState({showModal: false});
  }
}

  render () {
    return (
      <>
      <Header/>
      <Main showModal={this.state.showModal} setShowModalFalse={this.setShowModalFalse} />
      <Footer/>
      </>
    );
  }
}


// export it
export default App;
