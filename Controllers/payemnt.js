const stripe = require('stripe')('sk_test_tR3PYbcVNZZ796tH88S4VQ2u');


module.exports.payment = async (req, res) => {

    console.log(req, "uuuu")
    const stripe = require('stripe')('sk_test_tR3PYbcVNZZ796tH88S4VQ2u');
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          price: '1',
          quantity: 1,
        },
      ],
      payment_intent_data: {
        application_fee_amount: 123,
        transfer_data: {
          destination: '{{CONNECTED_ACCOUNT_ID}}',
        },
      },
      success_url: 'https://example.com/success',
      cancel_url: 'https://example.com/cancel',
    });

res.status(200).json(result)
 

};
