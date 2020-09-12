import Cookies from 'js-cookie';
const REMEMBER = "REMEMBER";
const USER_INFO = "USER_INFO";
const AUTHS = "USER_AUTHS";
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

// AUTHS
export const getAuths = () => {
    return sessionStorage.getItem(AUTHS);
}

export const setAuths = (data) => {
    return sessionStorage.setItem(AUTHS, data);
}

export const removeAuths = () => {
    return sessionStorage.removeItem(AUTHS);
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
