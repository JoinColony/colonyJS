// An example action using the "addPayment" method
module.exports = async (colonyClient, recipient, token, amount, domainId) => {

  // Add a payment
  const paymentTransaction = await colonyClient.addPayment.send({
    recipient,
    token,
    amount,
    domainId,
  });

  // Set payment id
  const { paymentId } = paymentTransaction.eventData;

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
