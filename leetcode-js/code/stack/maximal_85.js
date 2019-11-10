//最大矩阵
export default (arr) => {
    let result = []
    let reg = /1{2,}/g
    arr = arr.map(item => {
        let str = item.join('')
        let r = reg.exec(str)
        let rs = []
        while (r) {
            rs.push([r.index, r.index + r[0].length - 1])
            r = reg.exec(str)
        }
        return rs
    })
    //递归计算相邻的矩阵
    let top = arr.pop()
    let next = arr.pop()
    let tt, nn, start, end, width = 1, maxWidth = 1
    n++
    for (let i = 0; i < top.length; i++) {
        tt = top[i]
        for (let j = 0; j < next.length; j++) {
            nn = next[j]
            width = Math.min(tt[1], nn[1]) - Math.max(tt[0], nn[0])
            if (width > maxWidth) {
                maxWidth = width
                start = Math.max(tt[0], nn[0])
                end = Math.min(tt[1], nn[1])
            }
        }
        //如果没有找到交叉点
        if (start === undefined || end === undefined) {
            if (n < 3) {
                return false
            } else {
                width = top[0][1] - top[0][0] + 1
                if (width > 1) {
                    result.push((n - 1) * width)
                }
            }
        } else {
            arr.push([[start, end]])
            maxRect(arr, result, n++)
        }
    }
    while (arr.length > 1) {
        maxRect([].concat(arr), result)
        arr.pop()
    }
    let max = 0
    let item = result.pop()
    while (item) {
        if (item > max) {
            max = item
        }
        item = result.pop()
    }
    return max > 0 ? max : -1
}