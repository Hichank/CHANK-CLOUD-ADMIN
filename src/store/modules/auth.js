import { resetRouter } from '@/router'
import { AUTH_LOGIN } from '@/api/auth';
import { DEFAULT_AESKEY } from '@/config';
import { encrypt, decrypt } from '@/utils/crypto';
import {
    getToken,
    setToken,
    removeToken,

    // setUserInfo,
    getUserInfo,
    removeUserInfo,

    getRemember,
    setRemember,
    removeRemember
} from '@/utils/auth';

const state = {
    remember: getRemember() && decrypt(getRemember(), DEFAULT_AESKEY) || {},
    token: getToken() || '',
    id: getUserInfo() && decrypt(getUserInfo(), DEFAULT_AESKEY) && decrypt(getUserInfo(), DEFAULT_AESKEY).id || '',
    username: getUserInfo() && decrypt(getUserInfo(), DEFAULT_AESKEY) && decrypt(getUserInfo(), DEFAULT_AESKEY).username || '',
    auths: []
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
    SET_AUTHS: (state, data) => {
        state.auths = data;
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
                    const { data } = response;
                    if (data) {
                        commit('SET_TOKEN', data.token);
                        setToken(data.token);

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
        return new Promise((resolve) => {
            commit("SET_AUTHS", ["SUCCESS_101", "SUCCESS_1011", "SUCCESS_1012"])
            resolve({
                auths: ["SUCCESS_101", "SUCCESS_1011", "SUCCESS_1012"]
            });
        })
    },

    // 注销
    logout({ commit }) {
        return new Promise((resolve) => {
            commit('SET_TOKEN', '');
            commit('SET_ID', '');
            commit('SET_USERNAME', '');
            removeToken();
            removeUserInfo();
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