import request from '@/utils/request.js';

// 账户
export const USER_LIST = params => {
    return request({
        url: "/users",
        method: "GET",
        params
    })
}

export const USER_ADD = data => {
    return request({
        url: "/users",
        method: "POST",
        data
    })
}

export const USER_INFO = id => {
    return request({
        url: `/users/${id}`,
        method: "GET",
    })
}

export const USER_UPDATE = (id, data) => {
    return request({
        url: `/users/${id}`,
        method: "PUT",
        data
    })
}

export const USER_DELETE = (id) => {
    return request({
        url: `/users/${id}`,
        method: "DELETE",
    })
}