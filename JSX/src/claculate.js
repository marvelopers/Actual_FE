// 사칙연산계산기를 만들어봅시다


const initialState = {
  accumulator: 0,
  number: 0,
  operator: ''
}

const operatorFunction = {
  '': (x, y) => y, //기본 값
  '=': (x, y) => x,
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  'X': (x, y) => x * y,
  '/': (x, y) => x / y,

}

function claculate(accumulator, number, operator) {
  return operatorFunction[operator](accumulator + number)
}

function render({ accumulator, number, operator }) {

  function handleClickNumber(value) {
    render({
      number: value * 10 + value,
      operator
    });
  }

  function handleClickReset(value) {
    render(initialState);
  }

  function handleClickOperator(value) {
    render({
      accumulator: claculate(operator, accumulator, number),
      number: 0,
      operator: value
    });
  }


  const element = (
    <div>
      <p>{accumulator}</p>
      <p>{number || accumulator}</p>
      {/* <p>{operator}</p> */}
      <p>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((i) => {
          <button type='button' onClick={() => { handleClickNumber(i) }}>{i}</button>
        })}

      </p>
      <p>
        {['+', '-', 'X', '/', '='].map((i) => (
          <button type='button' onClick={() => { handleClickOperator('i') }}>{i}</button>
        ))}

        {/* map 미사용 시 
        <button type='button' onClick={() => { handleClickOperator('+') }}>+</button>
        <button type='button' onClick={() => { handleClickOperator('-') }}>+</button>
        <button type='button' onClick={() => { handleClickOperator('X') }}>X</button>
        <button type='button' onClick={() => { handleClickOperator('/') }}>/</button>
        <button type='button' onClick={() => { handleClickOperator('=') }}>=</button> */}
      </p>

      <p>
        <button type='button' onClick={() => { handleClickReset() }}>RESET</button>
      </p>
    </div>
  );

  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}

render(initialState);