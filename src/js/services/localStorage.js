
export function getToken() {
    return localStorage.getItem('LOGIN_STATUS')
}

export function saveToken(loginStatus) {
    localStorage.setItem('LOGIN_STATUS', loginStatus)
}

export function subToLocalStorage(succCb, failCb) {
    window.addEventListener('storage', (e) => {
        if (e.storageArea !== localStorage) return;
        const loginStatus = getToken();
        if (loginStatus === 'SUCCESS') return succCb();
        failCb();
    })
} 
