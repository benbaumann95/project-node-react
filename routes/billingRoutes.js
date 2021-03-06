const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    // if (!req.user) {
    //   return res
    //     .status(401)
    //     .send({ error: 'You must log in before adding credits' });
    // }
    const charge = await stripe.charges.create({
      amount: 1000,
      currency: 'usd',
      description: '$1 per credit',
      source: req.body.id
    });

    req.user.credits += 10;
    const user = await req.user.save();

    res.send(user);
  });
};
