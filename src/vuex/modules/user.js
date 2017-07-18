import * as types from '../mutation-types';

// initial state
const state = {
    userName: ''
};

// mutations
const mutations = {
    [types.USER](state, userName) {
        state.userName = userName;
    }
};

export default {
    state,
    mutations
};
