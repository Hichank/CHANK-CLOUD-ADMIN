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
    },
    children: [
        {
            path: 'users',
            name: 'UsersSystem',
            component: () =>
                import(/* webpackChunkName: "UsersSystem" */ "@/views/system/users"),
            redirect: '/system/users/list',
            meta: {
                title: '用户管理',
                breadcrumb: false,
            },
            children: [
                {
                    path: 'list',
                    component: () =>
                        import(/* webpackChunkName: "ListUsersSystem" */ "@/views/system/users/list"),
                    name: 'ListUsersSystem',
                    meta: {
                        title: '用户管理',
                        icon: "el-icon-user-solid",
                    },
                },
                {
                    path: 'update',
                    component: () =>
                        import(/* webpackChunkName: "AddUsersSystem" */ "@/views/system/users/update"),
                    name: 'AddUsersSystem',
                    hidden: true,
                    meta: {
                        title: '添加用户',
                    }
                },
                {
                    path: 'update/:id',
                    component: () =>
                        import(/* webpackChunkName: "EditUsersSystem" */ "@/views/system/users/update"),
                    name: 'EditUsersSystem',
                    hidden: true,
                    meta: {
                        title: '编辑用户',
                    }
                },
            ]
        },
        {
            path: 'roles',
            name: 'RolesSystem',
            component: () =>
                import(/* webpackChunkName: "RolesSystem" */ "@/views/system/roles"),
            redirect: '/system/roles/list',
            meta: {
                title: '权限管理',
                breadcrumb: false,
            },
            children: [
                {
                    path: 'list',
                    component: () =>
                        import(/* webpackChunkName: "ListRolesSystem" */ "@/views/system/roles/list"),
                    name: 'ListRolesSystem',
                    meta: {
                        title: '权限管理',
                        icon: "el-icon-key",
                    },
                },
                {
                    path: 'update',
                    component: () =>
                        import(/* webpackChunkName: "AddRolesSystem" */ "@/views/system/roles/update"),
                    name: 'AddRolesSystem',
                    hidden: true,
                    meta: {
                        title: '添加权限',
                    }
                },
                {
                    path: 'update/:id',
                    component: () =>
                        import(/* webpackChunkName: "EditRolesSystem" */ "@/views/system/roles/update"),
                    name: 'EditRolesSystem',
                    hidden: true,
                    meta: {
                        title: '编辑权限',
                    }
                },
            ]
        },
    ]
}]