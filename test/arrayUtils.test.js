import { expect } from 'chai';
import { findMax, findMin, removeDuplicates } from '../utils/arrayUtils.js';

describe('arrayUtils', () => {
  describe('findMax', () => {
    it('should find the maximum value in an array', () => {
      expect(findMax([1, 5, 3, 9, 2])).to.equal(9);
    });

    it('should handle negative numbers', () => {
      expect(findMax([-1, -5, -3])).to.equal(-1);
    });

    it('should throw error if input is not an array', () => {
      expect(() => findMax('not an array')).to.throw('Input must be an array');
      expect(() => findMax(123)).to.throw('Input must be an array');
    });
  });

  describe('findMin', () => {
    it('should find the minimum value in an array', () => {
      expect(findMin([1, 5, 3, 9, 2])).to.equal(1);
    });

    it('should handle negative numbers', () => {
      expect(findMin([-1, -5, -3])).to.equal(-5);
    });

    it('should throw error if input is not an array', () => {
      expect(() => findMin(null)).to.throw('Input must be an array');
    });
  });

  describe('removeDuplicates', () => {
    it('should remove duplicate values from an array', () => {
      expect(removeDuplicates([1, 2, 2, 3, 3, 3])).to.deep.equal([1, 2, 3]);
    });

    it('should not modify arrays without duplicates', () => {
      expect(removeDuplicates([1, 2, 3])).to.deep.equal([1, 2, 3]);
    });

    it('should handle empty arrays', () => {
      expect(removeDuplicates([])).to.deep.equal([]);
    });

    it('should throw error if input is not an array', () => {
      expect(() => removeDuplicates(undefined)).to.throw('Input must be an array');
    });
  });
});