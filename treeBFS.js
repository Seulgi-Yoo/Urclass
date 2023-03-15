// TODO: 임의의 tree를 구성하는 노드 중 하나의 Node 객체를 입력받아, 해당 노드를 시작으로 너비 우선 탐색(BFS, Breadth First Search)을 합니다. 이 때, 탐색되는 순서대로 노드의 값이 저장된 배열을 리턴해야 합니다.
let bfs = function (node) {
  const save = [node];
  const result = [];
  
  // save가 빌 때까지 반복 (1 depth 먼저 싹 돌림 => 끝나고 => 아래 if문에서 추가된 child 돌림 => 다 돌 때까지 반복)
  while (save.length > 0) {
    const current = save.shift(); // save에서 노드를 shift로 꺼내오기
    result.push(current.value);
    // 자식 노드가 있는 경우, save에 추가해주기 (save 맨 뒤에 child를 추가해주면 빌 때까지 while 문 계속 반복)
    if (current.children) {
      current.children.forEach(child => save.push(child))
    }
  }
  return result;
};

// 이 아래 코드는 변경하지 않아도 됩니다. 자유롭게 참고하세요.
let Node = function (value) {
  this.value = value;
  this.children = [];
};

// 위 Node 객체로 구성되는 트리는 매우 단순한 형태의 트리입니다.
// membership check(중복 확인)를 따로 하지 않습니다.
Node.prototype.addChild = function (child) {
  this.children.push(child);
  return child;
};
