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
      filteredBeast: data,
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
    // e.preventDefault();
    const numHorns = parseInt(e.target.value);
    console.log(e.target.value);
    let gallery = data;
    if (numHorns) {
      gallery = data.filter((beast) =>
      beast.horns === numHorns);
    }
    this.setState({filteredBeast: gallery});
    console.log(gallery);
  };


  render() {
    return (
      <>
        <Header />
        <BeastForm filteredBeast={this.state.filteredBeast} handleDropDown={this.handleDropDown}/>
        <Main filteredBeast={this.state.filteredBeast}  showModal={this.state.showModal} setShowModalFalse={this.setShowModalFalse} setShowModalTrue={this.setShowModalTrue} selectedBeast={this.state.selectedBeast} />
        <Footer />
      </>
    );
  }
}


// export it
export default App;
