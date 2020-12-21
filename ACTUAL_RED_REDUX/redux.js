
// 전역 상태를 단방향을 통해 수정하는 것 트리거를 통해 수정 가능
export function createStore (reducer, middleware=[]) {
  let state;
  const handler = [];

  function dispatch(action){
    middleware(dispatch, action);
    state = reducer(state, action);
    handler.forEach((listener)=>{
      listener();
    })
  }

  function getState (){
    return state;
  }

  function subscribe(listener){
    handler.push(listener)
  }

  const store = {
    getState,
    subscribe
  }
  middleware = Array.from(middleware).reverse() //순서 역전
  let lastDispatch = dispatch;

  middleware.forEach(m => {
    lastDispatch = m(store)(lastDispatch)
  })
  return{
    ...store,
    dispatch : lastDispatch,
  }
}

// reducer : updater
