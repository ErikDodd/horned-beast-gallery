import React from 'react';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


class BeastForm extends React.Component {
    render() {
        return (
            <>
            <Container>
                    <Form.Select onChange={this.props.handleDropDown} aria-label="Default select example">
                        <option>Number of Horns</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="4">Too Many Horns</option>
                    </Form.Select>
            </Container>
            </>
        )
    }
}

export default BeastForm;