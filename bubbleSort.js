//TODO: 정수를 요소로 갖는 배열을 입력받아 오름차순으로 정렬하여 리턴해야 합니다.
//? 버블 정렬(bubble sort)은 여러 정렬 알고리즘(삽입 정렬, 퀵 정렬, 병합 정렬, 기수 정렬 등) 중 가장 기본적인 알고리즘입니다.

const bubbleSort = function (arr) {
  // 첫 번째 요소가 두 번째 요소보다 크면, 두 요소의 위치를 바꿉니다. (swap)
  // 두 번째 요소와 세 번째 요소보다 크면, 두 요소의 위치를 바꿉니다. (swap)
  // 1, 2를 마지막까지 반복합니다. (마지막에서 두 번째 요소와 마지막 요소를 비교)
  // 1~3의 과정을 첫 요소부터 다시 반복합니다. (1~3의 과정을 총 n번(배열의 크기) 반복합니다.)
  let len = arr.length - 1
  for (let i = 0; i < len; i++) { //! i가 0부터 array.length보다 작을 때까지 loop을 돌리고,
    let swap; // 배열 요소 위치를 바꾸기 위한 변수 선언
    for (let j = 0; j < len - i; j++) { //! j가 0부터 array.length - 1 - i보다 작을 때까지 loop 돌리기
      if (arr[j] > arr[j+1]) { // arr[j]와 arr[j+1]를 비교해 arr[j]가 크면 두 요소의 위치 바꿔주기
        swap = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = swap;
      }
    }
    if (swap === undefined) break; //! Advanced: swap 변수에 아무 값도 저장되어 있지 않다면 정렬이 끝난것이므로, 반복문 종료
  }
  return arr;
};