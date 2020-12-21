import {createStore} from './redux.js';

console.log('redux');
console.log(createStore);

const COUNTER = 'count'; // action type

// redux는 동기 처리를 기본으로 한다. 비동기를 처리하기 위해 middleware를 사용한다.
// function middleware(dispatch, action){
//   // if(action.type === '비동기 작업'){
//   //   fetch().then(()=>{
//   //     dispatch('응답');
//   //   })
//   // }

//   return function(action){

//   }
// } ==>

const middleware = (store)=> (dispatch) => (action) => {
  if(action.type === fetch) {
    setTimeout(()=>{
      dispatch({
        type: 'fetch-response',
        payload:[1,2,3]
      });
    },2000);
  }else{
  dispatch(action)
  }
}

const middleware1 = (store)=> (dispatch) => (action) => {
  dispatch(action)
}

const middleware2 = (store)=> (dispatch) => (action) => {
  dispatch(action)
}

// middleware(dispatch)(action) 요거 커링
const fn = middleware(dispatch);

function reducer(state, action){
  if(action.type === COUNTER){
    return {...state, counter: action.payload.counter};
  }

  if(action.type === 'fetch-response'){
    return { ...state, response: action.payload};
  }
  return state;
}

fn(action); //미들웨어의 두 번째 함수가 실행되는 시점

function listener(){
  console.log(store.getState());
}

function actionCreator(type, payload){
  return {
    type, 
    payload,
  }
}

const store = createStore(reducer, [middleware]);
// const store = createStore(reducer, [middleware1, middleware2]);

store.add(listener);


// action 3.
function counter (data){
  store.dispatch(actionCreator(COUNTER,data));
}
counter({counter:1});

//  1.
//  store.dispatch({
//   type:'count',
//   payload:{
//     counter: 1
//   }
// });

//  2.
// store.dispatch(actionCreator(COUNTER,{counter: 1}));



// dispatch : doUpdate
// action : data 

store.dispatch(actionCreator('fetch'));