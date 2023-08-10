// Import the function if needed
// const calculateCompoundInterest = require('./path-to-your-function');

const { calculateCompoundInterest } = require('./utils');

describe('calculateCompoundInterest', () => {
    it('should correctly calculate compound interest and return an array of total amounts paid per year', () => {
        const principalAmount = 1000;
        const annualInterestRate = 5; // 5%
        const compoundFrequency = 1; // Annually
        const investmentPeriod = 5; // 5 years

        const result = calculateCompoundInterest(principalAmount, annualInterestRate, compoundFrequency, investmentPeriod);

        // Expected results calculated using a compound interest calculator
        const expectedResults = [
            '1050.00', // Year 1
            '1102.50', // Year 2
            '1157.63', // Year 3
            '1215.51', // Year 4
            '1276.28'  // Year 5
        ];

        expect(result).toEqual(expectedResults);
    });

    it('should handle different compounding frequencies', () => {
        const principalAmount = 1500;
        const annualInterestRate = 4.5; // 4.5%
        const compoundFrequency = 2; // Semi-annually
        const investmentPeriod = 3; // 3 years

        const result = calculateCompoundInterest(principalAmount, annualInterestRate, compoundFrequency, investmentPeriod);

        // Expected results calculated using a compound interest calculator
        const expectedResults = [
            '1568.26', // Year 1
            '1639.62', // Year 2
            '1714.24'  // Year 3
        ];

        expect(result).toEqual(expectedResults);
    });

    it('should return an empty array if investmentPeriod is 0', () => {
        const principalAmount = 2000;
        const annualInterestRate = 6.25; // 6.25%
        const compoundFrequency = 4; // Quarterly
        const investmentPeriod = 0; // 0 years

        const result = calculateCompoundInterest(principalAmount, annualInterestRate, compoundFrequency, investmentPeriod);

        expect(result).toEqual([]);
    });
    
    it('should handle very high annualInterestRate values', () => {
        const principalAmount = 500;
        const annualInterestRate = 15; // 15%
        const compoundFrequency = 12; // Monthly
        const investmentPeriod = 2; // 2 years

        const result = calculateCompoundInterest(principalAmount, annualInterestRate, compoundFrequency, investmentPeriod);

        // Expected results calculated using a compound interest calculator
        const expectedResults = [
            '580.38', // Year 1
            '673.68'  // Year 2
        ];

        expect(result).toEqual(expectedResults);
    });
});
