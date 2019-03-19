$('.counter__increment').click(() => {
  const counterValueContainer = $('.counter__value');
  const value = +counterValueContainer.text();

  const newValue = value + 1;
  counterValueContainer.text(newValue.toString());
});
