// Definition for a binary tree node.
// class TreeNode {
//   constructor(val = 0, left = null, right = null) {
//   this.val = val;
//   this.left = left;
//   this.right = right;
//   }
// }
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 const levelOrderTraversal = (root) => {
  let result = [];
  const queue = [root];
  if (root === null) return result;

  while (queue.length > 0) {
    const currentSize = queue.length;
    const currentLevel = [];

    // 현재 레벨의 모든 val을 currentLevel 배열에 넣기..
    for (let i = 0; i < currentSize; i++) {
      const node = queue.shift();
      currentLevel.push(node.val)

      // 왼쪽 노드나 오른쪽 노드가 있는 경우 queue에 넣어주기
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
    result.push(currentLevel); // result에 배열 형태의 currentLevel 넣어주기
  }
  return result;
}
