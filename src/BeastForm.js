import React from 'react';
import { Container } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';


class BeastForm extends React.Component {
    render() {
        return (
            <>
            <Container>
                <Dropdown onChange={this.props.handleDropDown} >
                    <Dropdown.Toggle variant="success" id="number-of-horns">
                        Number of Horns
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                        <Dropdown.Item href="#/action-4">Too Many Horns</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Container>
            </>
        )
    }
}

export default BeastForm;