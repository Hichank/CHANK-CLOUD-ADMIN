import request from '@/utils/request.js';

// 登录
export const LOGIN = data => {
    return request({
        url: "/api/user/login",
        method: "POST",
        data
    })
}


// 权限
export const AUTH = data => {
    return request({
        url: "/api/user/auth",
        method: "POST",
        data
    })
}