# Parcel을 이용한 React 개발 환경 구성

웹팩은 간단한 사용에도 설정해야 되는 값이 많아 부담감이 있어 React를 구성할때 CRA(create-react-app)의 도움을 받는경우가 많습니다.  
CRA가 간단하긴 하지만 필요한 설정을 손대기가 불편하고, 특정 모듈은 eject를 써서 사용해야 되는 경우도 있어 그 편함이 독이되는 경우가 많습니다.  
간단한 설정과 명령어 만으로 실행이 가능한 parcel로 구현을 했습니다.  
이 문서는 차후 필요한 설정을 테스트 할 때마다 업데이트 됩니다.

## Parcel
[Parcel 바로가기](https://ko.parceljs.org/)

설정 파일이 필요치 않은 번들러 입니다.  
기초 설정이 아주 간단하고, 번들 속도가 다른 번들러에 비해 매우 빠릅니다.  
간단한 명령어로 조작이 가능하여 간단한 테스트 앱 및 복잡하지 않은 구조의 모듈 개발에 유효하다고 판단됩니다.  
최초 진입점은 ***src/index.html*** 입니다.  

## React

React의 구조는 다음과 같습니다.  

- 진입점 : src/index.js  
- root 컴포넌트 : src/components/App.js  
- 페이지 : src/components/pages
- 페이지 구성요소 : src/components/parts
  - Tag단위 엘레멘트 : src/components/parts/elements
  - Tag의 조립 단위 엘레멘트 : src/components/parts/grafments
  
### React Components 및 Status Management

리액트의 컴포넌트 구조와 상태 관리 모듈은 차후 추가됩니다.  
컴포넌트 구조는 Atomic design을 일부 차용한 개념으로 적용되며, 상태관리는 Redux를 바탕으로 하여 작성됩니다.
  
## VS Code

에디터에 필요한 설정이 jsconfig.json에 저장되어 있습니다.  
parcel의 경로와 일치시키기 위해 프로그램상 절대경로를 index.html과 동일한 /src로 잡아두었습니다.  
src 하위 경로들을 /로 시작하는 경로로 입력하면 별도의 설정없이 인식됩니다.

## 사용 방법

```bash
yarn start  
or
npm run start
```

실행될 스크립트
```json
"sciprts": {
   // parcel 을 기본 포트에서 구동합니다.
  "start": "parcel src/index.html",
   // parcel 을 지정된 경로상으로 빌드합니다. --public-url 옵션을 통해 배포됐을때의 참조경로를 입력해줄 수 있습니다.
  "build": "parcel build src/index.html -d build --public-url ./"
}
```
