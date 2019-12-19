import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      baseurl: 'http://10.135.238.11:8080/',
      baseurl_es : 'http://49.233.42.108:9200/',
      username: '',
      password: '',
      re_password: '',
      phoneNumber: '',
      verificationCode: '',
      true_verificationCode: 1,
      isgt: 'false',
      verify: 'false',
      logined: false,
      token: '',
      keyword: ''
  },
  mutations: {
      clear () {
          this.state.password = ''
          this.state.re_password = ''
      },
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
      handletoken (state, token) {
          state.token = token
      },
      logined () {
          this.state.logined = true
      },
  },
  actions: {
      changetoken (context, token) {
          context.commit('handletoken', token)
      },
  },
  modules: {
  }
})
