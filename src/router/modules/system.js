// 系统管理
import Layout from '@/views/layout';
export default [{
    path: '/system',
    component: Layout,
    name: 'System',
    redirect: '/system/permission',
    meta: {
        title: '系统管理',
        icon: "el-icon-setting",
        code: "SUCCESS_101",
    },
    children: [
        {
            path: 'account',
            component: () =>
                import(/* webpackChunkName: "AccountSystem" */ "@/views/system/account"),
            name: 'AccountSystem',
            redirect: '/system/permission/list',
            meta: {
                title: '账户',
                breadcrumb: false,
            },
            children: [
                {
                    path: 'list',
                    component: () =>
                        import(/* webpackChunkName: "ListAccountSystem" */ "@/views/system/account/list"),
                    name: 'ListAccountSystem',
                    meta: {
                        title: '账户',
                    },
                },
                {
                    path: 'addOrUpdate',
                    component: () =>
                        import(/* webpackChunkName: "AddOrUpdateAccountSystem" */ "@/views/system/account/addOrUpdate"),
                    name: 'AddOrUpdateAccountSystem',
                    hidden: true,
                    meta: {
                        title: '账户添加',
                    }
                },
            ]
        },
        {
            path: 'permission',
            component: () =>
                import(/* webpackChunkName: "PermissionSystem" */ "@/views/system/permission"),
            name: 'PermissionSystem',
            redirect: '/system/permission/list',
            meta: {
                title: '角色权限',
                breadcrumb: false,
                code: "SUCCESS_1011",
            },
            children: [
                {
                    path: 'list',
                    component: () =>
                        import(/* webpackChunkName: "ListPermissionSystem" */ "@/views/system/permission/list"),
                    name: 'ListPermissionSystem',
                    meta: {
                        title: '角色权限',
                        icon: "el-icon-lock"
                    },
                },
                {
                    path: 'add',
                    component: () =>
                        import(/* webpackChunkName: "AddPermissionSystem" */ "@/views/system/permission/add"),
                    name: 'AddPermissionSystem',
                    hidden: true,
                    meta: {
                        title: '角色权限添加',
                    }
                },
            ]
        },
        {
            path: 'setting',
            component: () =>
                import(/* webpackChunkName: "PermissionSetting" */ "@/views/system/setting"),
            name: 'PermissionSetting',
            meta: {
                title: '系统设置',
                code: "SUCCESS_1012",
                icon: "el-icon-set-up",
            },
        },
    ]
}]