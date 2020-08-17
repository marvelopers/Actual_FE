# Redux

Flux Archtecture

- Redux를 사용하면 좋은 점!
  - state와 view의 역할을 분리한다.
  - APP은 View만 관리하고 state는 store를 연결하는 역할만 수행한다.
  - APP은 상태관리 로직이 어떻게 구현되고 변화하는지 알지 못하며, 상태 관리 로직이 변경되어도 view에 영향을 주지 않는다.

## Redux 설치

```
npm i redux react-redux
```

## redux 3가지 원칙

- 전체 상태값을 하나의 객체에 저장한다.
- 상태값은 불변 객체다.
- 상태값은 순수 함수에 의해서만 변경될 수 있다.

#### Action

#### Reducer

상태를 다른 상태로 바꿔 주는 것
Redux action

- type(string)
- payload => object => {taskTitle}

#### Store

#### Provider

### React-redux hook
