const { mapObjectToGraph } = require('./utils');

describe('mapObjectToGraph', () => {
    it('should return mapped data for valid input', () => {
        const inputData = [10, 20, 30];
        const expectedOutput = {
            xAxis: ['Year 0', 'Year 1', 'Year 2'],
            yAxis: [10, 20, 30],
        };

        const result = mapObjectToGraph(inputData);

        expect(result).toEqual(expectedOutput);
    });

    it('should handle null input and log a message', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        
        const result = mapObjectToGraph(null);

        expect(result).toBeUndefined();
        expect(consoleSpy).toHaveBeenCalledWith('No data found!');
    });

    it('should handle undefined input and log a message', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        
        const result = mapObjectToGraph(undefined);

        expect(result).toBeUndefined();
        expect(consoleSpy).toHaveBeenCalledWith('No data found!');
    });

    it('should return empty axis arrays for empty input array', () => {
        const inputData = [];
        const expectedOutput = {
            xAxis: [],
            yAxis: [],
        };

        const result = mapObjectToGraph(inputData);

        expect(result).toEqual(expectedOutput);
    });
});
