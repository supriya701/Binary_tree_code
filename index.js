//-----Create a binary tree--------
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;

      while (true) {
        if (data < currentNode.data) {
          if (currentNode.left === null) {
            currentNode.left = newNode;
            break;
          } else {
            currentNode = currentNode.left;
          }
        } else {
          if (currentNode.right === null) {
            currentNode.right = newNode;
            break;
          } else {
            currentNode = currentNode.right;
          }
        }
      }
    }
  }

  traverse(order) {
    switch (order) {
      case "inorder":
        return this.inorderTraversal(this.root);
      case "preorder":
        return this.preorderTraversal(this.root);
      case "postorder":
        return this.postorderTraversal(this.root);
      default:
        throw new Error(`Invalid traversal order: ${order}`);
    }
  }

  inorderTraversal(node) {
    if (node === null) {
      return [];
    }

    const left = this.inorderTraversal(node.left);
    const right = this.inorderTraversal(node.right);

    return left.concat([node.data], right);
  }

  preorderTraversal(node) {
    if (node === null) {
      return [];
    }

    return [node.data].concat(
      this.preorderTraversal(node.left),
      this.preorderTraversal(node.right)
    );
  }

  postorderTraversal(node) {
    if (node === null) {
      return [];
    }

    return this.postorderTraversal(node.left).concat(
      this.postorderTraversal(node.right),
      [node.data]
    );
  }
}
const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
const inorder = tree.traverse("inorder");
console.log(inorder);
const preorder = tree.traverse("preorder");
console.log(preorder);
const postorder = tree.traverse("postorder");
console.log(postorder);

