// 문자열을 입력받아 아이소그램인지 여부를 리턴해야 합니다. 아이소그램(isogram)은 각 알파벳을 한번씩만 이용해서 만든 단어나 문구를 말합니다.
// 1. 소문자로 변환
// 2. 배열로 바꾼 뒤 정렬
// 3. 전 문자와 현재 문자가 같은 경우 false 리턴
// input: 'dropOut' output: false

function isIsogram(str) {
  let result = true;
  let arr = str.toLowerCase().split("").sort();
  let before = arr[0]
  for(let i = 1; i < arr.length; i++) {
    if(before !== arr[i]) {
      return false;
    }
    before = arr[i]
  }
  return result;
}