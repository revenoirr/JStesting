// File: test/usersListUtils.test.js
import { expect } from 'chai';
import { 
  filterUsersByAge, 
  sortUsersByName, 
  findUserById, 
  isEmailTaken 
} from '../utils/usersListUtils.js';

describe('usersListUtils', () => {
  const users = [
    { id: 1, name: 'John', age: 25, email: 'john@example.com' },
    { id: 2, name: 'Alice', age: 30, email: 'alice@example.com' },
    { id: 3, name: 'Bob', age: 20, email: 'bob@example.com' },
    { id: 4, name: 'David', age: 35, email: 'david@example.com' }
  ];

  describe('filterUsersByAge', () => {
    it('should filter users by age range', () => {
      const filtered = filterUsersByAge(users, 25, 32);
      expect(filtered).to.have.length(2);
      expect(filtered[0].name).to.equal('John');
      expect(filtered[1].name).to.equal('Alice');
    });

    it('should return empty array if no users match the age criteria', () => {
      const filtered = filterUsersByAge(users, 40, 50);
      expect(filtered).to.be.an('array').that.is.empty;
    });

    it('should throw error if users is not an array', () => {
      expect(() => filterUsersByAge(null, 20, 30)).to.throw('Users must be an array');
      expect(() => filterUsersByAge({}, 20, 30)).to.throw('Users must be an array');
    });
  });

  describe('sortUsersByName', () => {
    it('should sort users by name alphabetically', () => {
      const sorted = sortUsersByName(users);
      expect(sorted[0].name).to.equal('Alice');
      expect(sorted[1].name).to.equal('Bob');
      expect(sorted[2].name).to.equal('David');
      expect(sorted[3].name).to.equal('John');
    });

    it('should return new array and not modify original', () => {
      const original = [...users];
      sortUsersByName(users);
      expect(users[0].name).to.equal(original[0].name);
    });

    it('should throw error if users is not an array', () => {
      expect(() => sortUsersByName(null)).to.throw('Users must be an array');
    });
  });

  describe('findUserById', () => {
    it('should find user by id', () => {
      const user = findUserById(users, 2);
      expect(user).to.not.be.null;
      expect(user.name).to.equal('Alice');
    });

    it('should return null if user not found', () => {
      const user = findUserById(users, 99);
      expect(user).to.be.null;
    });

    it('should throw error if users is not an array', () => {
      expect(() => findUserById('not an array', 1)).to.throw('Users must be an array');
    });
  });

  describe('isEmailTaken', () => {
    it('should return true if email is taken', () => {
      expect(isEmailTaken(users, 'bob@example.com')).to.be.true;
    });

    it('should return false if email is not taken', () => {
      expect(isEmailTaken(users, 'unknown@example.com')).to.be.false;
    });

    it('should throw error if users is not an array', () => {
      expect(() => isEmailTaken(undefined, 'test@example.com')).to.throw('Users must be an array');
    });
  });
});