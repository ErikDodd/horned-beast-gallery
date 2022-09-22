import React from 'react';
import {Modal, Button} from 'react-bootstrap';

class BeastModal extends React.Component {
    render () {
        return (
            <>
            <Modal show={this.props.showModal} onHide={this.props.setShowModalFalse}>
                <Modal.Header closeButton>
                    <Modal.Title>Horned Beast</Modal.Title>
                </Modal.Header>
                <Modal.Body>{this.props.selectedBeast.description}
                        <img src={this.props.selectedBeast.image_url} alt={this.props.alt}></img>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.setShowModalFalse}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            </>     
        );
    }
}

export default BeastModal;