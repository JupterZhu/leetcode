import { reverse } from "dns"

//字符串翻转 方式一
// export default (str) => {
//     let arr = str.split(' ')
//     let res = arr.map(item => {
//         return item.split('').reverse().join('')
//     })
//     return res.join('')
// }

//字符串翻转 方式二
// export default (str) => {
//     return str.split(' ').map(item => {
//         return item.split('').reverse().join('')
//     }).join(' ')
// }


//字符串翻转 方式三
// export default (str) => {
//     return str.split(/\s/g).map(item => {
//         return item.split('').reverse().join('')
//     }).join(' ')
// }

//字符串翻转 方式四
export default (str) => {
    // 1. 字符串按空格进行分隔，保存数组，数组的元素的先后顺序就是单词的顺序
    // 2. 对数组进行遍历，然后每个元素进行反转
    return str.match(/[\w']+/g).map(item => {
      return item.split('').reverse().join('')
    }).join(' ')
  }