import * as types from '../mutation-types';

// initial state
const state = {
    show: false,
    title: 'Confirm',
    msg: 'confirm msg',
    type: 'default', // default/primary/success/info/warning/danger
    applyFunc: 'func',
    cancelFunc: 'func',
    applyStr: 'Apply',
    cancelStr: 'Cancel'
};

// mutations
const mutations = {
    [types.CONFIRM](state, { params }) {
        state.show = params.show;
        state.title = params.title || 'Confirm';
        state.type = params.type || 'default';
        state.msg = params.msg || 'confirm msg';
        state.applyFunc = params.applyFunc || function() {};
        state.cancelFunc = params.cancelFunc || function() {};
        state.applyStr = params.applyStr || 'Apply';
        state.cancelStr = params.cancelStr || 'Cancel';
    },
    [types.HIDECONFIRM](state) {
        state.show = false;
    }
};

export default {
    state,
    mutations
};
