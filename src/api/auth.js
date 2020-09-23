import { service } from '@/utils';

// 登录
export const AUTH_LOGIN = data => {
    return service({
        url: "/auth/login",
        method: "POST",
        data
    })
}

// 个人信息
export const AUTH_USER = params => {
    return service({
        url: "/auth/user",
        method: "GET",
        params
    })
}