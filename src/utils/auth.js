import Cookies from 'js-cookie';
const REMEMBER = "REMEMBER";
const TOKEN = "TOKEN";
const USER_INFO = "USER_INFO";
const SIDEBAR_OPENED = "SIDEBAR_OPENED";
const SIZE = "SIZE";

// REMEMBER
export const getRemember = () => {
    return Cookies.get(REMEMBER);
}

export const setRemember = (data) => {
    return Cookies.set(REMEMBER, data, { expires: 7 }); //7天过期
}

export const removeRemember = () => {
    return Cookies.remove(REMEMBER);
}

// TOKEN
export const getToken = () => {
    return localStorage.getItem(TOKEN);
}

export const setToken = (data) => {
    return localStorage.setItem(TOKEN, data);
}

export const removeToken = () => {
    return localStorage.removeItem(TOKEN);
}

// USER_INFO
export const getUserInfo = () => {
    return sessionStorage.getItem(USER_INFO);
}

export const setUserInfo = (data) => {
    return sessionStorage.setItem(USER_INFO, data);
}

export const removeUserInfo = () => {
    return sessionStorage.removeItem(USER_INFO);
}

// SIDEBAR_OPENED
export const getSidebarOpened = () => {
    return Cookies.get(SIDEBAR_OPENED);
}

export const setSidebarOpened = (data) => {
    return Cookies.set(SIDEBAR_OPENED, data);
}

export const removeSidebarOpened = () => {
    return Cookies.remove(SIDEBAR_OPENED);
}

// SIZE
export const getSize = () => {
    return Cookies.get(SIZE);
}

export const setSize = (data) => {
    return Cookies.set(SIZE, data);
}

export const removeSize = () => {
    return Cookies.remove(SIZE);
}
