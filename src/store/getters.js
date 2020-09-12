const getters = {
    // 登录信息
    history: state => state.user.history,
    // 用户信息
    id: state => state.user.id,
    token: state => state.user.token,
    username: state => state.user.username,

    // 用户权限
    auths: state => state.user.auths,
    // 权限路由
    permission_routes: state => state.permission.routes,

    // 设置
    theme: state => state.setting.theme,
    sidebar: state => state.setting.sidebar,
    size: state => state.setting.size,
}

export default getters;