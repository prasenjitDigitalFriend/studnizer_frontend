import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

class ConfirmationModal extends Component {
    constructor() {
        super();
        this.state = {
            show: false
        }
    }
    modalShow() {
        this.setState({ show: true });
    }

    modalClose() {
        this.setState({ show: false });
    }
    render() {
        return (
            <>
                <div className="trigger-btn" onClick={() => this.modalShow()}>
                    {this.props.buttonComponent}
                </div>
                <Modal show={this.state.show} onHide={() => this.modalClose()}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.headingText ?? 'Delete'}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{this.props.contentText ?? 'Are You Sure ?'}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.modalClose()}>
                            Close
                        </Button>
                        <Button variant="danger" onClick={() => this.props.okClick()}>
                            {this.props.okButtonText??'Delete'}
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default ConfirmationModal;
