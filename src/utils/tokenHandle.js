export const addToLocalStorage = (name, token) => {
    const curToken = window.localStorage.getItem(name);
    if (curToken !== token && token) {
        // store access token in local storage
        window.localStorage.setItem(name, token);
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
export const clearFromLocalStorage = (name) => {
    const curToken = window.localStorage.getItem(name);
    if (curToken) {
        // store access token in local storage
        window.localStorage.removeItem(name);
    } else {
        return null
    }
}