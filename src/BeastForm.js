import React from 'react';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


class BeastForm extends React.Component {
    render() {
        return (
            <>
            <Container>
                <Form>
                    <Form.Control as ='select' onChange={this.props.handleDropDown} aria-label="Default select example">
                        <option value="default">Number of Horns</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="100">100</option>
                    </Form.Control>
                </Form>
            </Container>
            </>
        )
    }
}

export default BeastForm;