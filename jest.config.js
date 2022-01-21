module.exports = {
  roots: ["<rootDir>/src"],

  testEnvironment: "jsdom",

  // ts-jest로 타입스크립트를 지원하기 위한 트랜스폼 설정
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },

  // 테스트용 matcher 확장s
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],

  // 테스트 파일을 인지하는 패턴 설정
  // `__tests__` 폴더 내부에 있는 파일이
  // `test`나 `spec` 단어를 포함하는 tsx파일이면 테스트
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",

  // 임포트할 때 모듈 확장자
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],

  // 모킹할 파일 설정
  moduleNameMapper: {
    "^.+\\.(css|less)$": "<rootDir>/__mocks__/cssStub.js",
  },
};
