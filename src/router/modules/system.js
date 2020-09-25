// 系统管理
export default [{
    path: '/system',
    name: 'System',
    component: () =>
        import(/* webpackChunkName: "layout" */ "@/views/layout"),
    redirect: '/system/users',
    meta: {
        title: '系统管理',
        icon: "el-icon-setting",
        code: "ROUTE-SYSTEM"
    },
    children: [
        // 用户管理
        {
            path: 'users',
            name: 'SystemUsers',
            component: () =>
                import(/* webpackChunkName: "SystemUsers" */ "@/views/system/users"),
            redirect: '/system/users/list',
            meta: {
                title: '用户管理',
                breadcrumb: false,
                code: "ROUTE-SYSTEM-USERS"
            },
            children: [
                {
                    path: 'list',
                    name: 'SystemUsersList',
                    component: () =>
                        import(/* webpackChunkName: "SystemUsersList" */ "@/views/system/users/list"),
                    meta: {
                        title: '用户管理',
                        icon: "el-icon-user-solid",
                        code: "ROUTE-SYSTEM-USERS"
                    },
                },
                {
                    path: 'update',
                    name: 'SystemUsersAdd',
                    hidden: true,
                    component: () =>
                        import(/* webpackChunkName: "SystemUsersAdd" */ "@/views/system/users/update"),
                    meta: {
                        title: '添加用户',
                        code: "ROUTE-SYSTEM-USERS-ADD"
                    }
                },
                {
                    path: 'update/:id',
                    name: 'SystemUsersEdit',
                    hidden: true,
                    component: () =>
                        import(/* webpackChunkName: "SystemUsersEdit" */ "@/views/system/users/update"),
                    meta: {
                        title: '编辑用户',
                        code: "ROUTE-SYSTEM-USERS-EDIT"
                    }
                },
            ]
        },
        // 权限管理
        {
            path: 'roles',
            name: 'SystemRoles',
            component: () =>
                import(/* webpackChunkName: "SystemRoles" */ "@/views/system/roles"),
            redirect: '/system/roles/list',
            meta: {
                title: '权限管理',
                breadcrumb: false,
            },
            children: [
                {
                    path: 'list',
                    name: 'SystemRolesList',
                    component: () =>
                        import(/* webpackChunkName: "SystemRolesList" */ "@/views/system/roles/list"),
                    meta: {
                        title: '权限管理',
                        icon: "el-icon-key",
                    },
                },
                {
                    path: 'update',
                    name: 'SystemRolesAdd',
                    component: () =>
                        import(/* webpackChunkName: "SystemRolesAdd" */ "@/views/system/roles/update"),
                    hidden: true,
                    meta: {
                        title: '添加权限',
                    }
                },
                {
                    path: 'update/:id',
                    name: 'SystemRolesEdit',
                    component: () =>
                        import(/* webpackChunkName: "SystemRolesEdit" */ "@/views/system/roles/update"),
                    hidden: true,
                    meta: {
                        title: '编辑权限',
                    }
                },
            ]
        },
    ]
}]