# Jest

React Test code
설치

```
npm i -D jest babel-jest
npm i -D @types/jest
```

```
npx jest
npx jest --watchAll
```

- Signature = name(add), Parameters(x,y), return(result)

## TDD Cycle

- RED - GREEN - REACTORING

## TDD 실행

```
npm i -D @testing-library/react @testing-library/jest-dom
```

Assertion
단정문이라고 부르는 Assertion은 우리가 기대하는 값이 실제 값이랑 일치하는지 확인하는데 사용합니다. 자바스크립트의 console.assert는 우리가 기대하는 값이 아니면 콘솔에 출력되도록하여 프로그래머가 원하는 값이 아닌 경우 즉각적으로 알 수 있도록 도와줍니다. 테스트에도 단정문을 사용하여 우리가 원하는 값이 맞는지 계속해서 피드백을 얻을 수 있습니다.

npm i -D @testing-library/react @testing-library/jest-dom

fireEvent
테스팅에서 DOM 이벤트를 편리하게 발생시켜주는 메서드입니다. click, change 등의 이벤트를 발생시킬 수 있죠.

Mocking
mocking은 일부 기능을 테스트할 때 의존 관계를 끊고 독립적으로 테스트할 수 있게 합니다. jest.fn()을 통해서 함수를 mocking 할 수도 있죠. Jest에서 제공하는 다양한 mocking 방법이 있으니 공식 문서를 보고 학습할 필요가 있습니다

- https://ko.reactjs.org/docs/testing.html
- https://jestjs.io/
- https://testing-library.com/docs/react-testing-library/intro
- https://developer.mozilla.org/en-US/docs/Web/API/console/assert
- http://www.kyobobook.co.kr/product/detailViewKor.laf?barcode=9791195444953
- http://www.kyobobook.co.kr/product/detailViewKor.laf?barcode=9788966261024
- https://www.jamesshore.com/v2/books/aoad1/test_driven_development
