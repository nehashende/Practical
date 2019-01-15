import { createStore } from 'redux'
import todos from './reducers'


const store = createStore(todos,['Use Redux']);
console.log(action)
store.subscribe(""+store.getState())
store.dispatch({
  type: 'ADD_TODO',
  text: 'Understand the middleware'
})
// (These lines will be logged by the middleware:)
// will dispatch: { type: 'ADD_TODO', text: 'Understand the middleware' }
// state after dispatch: [ 'Use Redux', 'Understand the middleware' ]