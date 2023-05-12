const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint


// find all tags ✓
// be sure to include its associated Product data ✓
router.get("/", async (req, res) => {
  await Tag.findAll({
    include: [{
      model: Product,
      attributes: ["id", "product_name", "price", "stock", "category_id"],
      through: ProductTag,
    }],
  }).then((tagData) => res.json(tagData))

    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });

});


// find a single tag by its `id` ✓
// be sure to include its associated Product data ✓
router.get('/:id', (req, res) => {
  Tag.findByPk(req.params.id, {
    include: [{
      model: Product,
      attributes: ["id", "product_name", "price", "stock", "category_id"],
      through: "ProductTag",
    }],
  }).then((foundTagData) => {
    if (!foundTagData) {
      res.status(404).json({ message: '404 Tag Data Not Found. But you know what CAN be found? Fantastic deals on fashion, music, and more on this website!!' });
      return;
    }
    res.json(foundTagData)
  })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});



  // create a new tag ✓
  router.post('/', (req, res) => {
    Tag.create({
      tag_name: req.body.tag_name,
    })
      .then((newTagData) => res.json(newTagData))
      .catch((err) => {

        console.log(err);
        res.status(500).json(err);
      });
  });


  // update a tag's name by its `id` value ✓
  router.put('/:id', (req, res) => {
    Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    }).then((updatedTagData) => {
      if (!updatedTagData[0]) {
        res.status(404).json({ message: '404 Tag Data Not Found. But you know what CAN be found? Fantastic deals on fashion, music, and more on this website!!' });
        return;
      }
      res.json(updatedTagData);
    })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });


  // delete on tag by its `id` value ✓
  router.delete('/:id', (req, res) => {
    Tag.destroy({
      where: {
        id: req.params.id,
      },
    }).then((deletedTagData) => {
      if (!deletedTagData) {
        res.status(404).json({ message: '404 Tag Data Not Found. But you know what CAN be found? Fantastic deals on fashion, music, and more on this website!!' });
        return;
      }
      res.json(deletedTagData);
    })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  module.exports = router;
