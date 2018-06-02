const example = require('../example');

describe('Starter project', () => {
  test('Example logs successful results', async () => {
    jest.spyOn(console, 'log');

    await example();

    expect(console.log).toHaveBeenCalledTimes(4);
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining('Token address'),
    );
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining('Colony ID'),
    );
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining('Colony address'),
    );
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining('Meta Colony address'),
    );
  });
});
