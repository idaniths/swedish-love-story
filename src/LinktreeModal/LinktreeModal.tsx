import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import  './LinktreeModal.css';

const LinktreeModal: React.FC = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <span  onClick={handleShow}>
                Listen
            </span>

            <Modal show={show} onHide={handleClose} size="lg" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Visit Our Linktree</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Click the button below to visit our Linktree page in a new tab.
                    </p>
                    <Button
                        onClick={() => window.open("https://linktr.ee/swedishlovestory?lt_utm_source=lt_share_link#233095368", "_blank")}
                        style={{
                            backgroundColor: '#39E09B',
                            color: '#fff',
                            border: 'none',
                            cursor: 'pointer',
                        }}
                    >
                        Go to Linktree
                    </Button>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default LinktreeModal;


