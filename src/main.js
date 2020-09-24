import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 加载路由权限
import './permission';
import './filters';

// 加载 plugins
import './plugins/element-ui';

// 加载 base.scss
import './styles/index.scss';

// 是否启动接口模拟
// if (process.env.NODE_ENV === 'development') {
//   const { mockXHR } = require('./mock')
//   mockXHR()
// }

import { service } from './utils'
Vue.prototype.$http = service;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");