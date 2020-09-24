import { service } from '@/utils';

// 权限列表
export const ROLES_GET = params => {
    return service({
        url: "/roles",
        method: "GET",
        params
    })
}

// 权限创建
export const ROLES_POST = data => {
    return service({
        url: "/roles",
        method: "POST",
        data
    })
}

// 权限详情
export const ROLES_GET_ID = id => {
    return service({
        url: `/roles/${id}`,
        method: "GET",
    })
}

// 权限编辑
export const ROLES_PUT = (id, data) => {
    return service({
        url: `/roles/${id}`,
        method: "PUT",
        data
    })
}

// 权限删除
export const ROLES_DELECT = id => {
    return service({
        url: `/roles/${id}`,
        method: "DELETE",
    })
}
