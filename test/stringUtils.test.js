import { expect } from 'chai';
import { capitalize, reverseString, isPalindrome } from '../utils/stringUtils.js';

describe('stringUtils', () => {
  describe('capitalize', () => {
    it('should capitalize the first letter of a string', () => {
      expect(capitalize('hello')).to.equal('Hello');
    });

    it('should not change already capitalized strings', () => {
      expect(capitalize('Hello')).to.equal('Hello');
    });

    it('should handle empty strings', () => {
      expect(capitalize('')).to.equal('');
    });

    it('should throw error if input is not a string', () => {
      expect(() => capitalize(123)).to.throw('Input must be a string');
      expect(() => capitalize(null)).to.throw('Input must be a string');
    });
  });

  describe('reverseString', () => {
    it('should reverse a string', () => {
      expect(reverseString('hello')).to.equal('olleh');
    });

    it('should handle empty strings', () => {
      expect(reverseString('')).to.equal('');
    });

    it('should throw error if input is not a string', () => {
      expect(() => reverseString([])).to.throw('Input must be a string');
    });
  });

  describe('isPalindrome', () => {
    it('should return true for palindromes', () => {
      expect(isPalindrome('radar')).to.be.true;
      expect(isPalindrome('level')).to.be.true;
    });

    it('should return false for non-palindromes', () => {
      expect(isPalindrome('hello')).to.be.false;
    });

    it('should handle empty strings', () => {
      expect(isPalindrome('')).to.be.true;
    });

    it('should throw error if input is not a string', () => {
      expect(() => isPalindrome({})).to.throw('Input must be a string');
    });
  });
});