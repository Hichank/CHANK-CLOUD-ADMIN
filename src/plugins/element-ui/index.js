import Vue from 'vue';
import ElementUI from 'element-ui';
import '@/styles/element-variables.scss';
import store from '@/store';

Vue.use(ElementUI, {
    size: store.getters.size,
    zIndex: 3000
});