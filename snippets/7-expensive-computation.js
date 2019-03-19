const counterState = {
  value: 0,
  name: 'John',
};

$('.counter__increment').click(() => {
  counterState.value++;

  updateCounter(counterState);
});

$('.counter__name').change(() => {
  counterState.name = $(this).val();

  updateCounter(counterState);
});

function updateCounter(state) {
  updateCounterValue(state);
  updateCounterName(state);
}

function fibonacci(n) {
  if (n <= 1) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

function updateCounterValue(state) {
  console.log("Fibonacci's number for counter: ", fibonacci(state.value));
  $('.counter__value').text(state.value.toString());
}

function updateCounterName(state) {
  $('.counter__name').val(state.name);
}
