import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ListGroup, Button } from "react-bootstrap"
import { completeTask, deleteTask } from '../JS/actions/actionTask'
import Task from './Task'

const ListTask = () => {

    const list = useSelector(state => state.list)
    const dispatch = useDispatch()

    return (
        <ListGroup>
            {list.map((el, i) => (
                <ListGroup.Item
                    key={i}
                    style={{ display: "flex", alignItems: "flex-end" }}
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "flex-end",
                            justifyContent: "space-around",
                            width: "30%",
                        }}
                    >
                        <Button
                            variant="outline-secondary"
                            onClick={() => dispatch(completeTask(el.id))}
                        >{el.state ? "unDone" : "isDone"}

                        </Button>
                        {/* <Button >Edit</Button> */}
                        <Task item={el} />
                        <Button
                            variant="danger"
                            onClick={() => dispatch(deleteTask(el.id))}
                        >
                            Delete
                        </Button>
                    </div>
                    <p style={{ margin: "0px", textDecoration: el.state ? "line-through" : null }} >
                        {el.text}
                    </p>
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
}

export default ListTask