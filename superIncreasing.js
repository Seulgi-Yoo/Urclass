// 수를 요소로 갖는 배열을 입력받아 각 요소들이 그 이전의 요소들의 합보다 큰지 여부를 리턴해야 합니다.
// 입력: [1, 3, 6, 13, 54] 
// 1 + 3 < 6 && 1 + 3 + 6 < 13 ...
// 출력: true
function superIncreasing(arr) {
  let result = false;
  if (arr[0] < arr[1]) {
    result = true;
  }  else return false;
  for (let i = 2; i < arr.length; i++) {
    let acc = 0;
    for (let j = 0; j < i; j++) {
      acc += arr[j]
    }
    if (acc < arr[i]) {
      result = true;
    } else return false;
  }
  return result;
}