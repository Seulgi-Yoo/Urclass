function compressString(str) {
  // 문자열을 입력받아 연속되는 문자가 있을 경우, 연속 구간을 반복되는 수와 문자로 조합한 형태로 압축한 문자열을 리턴해야 합니다.
  // 빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.
  // 3개 이상 연속되는 문자만 압축합니다.
  // 입력: 'wwwggoppopppp' => 출력: '3wggoppo4p'

  // 문자열 전체 순환해서 전 문자와 현재 문자가 같은지 비교
  // 같다면 카운트 +1, 카운트가 3 이상인 경우 출력 예시처럼 변경하여 새로운 문자열에 넣어주기
  // 다르면 카운트 초기화

  let before = str[0], count = 1, result = '';
  str = str + " "; // 마지막 문자 잘리지 않도록
  for(let i = 1; i < str.length; i++) {
    if(before === str[i]) { // 전 문자와 현재 문자가 같다면 count 증가
      count++;
    }
    else {
      if(count >= 3) { // 전 문자와 현재 문자가 다르고, 3번 이상 반복 되었을 경우에만 압축해주기
        result += `${count}${before}`;
      } 
      else {
        result += before.repeat(count) // 쌓인 카운트만큼 반복해서 넣어주기 ('ee' -> count: 2, before: 'e')
      }
      before = str[i] // 직전 문자 교체해주기
      count = 1; // 카운트 초기화

    }
  }
  return result
}