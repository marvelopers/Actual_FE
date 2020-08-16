// let보다 const를 사용하는 것이 좋다!

function render({ count }) {

  function handleClick() {
    render({ count: count + 1 });
  }

  function handleClickNumber(value) {
    render({ count: value });
  }

  const element = (
    <div id="hello" className="greeting">
      <p>Hello, world!</p>
      <p>
        <button type="button" onClick={() => handleClick()}>
          Click me!
          ({count})
        </button>
      </p>
      {[1, 2, 3].map((i) => {
        <button type='button' onClick={() => { handleClickNumber(i) }}>{i}</button>
      })}
    </div>
  );

  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}

render({
  count: 0
});