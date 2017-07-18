import Vue from 'vue';
import $ from 'webpack-zepto';
import App from './App.vue';
import store from './vuex/index';
import filter from './filter/index.js';
import routes from './config/routes.js';
import httpConfig from './config/http.config.js';
import loginConfig from './config/login.config.js';
import 'babel-polyfill';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

const router = new VueRouter({
    routes
});

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
Vue.use(ElementUI);

// 处理刷新的时候vuex被清空但是用户已经登录的情况
if (localStorage.userName) {
    store.dispatch('user', localStorage.userName);
}
const URI_PAAS = httpConfig['development'];

$.ajaxSettings.beforeSend = function(xhr, setting) {
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    if (localStorage.token) {
        xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage.token);
    }
    setting.url = setting.url.replace(/^\/_api\/(.+)/, URI_PAAS + '/$1');
    if (setting.loading) {
        store.dispatch('loading', true);
    }
};
$.ajaxSettings.crossDomain = true;
$.ajaxSettings.complete = function(xhr, status) {
    store.dispatch('loading', false);
    if (xhr.status === 401) {
        // 401未登录
        store.dispatch('user', '');   // token失效删除用户名
        window.localStorage.removeItem('userName');
        window.localStorage.removeItem('token');
        window.location.href = loginConfig['host'] + loginConfig['parame'] + '&state=' + encodeURIComponent(window.location.href);
    } else if (xhr.status >= 500) {
        this.$message({
            showClose: true,
            message: '服务器错误!',
            type: 'warning'
        });
    }
};
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {    // 当前页面需要登录权限的情况
        if (localStorage.token) {
            next();
        } else {
            store.dispatch('user', '');   // token失效删除用户名
            window.localStorage.removeItem('userName');
            window.localStorage.removeItem('token');
            window.location.href = loginConfig['host'] + loginConfig['parame'] + '&state=' + encodeURIComponent(window.location.href);
        }
    } else {
        next();
    }
});
const app = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
