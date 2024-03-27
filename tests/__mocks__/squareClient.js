// __mocks__/squareClient.js

// A mock function to simulate processing a payment
const createPayment = jest.fn((paymentRequest) => {
    // Simulate a successful payment response
    return Promise.resolve({
        payment: {
            id: "mockPaymentId123",
            status: "COMPLETED",
            amountMoney: paymentRequest.amountMoney,
            // Add more properties as needed to mimic a real Square payment response
        }
    });
});

// Export the mock functions
module.exports = {
    paymentsApi: {
        createPayment,
    },
    // Mock other methods or properties of squareClient as needed
};
