import Cookies from 'js-cookie'

let TokenKey = 'user-token'

// 获取cookies里面的token
export function getToken () {
  return Cookies.get(TokenKey)
}
// 设置token
export function setToken (token) {
  return Cookies.set(TokenKey, token)
}
// 删除token
export function removeToken () {
  return Cookies.remove(TokenKey)
}
