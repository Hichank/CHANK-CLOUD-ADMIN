import axios from 'axios';
import { BASE_URL } from '@/config';
import store from '@/store';
import { whiteList } from '@/constant'

const service = axios.create({
    baseURL: BASE_URL,
    timeout: 300000,
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
        if (store.getters.token && store.getters.id) {
            config.headers['TOKEN'] = store.getters.token;
            config.headers['USERID'] = store.getters.id;
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
    const { code } = response.data;
    if (code == 200) {
        return response.data;
    } else {
        console.log(`失败`)
        return Promise.reject(response);
    }
}, error => {
    // 对响应错误做点什么
    console.log(`失败`)
    return Promise.reject(error);
});

export default service;