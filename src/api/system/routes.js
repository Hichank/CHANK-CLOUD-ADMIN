import { service } from '@/utils';

// 权限路由列表
export const ROUTES_GET = params => {
    return service({
        url: "/routes",
        method: "GET",
        params
    })
}