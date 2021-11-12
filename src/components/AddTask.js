import React, { useState } from 'react'
import { InputGroup, Form, Card, FormControl, Button } from "react-bootstrap"
import { useDispatch } from 'react-redux'
import { addTask } from '../JS/actions/actionTask'


const AddTask = () => {

    const [myInput, setMyInput] = useState("")

    const dispatch = useDispatch()

    const add = () => {
        if (myInput) {
            dispatch(addTask({ text: myInput, id: Date.now(), state: false }))
            setMyInput("")
        }
        else { alert("Wrong") }
    }


    return (
        <Card bg="primary">
            <Card.Body>
                <h1 className={"text-white"}>To-Do-App !</h1>
                <Form>
                    <Form.Group>
                        <InputGroup className="mb-3">
                            <FormControl
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                onChange={(e) => setMyInput(e.target.value)}
                                value={myInput}
                            />

                            <Button variant="success" onClick={add}>
                                +
                            </Button>
                        </InputGroup>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default AddTask
