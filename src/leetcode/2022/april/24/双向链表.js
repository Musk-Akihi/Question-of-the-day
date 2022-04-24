/**
 * 双向链表，顾名思义就是它有两个方向，除了next指针指向下一个节点外，比单向链表多了一个prev指针，用来指向上一个节点。
 * 和单向链表相比，在存储相同的数据情况下，双向链表要比单向链表占用更多的空间，但双向链表往往会比单向链表更加灵活。
 *    双向链表删除节点时，因为有prev指向上一个节点，就不需要像单向链表一样去寻找待删除节点的前驱节点，使得删除节点的效率提高了。
 */

/**
 * 设计链表
 * 对于节点类，我们只要在单向链表的基础上，加上一个prev指针。
 */

// 双向链表
class Node {
  constructor(el) {
    this.el = el;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node('head');
  }

  // 用于查找
  find(item) {
    let currentNode = this.head;
    while (currentNode !== null && currentNode.el !== item) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  /**
   * 插入节点 // el:要插入的数据 // item：数据插入到这个节点后面
   * 双向链表的插入和单向链表相似，多了一个prev指针，只要将新节点的prev指向前驱节点，将后驱节点的prev指向新节点。
   */
  insert(el, item) {
    const newNode = new Node(el);
    const cur = this.find(item);
    newNode.next = cur.next;
    newNode.prev = cur;
    cur.next = newNode;
    cur.next.prev = newNode;
  }

  /**
   * 删除节点
   * 双向链表的删除 remove 方法比单链表效率高，不需要查找前驱节点，
   * 只要找出待删除节点，然后将该节点的前驱 next 属性指向待删除节点的后继，设置该节点后继 previous 属性，指向待删除节点的前驱即可。
   */
  remove(item) {
    const node = this.find(item);
    node.prev.next = node.next;
    node.next.prev = node.prev;
    node.next = null;
    node.prev = null;
  }
}
