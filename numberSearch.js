function numberSearch(str) {
  // 1. 문자열을 입력받아 문자열에서 숫자를 모두 찾아 더한 뒤에 
  // 2. 해당 값을 (숫자와 공백을 제외한 나머지) 문자열의 길이로 나눈 값을 
  // 3. 정수로 반올림하여 리턴
  let sum = 0; // 숫자의 합
  let strLength = str.length; // 나누어 줄 문자열의 길이
  if(str.length === 0) { // 엣지케이스 처리
    return 0
  }
  for(let i = 0;i < str.length; i++) {
    // 해당 문자를 숫자타입으로 변환했을 때 NaN이 아닌 경우를 찾기
    if(!Number.isNaN(Number(str[i]))) {
      sum += Number(str[i]) // 찾아서 더해주기
      strLength-- // 길이에서 숫자, 공백 제외 (Number(' ') === 0)
    }
  }
  return Math.round(sum/strLength)
}
