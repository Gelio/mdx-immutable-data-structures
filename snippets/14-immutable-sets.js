import { Set } from 'immutable';

const initialState = Set(['Alice', 'Bob']);

console.log(initialState.has('Celeste')); // false

const updatedState = initialState.add('Celeste');

console.log(updatedState.has('Celeste')); // true

initialState.isSubset(updatedState); // true
updatedState.isSuperset(initialState); // true
initialState.union(updatedState);
initialState.subtract(updatedState);
