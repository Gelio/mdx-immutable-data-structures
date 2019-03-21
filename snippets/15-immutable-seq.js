import { Seq } from 'immutable';

const array = [];
for (let i = 0; i < 100000; i++) {
  array.push(i);
}

const initialState = Seq(array);

const doubled = initialState.map((x) => {
  console.log('Doubling', x);

  return x * 2;
});

// No logs occurred

const divisibleBy3 = doubled.filter((x) => {
  console.log('Testing if', x, 'is divisible by 3');

  return x % 3 === 0;
});

// No logs occurred

const result = divisibleBy3.find((x) => x % 5 === 0);
