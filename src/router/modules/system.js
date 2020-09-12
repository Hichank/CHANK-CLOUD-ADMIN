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