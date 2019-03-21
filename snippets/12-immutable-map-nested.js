import { Map, fromJS } from 'immutable';

const initialState = Map({
  user: {
    name: 'John',
    age: 15,
    friends: [
      {
        name: 'Kate',
        age: 14,
      },
      {
        name: 'Bob',
        age: 16,
      },
    ],
  },
  counter: {
    value: 5,
  },
});

const counter = initialState.get('counter'); // JS object
console.log(counter.value); // 5
counter.value = 10;
console.log(counter.value); // 10

// ?????

const properInitialState = fromJS({
  user: {
    name: 'John',
    age: 15,
    friends: [
      {
        name: 'Kate',
        age: 14,
      },
      {
        name: 'Bob',
        age: 16,
      },
    ],
  },
  counter: {
    value: 5,
  },
});

const counter = properInitialState.get('counter');
console.log(counter.get('value'));

const counterValue = properInitialState.getIn(['counter', 'value']);

const updatedState = properInitialState.setIn(
  ['counter', 'value'],
  counterValue + 1,
);
const updatedState2 = properInitialState.updateIn(
  ['counter', 'value'],
  (value) => value + 1,
);
