import axios from 'axios'
import qs from 'qs'
import Cookies from 'js-cookie'

axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

// function startLoading () {
//   loading = Loading.service({
//     lock: true,
//     text: '加载中...',
//     background: 'rgba(0, 0, 0, 0.7)'
//   })
// }
// function endLoading () {
//   loading.close()
// }

// 添加请求拦截
axios.interceptors.request.use((config) => {
  // startLoading()
  const token = localStorage.getItem('user-token')
  if (token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
    config.headers['X-Token'] = Cookies.get(token)
  }
  // 发送请求之前
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  return config
}, (errer) => {
  // endLoading()
  console.log('错误的传参')
  return Promise.reject(errer)
})
// 添加状态码拦截
axios.interceptors.response.use((res) => {
  // 对响应数据处理
  if (!res.data.success) {
    return Promise.resolve(res)
  }
  return res
}, (errer) => {
  console.log('网络异常')
  return Promise.reject(errer)
})

// 发送一个post请求
export function Post (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response)
      },
      err => {
        reject(err)
      })
      .catch((errer) => {
        reject(errer)
      })
  })
}

// 发送一个get请求
export function Get (url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, params)
      .then(response => {
        resolve(response)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export default {
  Post,
  Get
}
