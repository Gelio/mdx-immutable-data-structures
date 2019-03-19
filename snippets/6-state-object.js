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

function updateCounterValue(state) {
  $('.counter__value').text(state.value.toString());
}

function updateCounterName(state) {
  $('.counter__name').val(state.name);
}
