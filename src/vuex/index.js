import Vue from 'vue';
import Vuex from 'vuex';
import VueCodeMirror from 'vue-codemirror';
import * as actions from './actions';
import * as getters from './getters';
import alert from './modules/alert';
import confirm from './modules/confirm';
import loading from './modules/loading';
import user from './modules/user';
import createLogger from './plugins/logger';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    actions,
    getters,
    modules: {
        alert,
        confirm,
        loading,
        user
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
});
