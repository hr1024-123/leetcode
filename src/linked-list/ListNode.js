import Node from './Node';

export default class listNode {
  constructor(s, head) {
    const ret = new Node(s);
    let cur = ret;
    for (let i = 0; i < head.length; i += 1) {
      cur.next = new Node(head[i]);
      cur = cur.next;
    }
    return ret;
  }
}
