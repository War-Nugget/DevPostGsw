jest.mock('../../src/api/squareClient'); // Path might need adjustment
const { processPayment } = require('../../src/services/paymentService.mjs');

describe('processPayment', () => {
  it('processes payment successfully', async () => {
    const nonce = 'test_nonce';
    const amount = 1000;
    const result = await processPayment(nonce, amount);

    expect(result).toHaveProperty('id');
    expect(result.status).toBe('success');
  });
});
