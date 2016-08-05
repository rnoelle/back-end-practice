var app = require('./index');
var db = app.get('db');

module.exports = {
  create: function (req, res, next) {
    db.create_product(req.body.name, req.body.price, req.body.description, 'http://thecottagerules.com/wp-content/uploads/2016/03/outhouse-red.jpg',
      function (err, resp) {
        console.log(err);
        res.send(resp);
    })
  },
  getOne: function (req, res, next) {
    db.read_product(req.params.id,
      function (err, product) {
      res.send(product);
    })
  },
  getAll: function (req, res, next) {
    db.read_products(function (err, products) {
        res.json(products);
    })
  },
  update: function (req, res, next) {
    db.update_product([req.body.id, req.body.description],
      function (err, resp) {
        res.send(resp);
    })
  },
  delete: function (req, res, next) {
    db.delete_product(parseInt(req.params.id), function (err, resp) {
      console.log(req.params.id);
      console.log(resp);
      res.send(resp);
    })
  }
}
