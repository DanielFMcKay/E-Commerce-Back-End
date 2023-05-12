const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint


// find all categories
// be sure to include its associated Products ✓
router.get('/', async (req, res) => {
  await Category.findAll({
    // FLAG: THIS MAY BE TRIPPING US UP
    include: [{
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
    }],
  }).then((categoryData) => res.json(categoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


// find one category by its `id` value ✓
// be sure to include its associated Products ✓
router.get('/:id', async (req, res) => {
  await Category.findByPk(req.params.id, {
    include: [{
      model: Product,
      attributes: ["id", "product_name", "price", "stock", "category_id"],
    }],
  }).then((foundCategoryData) => {
    if (!foundCategoryData) {
      res.status(404).json({ message: "404 Category Data Not Found. But you know what CAN be found? Fantastic deals for Mother's Day!! You DO love your mother right?" });
      return;
    }
    res.json(foundCategoryData)
  })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});



// create a new category ✓
router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name,
  })
    .then((newCategoryData) => res.json(newCategoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
  console.log("Creating New Category");

});


// update a category by its `id` value ✓
router.put('/:id', async (req, res) => {
  await Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  }).then((updatedCategoryData) => {
    if (!updatedCategoryData[0]) {
      res.status(404).json({ message: "404 Category Data Not Found. But you know what CAN be found? Fantastic deals for Mother's Day!! You DO love your mother right?" });
      return;
    }
    res.json(updatedCategoryData);
  }
  ).catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });

});


// delete a category by its `id` value ✓
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  }).then((deletedCategoryData) => {
    if (!deletedCategoryData) {
      res.status(404).json({ message: "404 Category Data Not Found. But you know what CAN be found? Fantastic deals for Mother's Day!! You DO love your mother right?" });
      return;
    }
    res.json(deletedCategoryData);

  }).catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});


module.exports = router;
