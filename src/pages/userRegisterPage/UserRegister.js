import React, { useState } from 'react'
import {Row, Col, Form, Button, Container, Spinner, Alert} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {addUserAction, alertShow} from '../../redux/actions'

function UserRegister() {

    const { preloader } = useSelector(state => state.preloaderReducer)
    const {message, variant} = useSelector(state => state.alertReducer)
    const dispatch = useDispatch()

    const [user, setUser] = useState({
        name: '',
        username: '',
        email: ''
    })

    const formValue = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const addUser = (event) => {
        event.preventDefault()
        if (user.name.trim() === "") {
            dispatch(alertShow({message: "Заполните поля", variant: "danger"}))
            return
        }
        dispatch(addUserAction(user))
    }

  return (
    <Container>
        <h1>register user</h1>
        {
        preloader 
        ?
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>

        :
        <Form onSubmit={addUser}>
            <Row>
                <Col lg={3}>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Control
                            type="text"
                            placeholder="name"
                            name="name"
                            onChange={formValue}
                        />
                    </Form.Group>
                </Col>
                <Col lg={3}>
                    <Form.Group className="mb-3" controlId="username">

                        <Form.Control
                            type="text"
                            placeholder="username"
                            name="username"
                            onChange={formValue}
                        />
                    </Form.Group>
                </Col>
                <Col lg={3}>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Control
                            type="text"
                            placeholder="email"
                            name="email"
                            onChange={formValue}
                        />
                    </Form.Group>
                </Col>
                <Col lg={3}>
                    <Button type="submit" variant="success" className="w-100">
                        register user
                    </Button>
                </Col>
            </Row>
        </Form>
    }
        {
            message
            &&
            <Alert variant={variant}>{message}</Alert>
        }
    </Container>
  )
}

export default UserRegister