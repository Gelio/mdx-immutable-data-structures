import { List } from 'immutable';

const initialState = List([1, 2, 3, 4, 5]);

const updatedState = initialState.push(6);

console.log(updatedState.first());
console.log(updatedState.get(0));

const oddNumbers = updatedState.filter((x) => x % 2 == 1);
const doubled = updatedState.map((x) => x * 2);
const sum = updatedState.reduce((sum, x) => sum + x, 0);
console.log(oddNumbers.toJS()); // [1, 3, 5]
