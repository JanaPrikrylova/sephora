const express = require('express');
const router = express.Router();
const { Reviews } = require('../models');

router.get('/:productId', async (req, res) => {
  const productId = req.params.productId;
  const listOfReviews = await Reviews.findAll({
    where: { productId: productId },
  });
  res.json(listOfReviews);
});

router.post('/', async (req, res) => {
  const review = req.body;
  await Reviews.create(review);
  res.json(review);
});

module.exports = router;
