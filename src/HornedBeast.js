// imports
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

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
        })
    }


    render() {
        return(
            <>
                <Card>
                    <Card.Img variant="top" src={this.props.src} alt={this.props.alt} title={this.props.title}/>
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>{this.props.description}</Card.Text>
                        <Card.Text>{this.props.favorites}</Card.Text>
                    </Card.Body>
                        <Button variant="primary" onClick={this.addFavorites}>Favorite</Button>
                </Card>
            </>
        )
    }
}


export default HornedBeast;