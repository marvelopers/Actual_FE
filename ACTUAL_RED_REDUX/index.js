import {createStore} from './redux.js';

console.log('redux');
console.log(createStore);

const COUNTER = 'count'; // action type

function reducer(state, action){
  if(action.type === COUNTER){
    return {...state, counter: action.payload.counter};
  }
  return state;
}

function listener(){
  console.log(store.getState());
}

function actionCreator(type, payload){
  return {
    type, 
    payload,
  }
}

const store = createStore(reducer);

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