Node.js 표준 라이브러리 path - https://nodejs.org/docs/latest-v12.x/api/path.html
웹팩 - Entry points - https://webpack.js.org/concepts/entry-points/
React - https://reactjs.org/docs/react-api.html
ReactDOM - https://reactjs.org/docs/react-dom.html
Introducing Hooks - https://reactjs.org/docs/hooks-intro.html
선언형 프로그래밍 - 위키백과 - https://en.wikipedia.org/wiki/Declarative_programming
soldonii 블로그 - https://soldonii.tistory.com/100
리액트 훅 - https://ko.reactjs.org/docs/hooks-intro.html

```
npm i react react-dom
```

리액트는 여러가지 컴포넌트를 조합해서 사용하는 것,

선언적인 프로그래밍

## React Hook

class 없이 React를 사용할 수 있다,

- useState : https://ko.reactjs.org/docs/hooks-state.html

  - state 변수를 선언할 수 있다.
  - state의 초기값을 설정한다. 객체일 필요는 없고, 숫자타입과 문자 타입을 가질 수 있다.
  - useState는 state변수, 변수를 갱신할 수 있는 함수를 한 쌍으로 반환한다.

  ```
  const [state, setState] = useState();
  <!-- class컴포넌트의 this.state.count와 this.setState와 유사 -->
  ```

  ## 선언형 프로그래밍

- 정확하게 어떤 명령 혹은 단계들이 실행될지 묘사하지 않고, 프로그램에서 원하는 목표만 기술합니다.
- 목표만 달성할 뿐 어떻게 목표를 달성했는지 기술하지 않는 것입니다.
- ex. 데이터베이스 Query language(SQL), Regular expression, 설정 파일, 함수형 프로그래밍

컴퓨터 프로그램을 구별된 부분으로 분리시키는 디자인 원칙으로, 각 부분은 개개의 관심사를 해결합니다.
관심사를 분리하면 고드르 이해하고 보수하는 것이 더욱 쉬워집니다.
리액트는 컴포넌트 별로 관심사를 분리하여 재사용성과 확장성을 높여서 개발을 쉽게 만들어 줍니다.
