import { expect } from 'chai';
import { add, subtract, multiply, divide } from '../utils/mathUtils.js';

describe('mathUtils', () => {
  describe('add', () => {
    it('should add two positive numbers', () => {
      expect(add(2, 3)).to.equal(5);
    });

    it('should handle negative numbers', () => {
      expect(add(-2, 3)).to.equal(1);
      expect(add(5, -8)).to.equal(-3);
      expect(add(-4, -6)).to.equal(-10);
    });

    it('should handle decimal numbers', () => {
      expect(add(1.5, 2.5)).to.equal(4);
    });
  });

  describe('subtract', () => {
    it('should subtract two numbers', () => {
      expect(subtract(5, 3)).to.equal(2);
    });

    it('should handle negative numbers', () => {
      expect(subtract(3, 5)).to.equal(-2);
      expect(subtract(-3, -5)).to.equal(2);
    });
  });

  describe('multiply', () => {
    it('should multiply two numbers', () => {
      expect(multiply(2, 3)).to.equal(6);
    });

    it('should handle negative numbers', () => {
      expect(multiply(-2, 3)).to.equal(-6);
      expect(multiply(-2, -3)).to.equal(6);
    });

    it('should handle zero', () => {
      expect(multiply(5, 0)).to.equal(0);
    });
  });

  describe('divide', () => {
    it('should divide two numbers', () => {
      expect(divide(6, 3)).to.equal(2);
    });

    it('should handle decimal results', () => {
      expect(divide(5, 2)).to.equal(2.5);
    });

    it('should throw error when dividing by zero', () => {
      expect(() => divide(5, 0)).to.throw('Cannot divide by zero');
    });
  });
});
