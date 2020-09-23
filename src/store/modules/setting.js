import variables from '@/styles/element-variables.scss';
import {
    getSidebarOpened,
    setSidebarOpened,
    getSize,
    setSize,
} from '@/utils';

const state = {
    theme: variables.theme,
    sidebar: {
        width: getSidebarOpened() ? JSON.parse(getSidebarOpened()).width : 220,
        opened: getSidebarOpened() ? !!+JSON.parse(getSidebarOpened()).opened : true,
    },
    size: getSize() || 'medium'
}

const mutations = {
    TOGGLE_SIDEBAR(state) {
        state.sidebar.opened = !state.sidebar.opened;
        if (state.sidebar.opened) {
            setSidebarOpened(JSON.stringify({
                ...state.sidebar,
                opened: 1
            }))
        } else {
            setSidebarOpened(JSON.stringify({
                ...state.sidebar,
                opened: 0
            }))
        }
    },
    TOGGLE_SIZE(state, data) {
        state.size = data;
        setSize(data);
    },
    TOGGLE_THEME(state, data) {
        state.theme = data;
    },
    TOGGLE_WIDTH(state, data) {
        state.sidebar.width = data;
        setSidebarOpened(JSON.stringify({
            ...state.sidebar,
            width: data
        }))

    }
}

const actions = {
    toggleSidebar({ commit }) {
        commit("TOGGLE_SIDEBAR");
    },
    toggleSize({ commit }, size) {
        commit('TOGGLE_SIZE', size);
    },
    toggleTheme({ commit }, color) {
        commit('TOGGLE_THEME', color);
    },
    toggleWidth({ commit }, px) {
        commit('TOGGLE_WIDTH', px);
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}