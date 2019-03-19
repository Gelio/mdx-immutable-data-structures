let counterValue = 0;
let counterName = 'John';

$('.counter__increment').click(() => {
  counterValue++;

  updateCounter();
});

$('.counter__name').change(() => {
  counterName = $(this).val();

  updateCounter();
});

function updateCounter() {
  $('.counter__value').text(counterValue.toString());
  $('.counter__name').val(counterName);
}
