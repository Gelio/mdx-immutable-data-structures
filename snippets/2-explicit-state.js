let counterValue = 0;

$('.counter__increment').click(() => {
  counterValue++;

  $('.counter__value').text(counterValue.toString());
});
