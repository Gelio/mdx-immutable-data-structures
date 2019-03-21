import { Map } from 'immutable';

const initialState = Map({
  name: 'John',
  counterValue: 5,
});

initialState.set('counterValue', 6);

console.log(initialState.get('counterValue')); // ?
// Still 5

const updatedState = initialState.set('counterValue', 6);

console.log(initialState.get('counterValue')); // 5
console.log(updatedState.get('counterValue')); // 6
console.log(initialState === updatedState); // false
