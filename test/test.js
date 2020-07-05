var assert = require('assert');
var co2Calculator = require('../co2-calculator.js');

describe('suite-1', () => {
    it('calculateCo2Emission test', () => {
      assert.equal( co2Calculator.calculateCo2Emission('large-petrol-car',1800.5,'km') , 507741 );
    });
  });