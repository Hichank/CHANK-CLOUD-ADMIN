import { resetRouter } from '@/router'
import { AUTH_LOGIN, AUTH_USER } from '@/api';
import { DEFAULT_AESKEY } from '@/config';
import { encrypt, decrypt } from '@/utils';
import {
    getToken,
    setToken,
    removeToken,


    getRemember,
    setRemember,
    removeRemember
} from '@/utils';

const state = {
    remember: getRemember() && decrypt(getRemember(), DEFAULT_AESKEY) || {},
    token: getToken() || '',
    id: '',
    username: '',
    roles: []
}

const mutations = {
    SET_REMEMBER: (state, data) => {
        state.remember = data;
    },
    SET_ID: (state, data) => {
        state.id = data;
    },
    SET_TOKEN: (state, data) => {
        state.token = data;
    },
    SET_USERNAME: (state, data) => {
        state.username = data;
    },
    SET_ROLES: (state, data) => {
        state.roles = data;
    },
}

const actions = {
    // 登录
    login({ commit }, options) {
        const { username, password, remember } = options;
        return new Promise((resolve, reject) => {
            AUTH_LOGIN({ username, password })
                .then(response => {
                    console.log(response)
                    const { token } = response.data;
                    if (token) {
                        commit('SET_TOKEN', token);
                        setToken(token);

                        if (remember) {
                            // 记住账号密码
                            commit('SET_REMEMBER', { username, password, remember });
                            setRemember(encrypt({ username, password, remember }, DEFAULT_AESKEY))
                        } else {
                            // 删除记住账号密码
                            commit('SET_REMEMBER', {});
                            removeRemember()
                        }
                        resolve(response);
                    } else {
                        reject()
                    }
                })
                .catch(error => reject(error))
        })
    },

    user({ commit }) {
        return new Promise((resolve, reject) => {
            AUTH_USER()
                .then(response => {
                    const { _id, username } = response.data;

                    commit('SET_ID', _id);
                    commit("SET_USERNAME", username);
                    commit("SET_ROLES", ['admin']);

                    resolve({
                        ...response.data,
                        roles: ['admin']
                    });
                })
                .catch(error => {
                    console.log(error)
                    reject(error);
                })
        })
    },

    // 注销
    logout({ commit }) {
        return new Promise((resolve) => {
            commit('SET_TOKEN', '');
            commit('SET_ID', '');
            commit('SET_USERNAME', '');
            removeToken();
            resetRouter();
            resolve();
        })
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}