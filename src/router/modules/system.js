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
                icon: "el-icon-user-solid",
            },
            children: [
                {
                    path: 'list',
                    component: () =>
                        import(/* webpackChunkName: "ListUsersSystem" */ "@/views/system/users/list"),
                    name: 'ListUsersSystem',
                    meta: {
                        title: '用户列表',
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
    ]
}]