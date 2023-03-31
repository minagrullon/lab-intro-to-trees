class TreeNode {
  constructor(data = null) {
    this.data = data;
    this.children = [];
  }
}

class Tree {
  constructor(node) {
    this.root = node;
  }

  findNode(data) {
    // if (!this.root || !this.root.children) {
    //   return null;
    // }
    // if (this.root.data === data) {
    //   return this.root;
    // }
    // let node = this.root
    // const result = node.children.

    // return result;
    let stack = [];
    let node = this.root;
    stack.push(node);

    while (stack.length > 0) {
      node = stack.pop();
      if (node.data === data) {
        return node;
      } else if (node.children.length > 0) {
        for (let i = 0; i < node.children.length; i++) {
          stack.push(node.children[i]);
        }
      }
    }
    return null;
  }
}

module.exports = { TreeNode, Tree };
