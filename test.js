const {
  describe,
  it,
  expect,
  matchers 
} = require('./testHelper.js')

const {
  add,
  sub,
  multi,
  div 
} = require('./index.js');

describe('describe', () => {
  it('test Add Functionality', () => {
    const actual = add(1,2);
    expect(actual).toBe(3);
  }) 
});

describe('describe', () => {
  it('test Subtract Functionality', () => {
    const actual = sub(4,2);
    expect(actual).toBe(2);
  }) ;
  it('test Subtract Functionality when 1st param lesser than 2nd', () => {
    const actual = sub(2,4);
    expect(actual).toBe(-2);
  })
});

describe('describe', () => {
  it('test multiplication Functionality', () => {
    const actual = multi(1,2);
    expect(actual).toBe(2);
  }) ;
  it('test multiplication Functionality when one of param is 0', () => {
    const actual = multi(0,2);
    expect(actual).toBe(0);
  }) ;
});

describe('describe', () => {
  it('test division Functionality', () => {
    const actual = sub(4,2);
    expect(actual).toBe(2);
  }); 
});