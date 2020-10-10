// 运营管理
export default [{
    path: '/operation',
    name: 'Operation',
    component: () =>
        import(/* webpackChunkName: "layout" */ "@/views/layout"),
    redirect: '/operation/ads',
    meta: {
        title: '运营管理',
        icon: "el-icon-s-operation",
        code: "ROUTE-OPERATION"
    },
    children: [
        // 广告管理
        {
            path: 'ads',
            name: 'OperationAds',
            component: () =>
                import(/* webpackChunkName: "OperationAds" */ "@/views/operation/ads"),
            redirect: '/operation/ads/list',
            meta: {
                title: '广告管理',
                icon: "el-icon-data-line",
                breadcrumb: false,
                code: "ROUTE-OPERATION-ADS"
            },
            children: [
                {
                    path: 'list',
                    name: 'OperationAdsList',
                    component: () =>
                        import(/* webpackChunkName: "OperationAdsList" */ "@/views/operation/ads/list"),
                    meta: {
                        title: '广告管理',
                        icon: "el-icon-data-line",
                        code: "ROUTE-OPERATION-ADS"
                    },
                },
                {
                    path: 'update',
                    name: 'OperationAdsAdd',
                    hidden: true,
                    component: () =>
                        import(/* webpackChunkName: "OperationAdsAdd" */ "@/views/operation/ads/update"),
                    meta: {
                        title: '添加广告',
                        code: "ROUTE-OPERATION-ADS-ADD"
                    }
                },
                {
                    path: 'update/:id',
                    name: 'OperationAdsEdit',
                    hidden: true,
                    component: () =>
                        import(/* webpackChunkName: "OperationAdsEdit" */ "@/views/operation/ads/update"),
                    meta: {
                        title: '编辑广告',
                        code: "ROUTE-OPERATION-ADS-EDIT"
                    }
                },
            ]
        },

         // 文章管理
         {
            path: 'articles',
            name: 'OperationArticles',
            component: () =>
                import(/* webpackChunkName: "OperationArticles" */ "@/views/operation/articles"),
            redirect: '/operation/articles/list',
            meta: {
                title: '文章管理',
                icon: "el-icon-notebook-1",
                breadcrumb: false,
                code: "ROUTE-OPERATION-ARTICLES"
            },
            children: [
                {
                    path: 'list',
                    name: 'OperationArticlesList',
                    component: () =>
                        import(/* webpackChunkName: "OperationArticlesList" */ "@/views/operation/articles/list"),
                    meta: {
                        title: '文章管理',
                        icon: "el-icon-notebook-1",
                        code: "ROUTE-OPERATION-ARTICLES"
                    },
                },
                {
                    path: 'update',
                    name: 'OperationArticlesAdd',
                    hidden: true,
                    component: () =>
                        import(/* webpackChunkName: "OperationArticlesAdd" */ "@/views/operation/articles/update"),
                    meta: {
                        title: '添加文章',
                        code: "ROUTE-OPERATION-ARTICLES-ADD"
                    }
                },
                {
                    path: 'update/:id',
                    name: 'OperationArticlesEdit',
                    hidden: true,
                    component: () =>
                        import(/* webpackChunkName: "OperationArticlesEdit" */ "@/views/operation/articles/update"),
                    meta: {
                        title: '编辑文章',
                        code: "ROUTE-OPERATION-ARTICLES-EDIT"
                    }
                },
            ]
        },
    ]
}]