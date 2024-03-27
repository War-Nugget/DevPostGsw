const { paymentsApi } = require('../api/squareClient');

async function processPayment(nonce, amount) {
    try {
        const { result } = await paymentsApi.createPayment({
            sourceId: nonce,
            amountMoney: {
                amount: amount,
                currency: 'USD'
            },
            idemopotencyKey: crypto.randomUUID(),
        });
        return result.payment;
    } catch (error) {
        console.error("Failed to process payment:", error);
        throw new Error("Failed to process payment");
    }
}