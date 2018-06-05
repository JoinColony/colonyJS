const createColony = require('../create_colony');
const createTask = require('../create_task');

describe('Starter project', () => {
  test('Example logs successful results', async () => {
    jest.spyOn(console, 'log');

    const colonyClient = await createColony();
    await createTask(colonyClient);

    const logs = console.log.mock.calls.map(args => args[0]);

    const expected = [
      expect.stringContaining('Token address'),
      expect.stringContaining('Colony ID'),
      expect.stringContaining('Colony address'),
      expect.stringContaining('Meta Colony address'),
      expect.stringContaining('Specification hash'),
      expect.objectContaining({
        cancelled: false
      }),
    ];

    expect(logs).toEqual(expect.arrayContaining(expected));
  }, 20000);
});
