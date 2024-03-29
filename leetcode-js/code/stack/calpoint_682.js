//棒球比赛
export default (arr) => {
    let result = []
    let pre1 //上一轮的数据
    let pre2
    arr.forEach(item => {
        switch (item) {
            case 'C':
                if (result.length) {
                    result.pop()
                }
                break;
            case 'D':
                pre1 = result.pop()
                result.push(pre1, pre1 * 2)
                break;
            case '+':
                pre1 = result.pop()
                pre2 = result.pop()
                result.push(pre2, pre1, pre1 + pre2)
                break;
            default:
                result.push(item * 1)
        }
    });
    //求和
    return result.reduce((total, num) => { return total + num })
}