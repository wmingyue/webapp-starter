import * as types from '../mutation-types';

// initial state
const state = {
    show: false,
    msg: 'alert message!', // support
    type: 'warning', // info/warning/success/danger
    dismissible: true,
    delay: 2500
};

// mutations
const mutations = {
    [types.ALERT](state, { params }) {
        state.show = params.show;
        state.msg = params.msg || 'alert msg';
        state.type = params.type || 'warning'; // info/warning/success/danger
        state.delay = params.delay || 2500; // false will not auto hide
        state.dismissible = params.dismissible || true;
    },
    [types.HIDEALERT](state) {
        state.show = false;
    }
};

export default {
    state,
    mutations
};
