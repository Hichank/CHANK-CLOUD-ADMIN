import axios from 'axios';
import { BASE_URL } from '@/config';
import store from '@/store';
import { whiteList } from '@/constant'

const service = axios.create({
    baseURL: BASE_URL,
    timeout: 3000,
    headers: {
        "Content-Type": "application/json"
    }
});

// 添加请求拦截器
service.interceptors.request.use(config => {
    // 在发送请求之前做些什么
    if (whiteList.indexOf(config.url) !== -1) {
        return config;
    } else {
        if (store.getters.token) {
            config.headers['Authorization'] = `Bearer ${store.getters.token}`;
            return config;
        } else {
            console.log(`登录凭证过期，请重新登录`);
            store.dispatch('user/logout').then(() => {
                location.reload()
            })
            return Promise.reject();
        }
    }
}, error => {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(response => {
    // 对响应数据做点什么
    return response;
}, error => {
    // 对响应错误做点什么
    console.log(`失败`)
    return Promise.reject(error);
});

export default service;