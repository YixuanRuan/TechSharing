import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      username: '',
      password: '',
      re_password: '',
      phoneNumber: '',
      verificationCode: '',
      true_verificationCode: 'root',
      isgt: 'false',
      verify: 'false',
      logined: false,
      keyword: ''
  },
  mutations: {
      handleUsername (state, newVal) {
          state.username = newVal
      },
      handlePassword (state, newVal) {
          state.password = newVal
      },
      handleRePassword (state, newVal) {
          state.re_password = newVal
      },
      handlePhoneNumber (state, newVal) {
          state.phoneNumber = newVal
      },
      handleVerificationCode (state, newVal) {
          state.verificationCode = newVal
      },
      handleisgt (state) {
          state.isgt = true
      },
      handleverify (state) {
          state.verify = true
      },
      handleKeyword (state, keyword) {
          state.keyword = keyword
      },
  },
  actions: {
  },
  modules: {
  }
})
