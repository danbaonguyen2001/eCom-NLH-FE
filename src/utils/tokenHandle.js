export const addToLocalStorage = (token) => {
    const curToken = window.localStorage.getItem('accessToken');
    if (curToken !== token && token) {
        // store access token in local storage
        window.localStorage.setItem('accessToken', token);
    } else {
        return null;
    }
}
export const getFromLocalStorage = () => {
    const curToken = window.localStorage.getItem('accessToken');
    if (curToken) {
        return curToken;
    } else {
        return null
    }
}
export const clearFromLocalStorage = () => {
    const curToken = window.localStorage.getItem('accessToken');
    if (curToken) {
        // store access token in local storage
        window.localStorage.removeItem('accessToken');
    } else {
        return null
    }
}