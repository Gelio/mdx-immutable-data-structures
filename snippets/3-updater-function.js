let counterValue = 0;

$('.counter__increment').click(() => {
  counterValue++;

  updateCounter();
});

function updateCounter() {
  $('.counter__value').text(counterValue.toString());
}
