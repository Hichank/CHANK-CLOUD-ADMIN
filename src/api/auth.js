import request from '@/utils/request.js';

// 登录
export const AUTH_LOGIN = data => {
    return request({
        url: "/auth/login",
        method: "POST",
        data
    })
}