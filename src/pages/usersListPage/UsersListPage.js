import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getUsersAction} from "../../redux/actions";
import User from "../../components/User";
import {ListGroup} from "react-bootstrap";

function UsersListPage() {
    const dispatch = useDispatch()
    const {users} = useSelector(state => state.usersReducer)

    useEffect(() => {
        dispatch(getUsersAction())
    }, [dispatch]);

    return (

        <ListGroup as="ul">
            {users.map(user =>
                <User key={user.id} user={user}/>
            )}
        </ListGroup>

    );
}

export default UsersListPage;