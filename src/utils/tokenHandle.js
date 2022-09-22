export const addToLocalStorage = (token) => {
    const curToken = window.localStorage.getItem('accessToken');
    console.log(token)
    if (curToken !== token && token) {
        // store access token in local storage
        window.localStorage.setItem('accessToken', token);
    } else {
        console.log("Add token failed")
        return null;
    }
}
export const getFromLocalStorage = () => {
    const curToken = window.localStorage.getItem('accessToken');
    if (curToken) {
        return curToken;
    } else {
        console.log("Get token failed")
        return null
    }
}
export const clearFromLocalStorage = () => {
    const curToken = window.localStorage.getItem('accessToken');
    if (curToken) {
        // store access token in local storage
        window.localStorage.removeItem('accessToken');
    } else {
        console.log("Clear token failed")
        return null
    }
}