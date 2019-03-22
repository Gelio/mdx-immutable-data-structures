let counterState = {
  value: 0,
  name: 'John',
};
let previousState = counterState;

$('.counter__increment').click(() => {
  previousState = counterState;
  counterState = {
    ...counterState,
    value: counterState.value + 1,
  };

  updateCounter(counterState, previousState);
});

$('.counter__name').change(() => {
  previousState = counterState;
  counterState = {
    ...counterState,
    name: $(this).val(),
  };

  updateCounter(counterState, previousState);
});

function updateCounter(state, prevState) {
  updateCounterValue(state, prevState);
  updateCounterName(state, prevState);
}

function fibonacci(n) {
  if (n <= 1) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

function updateCounterValue(state, prevState) {
  if (state.value === prevState.value) {
    return;
  }

  console.log("Fibonacci's number for counter: ", fibonacci(state.value));
  $('.counter__value').text(state.value.toString());
}

function updateCounterName(state) {
  if (state.name === prevState.name) {
    return;
  }

  $('.counter__name').val(state.name);
}
