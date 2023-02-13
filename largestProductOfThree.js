// 정수를 요소로 갖는 배열을 입력받아 3개의 요소를 곱해 나올 수 있는 최대값을 리턴해야 합니다.
// input: [-1, 2, -5, 7] / output: 35 (= -1 * -5 * 7)

const largestProductOfThree = function (arr) {
  // 배열 내 요소를 오름차순으로 정렬
  // 음수(추정) 중 가장 작은 2개 + 양수(추정) 중 가장 큰 숫자 3개 곱하고
  // 큰 숫자 3개끼리 곱해서
  // 두개 크기 비교해서 더 큰 숫자 리턴하기

  let sortArr = arr.sort((a, b) => a - b)
  let last = sortArr.length - 1 
  let num1 = sortArr[0] * sortArr[1] * sortArr[last]
  let num2 = sortArr[last] * sortArr[last - 1] * sortArr[last - 2]
  return Math.max(num1, num2);
};