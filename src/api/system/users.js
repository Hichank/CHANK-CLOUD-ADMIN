import { service } from '@/utils';

// 用户列表
export const USERS_GET = params => {
    return service({
        url: "/users",
        method: "GET",
        params
    })
}

// 用户创建
export const USERS_POST = data => {
    return service({
        url: "/users",
        method: "POST",
        data
    })
}

// 用户详情
export const USERS_GET_ID = id => {
    return service({
        url: `/users/${id}`,
        method: "GET",
    })
}

// 用户编辑
export const USERS_PUT = (id, data) => {
    return service({
        url: `/users/${id}`,
        method: "PUT",
        data
    })
}

// 用户删除
export const USERS_DELECT = id => {
    return service({
        url: `/users/${id}`,
        method: "DELETE",
    })
}
