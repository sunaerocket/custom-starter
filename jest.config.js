module.exports = {
  roots: ["<rootDir>/src"],

  testEnvironment: "jsdom",

  // 테스트용 matcher 확장
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],

  // 테스트 파일을 인지하는 패턴 설정
  // `__tests__` 폴더 내부에 있는 파일이
  // `test`나 `spec` 단어를 포함하는 jsx파일이면 테스트
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$",

  // 임포트할 때 모듈 확장자
  moduleFileExtensions: ["js", "jsx", "json", "node"],
};
