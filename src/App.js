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
      filteredBeast: [],
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

  handleDropDown = (e) => {
    e.preventDefault();
    const searchTerm = parseInt(e.target.value);
    console.log(e.target.value);
    const filteredBeasts = data.filter((beast) =>
    beast.description.includes(searchTerm)
    );
    this.setState({displayedBeasts: filteredBeasts});
  };


  render() {
    return (
      <>
        <Header />
        <BeastForm handleDropDown={this.handleDropDown}/>
        <Main showModal={this.state.showModal} setShowModalFalse={this.setShowModalFalse} setShowModalTrue={this.setShowModalTrue} selectedBeast={this.state.selectedBeast} />
        <Footer />
      </>
    );
  }
}


// export it
export default App;
