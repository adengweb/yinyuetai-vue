import Mock from 'mockjs'

const Random = Mock.Random

export default {
  lists: config => {
    return Mock.mock({
      'list|10': [
        {
          'id|+1': 1,
          'date': Random.date(),
          'title': '@ctitle(12, 30)',
          'subTitle': '@cparagraph(12, 16)',
          'image': Random.image('400x300', '#02adea', 'Hello Mock.js')
        }
      ]
    })
  }
}
