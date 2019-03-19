$('.counter__increment').click(() => {
  previousState = counterState;
  counterState = {
    ...counterState,
    value: counterState.value + 1,
  };

  updateCounter(counterState, previousState);
});
