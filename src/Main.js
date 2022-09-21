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
                        />
                    );
                })}
                <BeastModal showModal={this.state.showModal} setShowModalFalse={this.setShowModalFalse} selectedBeast={this.state.selectedBeast}/>
        </>
        )
    }
}

export default Main;