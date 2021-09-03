import { createStore } from 'vuex'

export default createStore({
  state: {
    // 存储token
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',
    account: localStorage.getItem('account') ? localStorage.getItem('account') : '',
  },
  mutations: {
    // 修改token，并将token存入localStorage
    changeLogin (state, user) {
      state.Authorization = user.Authorization;
      state.account = user.account;
      localStorage.setItem('Authorization', user.Authorization);
      localStorage.setItem('account', JSON.stringify(user.account));
    }
  },
  actions: {
  },
  modules: {
  }
})
