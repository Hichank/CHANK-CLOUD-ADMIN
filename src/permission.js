import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import router from './router';
import store from './store';

NProgress.configure({ showSpinner: false });

// 路由白名单
const whiteList = ['/login'];

router.beforeEach(async (to, from, next) => {
    // 动画开始
    NProgress.start();
    // 检查是否已经登录
    if (store.getters.token) {
        // 已登录
        if (to.path === '/login') {
            next({ path: '/' });
            NProgress.done();
        } else {
            if (store.getters.roles && store.getters.roles.length > 0) {
                next();
            } else {
                try {
                    const { roles } = await store.dispatch('auth/user');
                    if (roles && roles.length > 0) {
                        const accessRoutes = await store.dispatch('permission/generateRoutes', roles);
                        router.addRoutes(accessRoutes);
                        next({ ...to, replace: true });
                    } else {
                        next();
                    }
                } catch (error) {
                    await store.dispatch('auth/logout');
                    console.log("没权限")
                    NProgress.done();
                }
            }
        }
    } else {
        // 未登录
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next({ path: '/login' })
            NProgress.done()
        }
    }
});

router.afterEach(() => {
    NProgress.done();
});