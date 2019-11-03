const users = {
    admin: '12345',
}

function login({ login, password }) {
    return new Promise((res, rej) => {
        if (users[login] === password) {
            res();
        }
        rej();
    })
} 

export default login;