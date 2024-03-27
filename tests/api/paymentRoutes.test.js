// paymentRoutes.test.js
const request = require('supertest');
const app = require('../../server'); // Import your Express app

describe('POST /process-payment', () => {
  it('successfully processes payment', async () => {
    const response = await request(app)
      .post('/api/payments/process-payment')
      .send({ nonce: 'fake_nonce', amount: 1000 });

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('payment');
  });
});
