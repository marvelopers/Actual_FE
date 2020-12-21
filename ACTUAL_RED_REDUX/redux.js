
// 전역 상태를 단방향을 통해 수정하는 것 트리거를 통해 수정 가능
export function createStore (reducer) {
  let state;
  const handler = [];

  function dispatch(action){
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

  return{
    doUpdate,
    getState,
    subscribe
  }
}

// reducer : updater
