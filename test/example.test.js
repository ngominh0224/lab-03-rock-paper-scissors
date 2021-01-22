import { checkResults, getRandomThrow } from '../utils.js';

const test = QUnit.test;

// test scissors
test('it should return scissors if 3 is thrown', (expect) => {
    const expected = 'scissors';
    const actual = getRandomThrow(3);
    expect.equal(actual, expected);
});

// test paper
test('it should return paper if 2 is thrown', (expect) => {
    const expected = 'paper';
    const actual = getRandomThrow(2);
    expect.equal(actual, expected);
});

//test rock
test('it should return rock if 1 is thrown', (expect) => {
    const expected = 'rock';
    const actual = getRandomThrow(1);
    expect.equal(actual, expected);
});

//userDraw
test('it should return win if player throws rock and computer throws scissor', (expect) => {
    const expected = 'win';
    const actual = checkResults('rock', 'scissors');
    expect.equal(actual, expected);
});
