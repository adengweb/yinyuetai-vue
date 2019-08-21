import Mock from 'mockjs'

// 请求的数据源
import faq from './faq.js'

// 设置ajax请求的时间
Mock.setup({
  timeout: '200-400'
})

// 公用接口
Mock.mock('/api/login', 'post', function () {
  return {code: 200, msg: '登录成功', token: 'user-token', username: 'adeng.y', avatarUrl: '//avatars2.githubusercontent.com/u/5827625?s=60&v=4'}
})
Mock.mock('/api/user-info', function () {
  return {code: 200, msg: '', username: 'adeng.y', avatarUrl: '//avatars2.githubusercontent.com/u/5827625?s=60&v=4'}
})
Mock.mock('/api/addLike', 'post', {
  'msg': '喜欢成功'
})

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/api/faqList', 'get', faq.lists)

export default Mock
