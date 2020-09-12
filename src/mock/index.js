import Mock from 'mockjs';
import { param2Obj } from '@/utils';
import { BASE_URL } from '@/config';

// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context('./modules', true, /\.js$/);

// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    const value = modulesFiles(modulePath);
    modules.push(...value.default);
    return modules;
}, []);

const XHR2ExpressReqWrap = (respond) => {
    return (options) => {
        let result = null
        if (respond instanceof Function) {
            const { body, type, url } = options;
            result = respond({
                method: type,
                body: JSON.parse(body),
                query: param2Obj(url)
            })
        } else {
            result = respond
        }
        return Mock.mock(result);
    }
}

export const mockXHR = () => {
    modules.map(item => {
        Mock.mock(`${BASE_URL}${item.url}`, (item.type).toLowerCase() || 'get', XHR2ExpressReqWrap(item.response));
    })
}