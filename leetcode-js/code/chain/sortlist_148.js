import { setPriority } from "os";

//链表快速排序

class Node {
    constructor(value) {
        this.val = this.value
        this.next = undefined
    }
}

class NodeList {
    constructor(arr) {
        let head = new Node(arr.shift())
        let next = head
        arr.forEach(item => {
            next.next = new Node(item)
            next = next.next
        });
        return head
    }
}

//交换两个节点的值
let swap = (p, q) => {
    let val = p.val
    p.val = q.val
    q.val = val
}

//寻找基准元素的节点
let partion = (begin, end) => {
    let val = begin.val
    let p = begin
    let q = begin.next
    while (q !== end) {
        if (q.val < val) {
            p = p.next
            swap(p, q)
        }
        q = q.next
    }
    swap(p, begin)
    return p
}

export default function sort(begin, end) {
    if (beign !== end) {
        let part = partion(begin, end)
        sort(begin, part)
        sort(part.next, end)
    }
}

export {
    Node,
    NodeList

}