// TODO: 아래와 같이 정의된 ugly numbers 중 n번째 수를 리턴해야 합니다.
/*
ugly number는 2, 3, 5로만 나누어 떨어지는 수이다.
1은 1번째 ugly number 이다.
1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 16, ...
*/

const uglyNumbers = function (n) {
  const uglyNums = [1];
  let idx2 = 0, idx3 = 0, idx5 = 0; // 2, 3, 5를 인수로 가지는 포인터를 생성
  
  while (uglyNums.length < n) { // 배열의 길이가 n이 될 때까지 반복
    // 세 숫자를 곱한 값 중 가장 작은 값을 다음 ugly number로 넣어주기
    const next = Math.min(uglyNums[idx2] * 2, uglyNums[idx3] * 3, uglyNums[idx5] * 5)
    uglyNums.push(next);

    // 가장 작은 값을 갖는 포인터를 1 증가
    if (next === uglyNums[idx2] * 2) idx2++;
    if (next === uglyNums[idx3] * 3) idx3++;
    if (next === uglyNums[idx5] * 5) idx5++;
  }

  return uglyNums[n - 1];
};