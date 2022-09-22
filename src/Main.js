import React from 'react';
import HornedBeast from './HornedBeast.js';
import data from './assets/data.json'
import BeastModal from './BeastModal.js';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';


class Main extends React.Component {
    render() {
        return (
        <>
            <h2> Dangerous Beasts with Horns </h2>
                {data.map ((beast, index) => {
                    return (
                        <HornedBeast
                            image_url={beast.image_url}
                            description={beast.description}
                            id={beast._id}
                            title={beast.title}
                            key={index}
                            setShowModalTrue = {this.props.setShowModalTrue}
                        />
                    );
                })}
                {this.props.selectedBeast && 
                    <BeastModal showModal={this.props.showModal} setShowModalTrue={this.props.setShowModalTrue}   setShowModalFalse={this.setShowModalFalse} selectedBeast={this.props.selectedBeast}/>
                }
        </>
        )
    }
}

export default Main;