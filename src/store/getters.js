const getters = {
    // 登录信息
    remember: state => state.auth.remember,
    // 用户信息
    token: state => state.auth.token,

    id: state => state.auth.id,
    username: state => state.auth.username,
    avatar: state => state.auth.avatar,
    roles: state => state.auth.roles,
    
    // 权限路由
    permission_routes: state => state.permission.routes,

    // 设置
    theme: state => state.setting.theme,
    sidebar: state => state.setting.sidebar,
    size: state => state.setting.size,
}

export default getters;