import {
    AUTH_LOGIN, AUTH_LOGIN_SUCCESS, AUTH_LOGIN_FAILURE,
    AUTH_REGISTER, AUTH_REGISTER_SUCCESS, AUTH_REGISTER_FAILURE,
    AUTH_GET_STATUS, AUTH_GET_STATUS_SUCCESS, AUTH_GET_STATUS_FAILURE,
    AUTH_LOGOUT
} from './ActionTypes'
import axios from 'axios';

/*============================================================================
    authentication
==============================================================================*/


/* LOGIN */
export function loginRequest(username, password) {
    /* To be implemented */
    return (dispatch) => {
        // Inform Login API is starting
        dispatch(login());

        // API REQUEST
        return axios.post('/api/account/signin', { username, password })
            .then((result) => {
                console.log('dispatch > ', loginSuccess(username), result, dispatch(loginSuccess(username)));
                return "SUCCESS";
            }).catch(err => {
                console.log('err ~~', err)
                dispatch(loginFailure());;
                return "FAILURE"
            })
    }
}

export function login() {
    return {
        type: AUTH_LOGIN
    }
}

export function loginSuccess(username) {
    return {
        type: AUTH_LOGIN_SUCCESS,
        username
    }
}

export function loginFailure() {
    return {
        type: AUTH_LOGIN_FAILURE
    }
}
/* END LOGIN */

/* REGISTER */
export function registerRequest(username, password) {
    return (dispatch) => {
        // Inform Register API is starting
        dispatch(register());

        return axios.post('/api/account/signup', { username, password })
            .then((response) => {
                dispatch(registerSuccess());
                return "SUCCESS"
            }).catch((error) => {
                dispatch(registerFailure(error.response.data.code));
                return "FAILURE"
            });
    };
}
export function register() {
    return {
        type: AUTH_REGISTER
    };
}

export function registerSuccess() {
    return {
        type: AUTH_REGISTER_SUCCESS,
    };
}

export function registerFailure(error) {
    return {
        type: AUTH_REGISTER_FAILURE,
        error
    };
}
/* END REGISTER */

/* GET STATUS */
export function getStatusRequest() {
    return (dispatch) => {
        // inform Get Status API is starting
        dispatch(getStatus());

        return axios.get('/api/account/getinfo')
            .then((response) => {
                dispatch(getStatusSuccess(response.data.info.username));
                return "SUCCESS"
            }).catch((error) => {
                dispatch(getStatusFailure());
                return "FAILURE"
            });
    };
}

export function getStatus() {
    return {
        type: AUTH_GET_STATUS
    };
}

export function getStatusSuccess(username) {
    return {
        type: AUTH_GET_STATUS_SUCCESS,
        username
    };
}

export function getStatusFailure() {
    return {
        type: AUTH_GET_STATUS_FAILURE
    };
}

/* Logout */
export function logoutRequest() {
    return (dispatch) => {
        return axios.post('/api/account/logout')
            .then((response) => {
                dispatch(logout());
            });
    };
}

export function logout() {
    return {
        type: AUTH_LOGOUT
    };
}

