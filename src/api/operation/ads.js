import { service } from '@/utils';

// 广告列表
export const ADS_GET = params => {
    return service({
        url: "/ads",
        method: "GET",
        params
    })
}

// 广告创建
export const ADS_POST = data => {
    return service({
        url: "/ads",
        method: "POST",
        data
    })
}

// 广告详情
export const ADS_GET_ID = id => {
    return service({
        url: `/ads/${id}`,
        method: "GET",
    })
}

// 广告编辑
export const ADS_PUT = (id, data) => {
    return service({
        url: `/ads/${id}`,
        method: "PUT",
        data
    })
}

// 广告删除
export const ADS_DELECT = id => {
    return service({
        url: `/ads/${id}`,
        method: "DELETE",
    })
}