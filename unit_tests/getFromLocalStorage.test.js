const { getFromLocalStorage } = require('./utils');

// Mock the localStorage
const mockLocalStorage = {
    getItem: jest.fn(),
};
global.localStorage = mockLocalStorage;

describe('getFromLocalStorage', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should return an empty array if no data is found in local storage', () => {
        mockLocalStorage.getItem.mockReturnValueOnce(null);

        const result = getFromLocalStorage('someKey');

        expect(result).toEqual([]);
        expect(mockLocalStorage.getItem).toHaveBeenCalledWith('someKey');
    });

    it('should return parsed data from local storage', () => {
        const testData = [1, 2, 3];
        mockLocalStorage.getItem.mockReturnValueOnce(JSON.stringify(testData));

        const result = getFromLocalStorage('someKey');

        expect(result).toEqual(testData);
        expect(mockLocalStorage.getItem).toHaveBeenCalledWith('someKey');
    });

    it('should handle JSON parsing errors and return an empty array', () => {
        mockLocalStorage.getItem.mockReturnValueOnce('invalidJSON');

        const result = getFromLocalStorage('someKey');

        expect(result).toEqual([]);
        expect(mockLocalStorage.getItem).toHaveBeenCalledWith('someKey');
    });
});