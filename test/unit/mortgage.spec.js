const expect = require('chai').expect;
const Mortgage = require('../../src/js/lib/Mortgage');

describe('Mortgage Calculator', () => {
  let mortgage = null;

  beforeEach(() => {
    mortgage = new Mortgage(300000, 3.5, 30, 12);
  })

  it('should have a monthlyPayment function', () => {
    expect(mortgage.monthlyPayment).to.exist;
  });

  it('monthlyPayment() should not return NaN', () => {
    var result = mortgage.monthlyPayment();
    expect(result).to.not.be.NaN;
  });

  it('monthlyPayment() should not be negative', () => {
    var result = mortgage.monthlyPayment();
    expect(result >= 0).to.be.true;
  });
  
  it('monthlyPayment() should correctly calculate monthly payment', () => {
    var result = mortgage.monthlyPayment();
    expect(result.toFixed(2)).to.equal('1347.13');
  });
});
