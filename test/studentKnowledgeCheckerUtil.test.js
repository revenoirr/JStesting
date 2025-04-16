import { expect } from 'chai';
import { checkStudentKnowledge } from '../utils/studentKnowledgeCheckerUtil.js';

describe('studentKnowledgeCheckerUtil', () => {
  describe('checkStudentKnowledge', () => {
    it('should return true when all answers are correct', () => {
      const studentAnswers = { q1: 'a', q2: 'b', q3: 'c' };
      const correctAnswers = { q1: 'a', q2: 'b', q3: 'c' };
      expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.true;
    });

    it('should return false when an answer is incorrect', () => {
      const studentAnswers = { q1: 'a', q2: 'b', q3: 'c' };
      const correctAnswers = { q1: 'a', q2: 'b', q3: 'd' };
      expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.false;
    });

    it('should return false when question keys are different', () => {
      const studentAnswers = { q1: 'a', q2: 'b', q3: 'c' };
      const correctAnswers = { q1: 'a', q4: 'b', q3: 'c' };
      expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.false;
    });

    it('should return false when number of questions differs', () => {
      const studentAnswers = { q1: 'a', q2: 'b' };
      const correctAnswers = { q1: 'a', q2: 'b', q3: 'c' };
      expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.false;
    });
  });
});