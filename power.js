// TODO: 두 수를 입력받아 거듭제곱을 리턴해야 합니다. 실제 계산 결과를 94,906,249로 나눈 나머지를 리턴해야 합니다.
function power(base, exponent) {
  // exponent가 0일 경우 base^0은 1이므로 1을 리턴(base case)
  if (exponent === 0) return 1;

  // exponent가 짝수인 경우 base^(exponent/2)를 구한 뒤 제곱(ex: 2^10 = 2^5 * 2^5)한 값 % 94906249 리턴
  // exponent가 홀수인 경우 base^((exponent - 1)/2)를 구한 뒤 제곱 * base(ex: 2^11 = 2^5 * 2^5 * 2)한 값 % 94906249 리턴
  const half = power(base, ~~(exponent / 2)); //? ~~(exponent / 2) => (exponent / 2)와 (exponent - 1) / 2를 동시에 계산하는 방법
  const result = (half * half) % 94906249;
  if (exponent % 2 === 1) {
    return (result * base) % 94906249; // result에서 base를 한 번 더 곱했으니 94906249로 나눈 나머지 한 번 더 계산해주기
  }
  return result;
}