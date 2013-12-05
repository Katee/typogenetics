var _ = require('underscore');
var tertiary = require('./tertiary');

describe('Tertiary structure', function () {
  it('', function () {
    var enzyme = ["TA", "GA", "TC", "CA", "GT", "CC", "AC", "AT", "CG", "A"];
    var direction = tertiary(enzyme);
    expect(direction).toEqual("C");
  });

  it('', function () {
    var enzyme = ["AG", "CG", "TA", "TA"];
    var direction = tertiary(enzyme);
    expect(direction).toEqual("T");
  });
});
