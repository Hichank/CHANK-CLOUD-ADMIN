import { asyncRoutes, constantRoutes } from '@/router';

/**
 * 使用meta.code确定当前用户是否具有权限
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
    if (route.meta && route.meta.code) {
        return roles.some(role => route.meta.code === role);
    } else {
        return true;
    }
}

/**
 * 通过递归过滤异步路由表
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes, roles) {
    const res = [];
    routes.forEach(route => {
        const tmp = { ...route }
        if (hasPermission(roles, tmp)) {
            if (tmp.children) {
                tmp.children = filterAsyncRoutes(tmp.children, roles)
            }
            res.push(tmp)
        }
    })
    return res;
}

const state = {
    routes: [],
    addRoutes: [],
}

const mutations = {
    SET_ROUTES: (state, routes) => {
        state.addRoutes = routes;
        state.routes = constantRoutes.concat(routes);
    }
}

const actions = {
    // 过滤权限路由
    generateRoutes({ commit }, roles) {
        return new Promise(resolve => {
            const accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
            commit('SET_ROUTES', accessedRoutes);
            resolve(accessedRoutes);
        })
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}