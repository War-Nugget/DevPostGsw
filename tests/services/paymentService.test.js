// paymentService.test.js
const paymentService = require('./paymentService');
const { paymentsApi } = require('../api/squareClient');

jest.mock('../api/squareClient'); 

describe('processPayment', () => {
  it('calls Square API with correct parameters', async () => {
    // Setup
    const nonce = 'fake_nonce';
    const amount = 1000;
    paymentsApi.createPayment.mockResolvedValue({ /* mock response */ });

    // Act
    await paymentService.processPayment(nonce, amount);

    // Assert
    expect(paymentsApi.createPayment).toHaveBeenCalledWith({
      sourceId: nonce,
      amountMoney: { amount: amount, currency: "USD" },
      idempotencyKey: expect.any(String),
    });
    expect(result).toHaveProperty('id', 'mockPaymentId123');
    expect(result).toHaveProperty('status', 'COMPLETED');
  });
});
