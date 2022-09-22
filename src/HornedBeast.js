// imports
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class HornedBeast extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          favorites: ""
        }
    }

    // event handler
    addFavorites = () => {
        this.setState({ 
            favorites: this.state.favorites + '❤️'
        });
    }

    setModal = () => {
        this.props.setShowModalTrue(this.props.title)
    }


    render() {
        return(
            <>
                <Container>
                    <Row>
                        <Col> 1 of 1 </Col>
                        
                    </Row>  
                    
                    <Card>
                        <Card.Img onClick={this.setModal} variant="top" src={this.props.image_url} alt={this.props.description} title={this.props.title}/>
                        <Card.Body>
                            <Card.Title>{this.props.title}</Card.Title>
                            <Card.Text>{this.props.description}</Card.Text>
                            <Card.Text>{this.state.favorites}</Card.Text>
                        </Card.Body>
                            <Button variant="primary" onClick={this.addFavorites}>Favorite</Button>
                    </Card>
                   
                
                </Container>
            </>
        )
    }
}


export default HornedBeast;