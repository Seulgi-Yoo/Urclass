// ? 주어진 인접행렬에서 한 정점으로부터 다른 정점으로 이어지는 길이 존재하는지 반환해야 합니다.
// 직항 말고 경유노선(?)도 포함

function getDirections(matrix, from, to) {
  // matrix의 from 번째 요소 = [n, n, n, n, n] (n = 0 or 1)
  // 해당 배열의 요소 중 값이 1인 요소가 간선이 존재하는 것

  // 방문한 정점을 저장할 배열
  let visited = new Array(matrix.length).fill(false);

  const queue = [from]; // 시작 정점 from을 먼저 탐색하기 위해 큐에 추가

  while (queue.length > 0) {
    const current = queue.shift(); // 큐에서 정점 하나 뽑아서 방문하기
    visited[current] = true; // 방문한 정점 표시
    if (current === to) return true; // 현재 위치가 목적지라면 true 반환
    // 인접한 정점들을 검사하기
    for (let i = 0; i < matrix[current].length; i++) {
      // 간선이 있고, 도착 정점 to라면 true를 반환
      if (matrix[current][i] === 1 && i === to) {
        return true;
      }
      // 간선이 있고, 방문하지 않은 정점이라면 큐에 추가해서 다시 탐색할 수 있도록 하기
      if (matrix[current][i] === 1 && !visited[i]) {
        queue.push(i);
      }
    }
  }
  // 모두 방문해서 확있했으나, 찾지 못했다면 false 반환
  return false;
}