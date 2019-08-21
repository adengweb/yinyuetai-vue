export default {
  Mut_login (state, v) {
    state.token = v.token
    state.name = v.username
    state.avatar = v.avatarUrl
    sessionStorage.token = v.token
    sessionStorage.name = v.username
    sessionStorage.avatar = v.avatarUrl
  },
  delToken (state) {
    state.token = ''
    sessionStorage.removeItem('token')
  }
}
