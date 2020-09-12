import { resetRouter } from '@/router'
import { LOGIN, AUTH } from '@/api/user';
import { DEFAULT_AESKEY } from '@/config';
import { encrypt, decrypt } from '@/utils/crypto';
import {
    setUserInfo,
    getUserInfo,
    removeUserInfo,

    getRemember,
    setRemember,
    removeRemember
} from '@/utils/auth';

const state = {
    history: getRemember() && decrypt(getRemember(), DEFAULT_AESKEY) || {},
    id: getUserInfo() && decrypt(getUserInfo(), DEFAULT_AESKEY) && decrypt(getUserInfo(), DEFAULT_AESKEY).id || '',
    token: getUserInfo() && decrypt(getUserInfo(), DEFAULT_AESKEY) && decrypt(getUserInfo(), DEFAULT_AESKEY).token || '',
    username: getUserInfo() && decrypt(getUserInfo(), DEFAULT_AESKEY) && decrypt(getUserInfo(), DEFAULT_AESKEY).username || '',
    auths: []
}

const mutations = {
    SET_HISTORY: (state, data) => {
        state.history = data;
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
        const { email, password, remember } = options;
        return new Promise((resolve, reject) => {
            LOGIN({ email: email.trim(), password })
                .then(response => {
                    const { data } = response;
                    if (data) {
                        commit('SET_TOKEN', data.token);
                        commit('SET_ID', data.id);
                        commit('SET_USERNAME', data.username);

                        // 设置sessionStorage
                        setUserInfo(encrypt(data, DEFAULT_AESKEY));

                        if (remember) {
                            // 记住账号密码
                            commit('SET_HISTORY', { email, password, remember });
                            setRemember(encrypt({ email, password, remember }, DEFAULT_AESKEY))
                        } else {
                            // 删除记住账号密码
                            commit('SET_HISTORY', {});
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

    // 注销
    logout({ commit }) {
        return new Promise((resolve) => {
            commit('SET_TOKEN', '');
            commit('SET_ID', '');
            commit('SET_USERNAME', '');
            removeUserInfo();
            resetRouter();
            resolve();
        })
    },

    // 获取权限
    getAuths({ commit }, options) {
        return new Promise((resolve, reject) => {
            AUTH(options)
                .then(response => {
                    const { data } = response;
                    if (data) {
                        const auths = [];
                        for (const key in data) {
                            if (data[key]) {
                                auths.push(key)
                            }
                        }
                        commit("SET_AUTHS", auths)
                        resolve(auths);
                    } else {
                        reject()
                    }
                })
                .catch(error => reject(error))
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}