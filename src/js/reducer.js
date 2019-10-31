export default (state = {login: false}, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {...state, login: 'success'};
        case 'LOGIN_FAILED':
            return {...state, login: 'failed'}
        default:
            return state;
    }
} 