import Vue from 'vue';

// 加载过滤函数
import * as date from './date';

const filters = {
    ...date
}

// 注册全局过滤器
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
});