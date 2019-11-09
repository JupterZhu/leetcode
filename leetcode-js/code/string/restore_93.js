//复原IP地址

export default (str) => {
    let r = [] //保存复合条件的IP地址
    //分四步递归处理IP分段
    let search = (cur, sub) => {
        if (cur.length === 4 && cur.join('') === str) {
            r.push(cur.join('.'))
        } else {
            for (let i = 0; i < Math.min(3, sub.length); i++) {
                let tmp = sub.substr(0, i + 1)
                if (tmp < 256) {
                    search(cur.concat([tmp]), sub.substr(i + 1))
                }
            }
        }
    }
    search([], str)
    return r
}