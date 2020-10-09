import { service } from '@/utils';

// 文章列表
export const ARTICLES_GET = params => {
    return service({
        url: "/articles",
        method: "GET",
        params
    })
}

// 文章创建
export const ARTICLES_POST = data => {
    return service({
        url: "/articles",
        method: "POST",
        data
    })
}

// 文章详情
export const ARTICLES_GET_ID = id => {
    return service({
        url: `/articles/${id}`,
        method: "GET",
    })
}

// 文章编辑
export const ARTICLES_PUT = (id, data) => {
    return service({
        url: `/articles/${id}`,
        method: "PUT",
        data
    })
}

// 文章删除
export const ARTICLES_DELECT = id => {
    return service({
        url: `/articles/${id}`,
        method: "DELETE",
    })
}