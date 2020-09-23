const getters = {
    // 登录信息
    remember: state => state.auth.remember,
    // 用户信息
    id: state => state.auth.id,
    token: state => state.auth.token,
    username: state => state.auth.username,
    roles: state => state.auth.roles,
    
    // 权限路由
    permission_routes: state => state.permission.routes,

    // 设置
    theme: state => state.setting.theme,
    sidebar: state => state.setting.sidebar,
    size: state => state.setting.size,
}

export default getters;