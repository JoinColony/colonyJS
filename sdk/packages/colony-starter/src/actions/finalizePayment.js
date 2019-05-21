// An example action using the "finalizePayment" method
module.exports = async (colonyClient, paymentId) => {

  // Finalize a payment
  await colonyClient.finalizePayment.send({
    paymentId,
  });

  // Get a payment
  const payment = await colonyClient.getPayment.call({
    paymentId,
  });

  // Check out the logs to see the payment
  console.log('Payment:', {
    id: paymentId,
    ...payment,
  });

  // Return payment
  return {
    id: paymentId,
    ...payment,
  };

};
