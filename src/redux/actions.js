import {types} from "./types"

function preloaderOn() {
    return {
        type: types.PRELOADER_ON
    }
}

function preloaderOff() {
    return {
        type: types.PRELOADER_OFF
    }
}

export function alertShow (info) {
    return {
        type: types.ALERT_ON,
        payload: info
    }
}
export function alertHidden () {
    return {
        type: types.ALERT_OFF,
    }
}

export function addUserAction(user) {

    console.log(user)
    return async function (dispatch) {

        dispatch(preloaderOn())

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }
        const response = await fetch('https://jsonplaceholder.typicode.com/users/', options)

        console.log(response.status)

        if (response.status === 201) {
            dispatch(preloaderOff())
            dispatch(alertShow({message: "Пользователь зарегистрирован", variant: "success"}))
        } else if (response.status === 404) {
            dispatch(preloaderOff())
            dispatch(alertShow({message: "Ошибка", variant: "danger"}))
        }

        setTimeout(()=> {
            dispatch(alertHidden())
        }, 3000)
    }
}


export function addUsersAction(users) {
    return {
        type: types.ADD_USERS,
        payload: users
    }
}
export function getUsersAction () {
    return async function (dispatch) {

        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json()
        dispatch(addUsersAction(data))
    }
}