// TODO: 임의의 tree를 구성하는 노드 중 하나의 Node 객체를 입력받아, 해당 노드를 시작으로 깊이 우선 탐색(DFS, Depth First Search)을 합니다. 이 때, 탐색되는 순서대로 노드의 값이 저장된 배열을 리턴해야 합니다.
let dfs = function (node) {
  /* stack 자료구조 이용 */
  // 빈 배열을 선언하여 탐색된 노드의 값을 저장
  // 스택에 루트 노드를 push
  // 스택이 빌 때까지 반복
  // 스택에서 노드를 pop하고, 해당 노드의 값을 배열에 추가
  // 노드의 자식 노드를 스택에 push
  // 스택이 빌 때까지 반복
  let result = []; // 탐색한 노드의 값을 저장할 배열
  let stack = []; // 스택
  stack.push(node); // 루트 노드를 스택에 push

  while (stack.length > 0) {
    let current = stack.pop(); // stack에서 노드를 pop으로 꺼내오기
    result.push(current.value); // 노드의 value를 배열에 추가

    // 마지막 인덱스부터 거꾸로 자식 노드를 스택에 push
    // 반대로 반복하는 이유는 스택(Stack) 자료구조에서 pop()을 사용하여 원소를 삭제하면 가장 마지막에 추가된 원소부터 꺼내지기 때문
    for (let i = current.children.length -1; i >= 0; i--) {
      stack.push(current.children[i]);
    }
  }
  return result;

  // /* 재귀호출 */
  // // 현재 노드의 값을 배열에 추가
  // let values = [node.value];
  // // 자식 노드들에 대해 재귀적으로 map 함수 호출
  // let childrenValues = node.children.map(dfs);
  // // 자식 노드들의 값을 배열에 추가 (반복문 순회)
  // for (let i = 0; i < childrenValues.length; i++) {
  //   values = values.concat(childrenValues[i]);
  // }
  // return values;
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
