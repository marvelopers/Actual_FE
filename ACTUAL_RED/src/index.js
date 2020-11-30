import {createElement,render} from './react.js'

function Title () {
  return (
    <h2>리액트 파헤치기</h2>
  )
}

render(<Title/>, document.querySelector('#root'))