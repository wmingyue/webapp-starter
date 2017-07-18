import * as types from './mutation-types';

export const alert = ({ commit }, params) => {
    commit(types.ALERT, { params });
};

export const hideAlert = ({ commit }) => {
    commit(types.HIDEALERT);
};

export const confirm = ({ commit }, params) => {
    commit(types.CONFIRM, { params });
};

export const hideConfirm = ({ commit }) => {
    commit(types.HIDECONFIRM);
};

export const loading = ({ commit }, showOrHide) => {
    commit(types.LOADING, showOrHide);
};

export const user = ({ commit }, userName) => {
    commit(types.USER, userName);
};
