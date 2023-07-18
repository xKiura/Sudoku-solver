// const { join } = require('path');

const puzzleBoard = document.querySelector('#puzzle');
const solveButton = document.querySelector('#solve-button');
const squares = 81;

for (let i = 0; i < squares; i++) {
  const inputElement = document.createElement('input');
  inputElement.setAttribute('type', 'number');
  inputElement.setAttribute('min', 1);
  inputElement.setAttribute('max', 9);
  puzzleBoard.appendChild(inputElement);
}

const joinValues = () => {
  const inputs = document.querySelectorAll('input');
  inputs.forEach((input) => {
    if (input.value) {
      submission.push(input.value);
    } else {
      submission.push('.');
    }
  });
};

const solve = () => {
  joinValues();
  const data = submissions.join('');
  const options = {
    method: 'POST',
    url: 'https://solve-sudoku.p.rapidapi.com/',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': 'e71b7f7da8mshc86304e001dcb54p11aa82jsna31699b00074',
      'X-RapidAPI-Host': 'solve-sudoku.p.rapidapi.com',
    },
    data: '{"puzzle":"2.............62....1....7...6..8...3...9...7...6..4...4....8....52.............3"}',
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

solveButton.addEventListener('click', solve);
