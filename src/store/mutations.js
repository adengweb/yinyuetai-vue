export default {
  setToken (state, token) {
    state.token = token
    sessionStorage.token = token
  },
  delToken (state) {
    state.token = ''
    sessionStorage.removeItem('token')
  }
}
