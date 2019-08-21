import Mock from 'mockjs'

const Random = Mock.Random

export default {
  lists: config => {
    return Mock.mock({
      'list|10': [
        {
          'id|+1': () => Random.integer(20, 100),
          'date': () => Random.date(),
          'title': () => Random.ctitle(12, 40),
          'subTitle': () => Random.cparagraph(12, 16),
          'image': () => Random.image('400x300', '#02adea', 'Hello Mock.js')
        }
      ]
    })
  }
}
