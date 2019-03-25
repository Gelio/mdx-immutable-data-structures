const state = {
  counter: 0,
  name: 'Alice',
};

const updatedState1 = {
  ...state,
  counter: 1,
};

updatedState1.counter; // 1

const updatedState2 = {
  counter: 1,
  ...state,
};

updatedState2.counter; // 0
