/**
 * 链表和数组一样，也支持数据的查找、插入和删除。
 * 由于链表是非连续的，想要访问第i个元素就不像数组那么方便，而是需要根据指针一个节点一个节点一次遍历，直到找到相应的节点。
 * 因为链表的数据本身是非连续的空间，所以它的插入或删除操作，不需要像数组那边挪动原来的数据，因此在链表中插入数据、删除数据是非常快的。
 */

/**
 * 设计链表
 * 我们设计链表包含两个类：
 *    一个是Node类用来表示节点；另一个是LinkedList类提供插入节点、删除节点等操作。
 *    头结点head的next初始化为null，每当调用插入方法时，next就会指向新的元素
 */

// 节点
class Node {
  constructor(el) {
    this.el = el;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node('head');
  }

  /**
   * 用于查找
   * 从头结点开始查找，如果没找到就把当前指针往后移，找到就返回该元素，如果遍历完没找到就直接返回null。
   */
  find(item) {
    let currentNode = this.head;
    while (currentNode !== null && currentNode.el !== item) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  findPre(item) {
    let cur = this.head;
    while (cur.next !== null && cur.next.el !== item) {
      cur = cur.next;
    }
    return cur;
  }

  /**
   * 插入节点 // el:要插入的数据 // item：数据插入到这个节点后面
   * 要往链表中插入新节点，需要知道在哪个节点后面插入。那么我们就需要知道在哪里插入和插入的元素是什么。
   * 知道在哪个节点后面插入后，首先我们要先找到这个节点的位置，这里我们就可以用上面实现的查找方法。
   * 找到节点后，我们先创建一个新节点，把新节点的next指针指向找到的这个节点next指向的对应节点，再把找到的这个节点的next指针指向新节点，数据的插入就完成了。
   */
  insert(el, item) {
    const newNode = new Node(el);
    const cur = this.find(item);
    newNode.next = cur.next;
    cur.next = newNode;
  }

  /**
   * 删除节点
   * 删除节点和插入节点类似，首先要找到相应节点的前一个节点，找到后，让它的next指向待删除节点的下一个节点
   */
  remove(item) {
    const preNode = this.findPre(item);
    if (preNode.next !== null) {
      preNode.next = preNode.next.next;
    }
  }
}
