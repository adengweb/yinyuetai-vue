import {getToken, setToken, removeToken} from '@/utlis/auth'

let state = {
  token: getToken(),
  name: '',
  avatar: ''
}

let mutations = {
  SET_TOKEN: (state, token) => {
    console.log(state)
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  }
}

let actions = {
}

export default {
  state,
  mutations,
  actions
}
