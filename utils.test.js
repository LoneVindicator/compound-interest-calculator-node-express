const { calculateCompoundInterest } = require('./utils');

// Compound Interest Tests

test( `P = 1000, r = 10, n = 1, t = 5`, () => {
    expect(calculateCompoundInterest(1000, 10, 1, 5)).toStrictEqual(["1100.00","1210.00","1331.00","1464.10","1610.51"]);
});

test( `P = 10000, r = 16, n = 4, t = 7`, () => {
    expect(calculateCompoundInterest(10000, 16, 4, 7)).toStrictEqual(["11698.59", "13685.69", "16010.32", "18729.81", "21911.23", "25633.04", "29987.03"]);
});

test( `P = 100, r = 82, n = 52, t = 7`, () => {
    expect(calculateCompoundInterest(100, 82, 52, 7)).toStrictEqual(["225.60", "508.96", "1148.23", "2590.43", "5844.05", "13184.29", "29744.00"]);
});

test( `P = 199, r = 15, n = 2, t = 3`, () => {
    expect(calculateCompoundInterest(199, 15, 2, 3)).toStrictEqual(["229.97", "265.76", "307.12"]);
});
