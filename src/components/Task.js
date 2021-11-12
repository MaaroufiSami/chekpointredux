import React, { useState } from "react"
import { Modal, Button } from "react-bootstrap"
import { useDispatch } from 'react-redux'
import { editTask } from "../JS/actions/actionTask";



function Task({ item }) {
    const [show, setShow] = useState(false);
    const [editInput, setEditInput] = useState(item.text)

    const dispatch = useDispatch()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Edit
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Item</Modal.Title>
                </Modal.Header>
                <Modal.Body><input type="text" value={editInput} onChange={(e) => setEditInput(e.target.value)} /></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => { handleClose(); dispatch(editTask({ id: item.id, text: editInput })) }}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default Task