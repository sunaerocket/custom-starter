# 커스텀 스타터

자주 사용하는 프로젝트 환경을 등록해두고 cli로 설치하면 시간을 절약할 수 있다.

## :chains: 작동원리

- git 브랜치를 이용하여 원하는 환경의 보일러플레이트 코드 격리
- 설치 스크립트를 실행하는 npm 패키지 배포
- 커맨드라인에서 명령어 실행

## :package: 환경

### react

리액트를 기반으로 바벨 트랜스파일러, 웹팩 번들러, 제스트 테스터로 구성

### react-typescript

리액트를 기반으로 타입스크립트 트랜스파일러, 웹팩 번들러, 제스트 테스터로 구성. 제스트와 타입스크립트 호환을 위해 바벨 트랜스파일러도 병용.

## :computer: 사용법

### react 환경 설치

```
$ npx create-sunaero-app 프로젝트이름
```

### react-typescript 환경 설치

```
$ npx create-sunaero-app --typescript 프로젝트이름
```

## :link: 참고자료

- [Create your own npx starter command like create-react-app](https://bonsaiilabs.com/create-npx-starter-command/)
- [Don't use create-react-app: How you can set up your own reactjs boilerplate.](https://dev.to/nikhilkumaran/don-t-use-create-react-app-how-you-can-set-up-your-own-reactjs-boilerplate-43l0)
- [React + TS boilerplate 제작기 1 - 환경 구성](https://velog.io/@jjunyjjuny/React-TS-boilerplate-%EC%A0%9C%EC%9E%91%EA%B8%B0-%ED%99%98%EA%B2%BD-%EA%B5%AC%EC%84%B1)
- [React + TS boilerplate 제작기 2 - 설치 패키지 & npx](https://velog.io/@jjunyjjuny/React-TS-boilerplate-%EC%A0%9C%EC%9E%91%EA%B8%B0-%EB%B0%B0%ED%8F%AC-%EB%B0%8F-npx)
- [React + TS boilerplate 제작기 3 - Error !](https://velog.io/@jjunyjjuny/React-TS-boilerplate-%EC%A0%9C%EC%9E%91%EA%B8%B0-3-Error%EB%93%A4)
- [react+typescript+jest setup 테스트 코드 작성](https://velog.io/@sunhwa508/react-typescript-jest-%ED%99%98%EA%B2%BD%EC%84%B8%ED%8C%85-%ED%9B%84-%EC%BD%94%EB%93%9C-%EC%9E%91%EC%84%B1)
