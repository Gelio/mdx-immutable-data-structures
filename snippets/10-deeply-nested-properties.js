const initialState = {
  a: {
    b: {
      c: 42,
      d: 'do not update me',
    },
    e: 'do not update me',
  },
  f: 'do not update me',
};

const updatedState = {
  ...initialState,
  a: {
    ...initialState.a,
    b: {
      ...initialState.a.b,
      c: 43,
    },
  },
};
