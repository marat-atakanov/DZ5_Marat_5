import React from 'react';
import {ListGroup} from "react-bootstrap";

function User(props) {
    return (
        <>
            <ListGroup.Item as="li" action variant={"success"}>{props.user.name}</ListGroup.Item>
        </>
    );
}

export default User;