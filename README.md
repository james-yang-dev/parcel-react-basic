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

### 설치

프로젝트에 종속되지 않는 전역 설치가 필요합니다.

```bash
npm install global parcel
or
yarn global add parcel
```

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

## eslint

코드 작성 룰에 대해 강제를 하는 모듈 입니다. 널리 사용되는 airbnb 룰을 적용 하고, 불필요하게 강제적인 몇 몇 룰에 대해 예외를 적용 했습니다.

## Alias

모듈 import시에 경로는 항상 문제가 됩니다. 이를 해결하기 위해 특정 경로에 Alias를 주고 Alias를 통해 접근하도록 설정 했습니다.  

```javascript
// 기존
import App from '../../components/App'

// Alias 적용시
import App from 'components/App'
```

### babel-plugin-module-resolver

babel에서 모듈의 경로를 지정한다. 이는 프로젝트의 경로에 대한 설정이다.

```javascript
plugins: [
    [
      'module-resolver',
      {
        root: ['./src/'],
        alias: {
          components: './src/components',
        },
      },
    ],
  ],
```

### jsconfig.json - VSCode

babel을 통해 설정된 경로는 프로젝트 내부에서는 인지를 하고 있지만, 사용자 개발 툴에서는 인지를 못한다.  
툴에 맞는 설정을 추가해야 한다. jsconfig.json은 프로젝트 최상단에 위치한다.

```json
{  
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "*": ["src/*"],
      "components/*": ["src/components/*"],
    },
  },
}
```

### eslintrc.js

이 프로젝트에 추가된 eslint의 설정파일에 아래 내용을 추가한다. eslint가 alias준것을 경로상의 에러로 판단하지 않게 해주는 역할을 한다.

```javascript
settings: {
  'import/resolver': {
    'babel-module': {},
  }
}
```

## Husky

commit, push등을 할때 사전 테스트를 수행할 수 있는 모듈 입니다.  
eslint, prettier등의 코드 룰, 포맷의 검사 및 Test용 스크립트도 수행이 가능합니다.

### 차후 내용 추가

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
