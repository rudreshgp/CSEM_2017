const mongoose = require('mongoose');
const bluebird = require('bluebird');
const validator = require('validator');
const Product = require('./models/product');
const Shop = require('./models/shop');

mongoose.Promise = bluebird;

const mongoString = ''; // MongoDB Url

const createErrorResponse = (statusCode, message) => ({
  statusCode: statusCode || 501,
  headers: { 'Content-Type': 'text/plain' },
  body: message || 'Incorrect id',
});

//#region Products

module.exports.getAllProducts = (event, context, callback) => {
  const db = mongoose.connect(mongoString).connection;
  const id = event.pathParameters.id;

  if (!validator.isAlphanumeric(id)) {
    callback(null, createErrorResponse(400, 'Incorrect id'));
    db.close();
    return;
  }

  db.once('open', () => {
    Product
      .find({ _id: event.pathParameters.id })
      .then((product) => {
        callback(null, { statusCode: 200, body: JSON.stringify(product) });
      })
      .catch((err) => {
        callback(null, createErrorResponse(err.statusCode, err.message));
      })
      .finally(() => {
        // Close db connection or node event loop won't exit , and lambda will timeout
        db.close();
      });
  });
};


module.exports.createProduct = (event, context, callback) => {
  let db = {};
  let data = {};
  let errs = {};
  let product = {};
  const mongooseId = '_id';

  db = mongoose.connect(mongoString).connection;

  data = JSON.parse(event.body);

  product = new Product({ 
    name: data.name,
    shop_id : data.shop_id
  });

  errs = product.validateSync();

  if (errs) {
    console.log(errs);
    callback(null, createErrorResponse(400, 'Incorrect product data'));
    db.close();
    return;
  }


  db.once('open', () => {
    product
      .save()
      .then(() => {
        callback(null, { statusCode: 200, body: JSON.stringify({ id: product[mongooseId] }) });
      })
      .catch((err) => {
        callback(null, createErrorResponse(err.statusCode, err.message));
      })
      .finally(() => {
        db.close();
      });
  });
};

module.exports.deleteProduct = (event, context, callback) => {
  const db = mongoose.connect(mongoString).connection;
  const id = event.pathParameters.id;

  if (!validator.isAlphanumeric(id)) {
    callback(null, createErrorResponse(400, 'Incorrect id'));
    db.close();
    return;
  }

  db.once('open', () => {
    Product
      .remove({ _id: event.pathParameters.id })
      .then(() => {
        callback(null, { statusCode: 200, body: JSON.stringify('Ok') });
      })
      .catch((err) => {
        callback(null, createErrorResponse(err.statusCode, err.message));
      })
      .finally(() => {
        db.close();
      });
  });
};

module.exports.updateProduct = (event, context, callback) => {
  const db = mongoose.connect(mongoString).connection;
  const data = JSON.parse(event.body);
  const id = event.pathParameters.id;
  let errs = {};
  let product = {};

  if (!validator.isAlphanumeric(id)) {
    callback(null, createErrorResponse(400, 'Incorrect id'));
    db.close();
    return;
  }

  product = new Product({ _id: id,
    name: data.name });

  errs = product.validateSync();

  if (errs) {
    callback(null, createErrorResponse(400, 'Incorrect parameter'));
    db.close();
    return;
  }

  db.once('open', () => {
    Product.findByIdAndUpdate(id, product)
      .then(() => {
        callback(null, { statusCode: 200, body: JSON.stringify('Ok') });
      })
      .catch((err) => {
        callback(err, createErrorResponse(err.statusCode, err.message));
      })
      .finally(() => {
        db.close();
      });
  });
};

//#endregion



//#region Shops

module.exports.getAllShops = (event, context, callback) => {
  const db = mongoose.connect(mongoString).connection;
  const id = event.pathParameters.id;

  if (!validator.isAlphanumeric(id)) {
    callback(null, createErrorResponse(400, 'Incorrect id'));
    db.close();
    return;
  }

  db.once('open', () => {
    Shop
      .find({ _id: event.pathParameters.id })
      .then((shop) => {
        callback(null, { statusCode: 200, body: JSON.stringify(shop) });
      })
      .catch((err) => {
        callback(null, createErrorResponse(err.statusCode, err.message));
      })
      .finally(() => {
        // Close db connection or node event loop won't exit , and lambda will timeout
        db.close();
      });
  });
};


module.exports.createShop = (event, context, callback) => {
  let db = {};
  let data = {};
  let errs = {};
  let shop = {};
  const mongooseId = '_id';

  db = mongoose.connect(mongoString).connection;

  data = JSON.parse(event.body);

  shop = new Shop({ 
    name: data.name,
    owner_id : data.owner_id
  });

  errs = shop.validateSync();

  if (errs) {
    console.log(errs);
    callback(null, createErrorResponse(400, 'Incorrect shop data'));
    db.close();
    return;
  }


  db.once('open', () => {
    shop
      .save()
      .then(() => {
        callback(null, { statusCode: 200, body: JSON.stringify({ id: shop[mongooseId] }) });
      })
      .catch((err) => {
        callback(null, createErrorResponse(err.statusCode, err.message));
      })
      .finally(() => {
        db.close();
      });
  });
};

module.exports.deleteShop = (event, context, callback) => {
  const db = mongoose.connect(mongoString).connection;
  const id = event.pathParameters.id;

  if (!validator.isAlphanumeric(id)) {
    callback(null, createErrorResponse(400, 'Incorrect id'));
    db.close();
    return;
  }

  db.once('open', () => {
    Shop
      .remove({ _id: event.pathParameters.id })
      .then(() => {
        callback(null, { statusCode: 200, body: JSON.stringify('Ok') });
      })
      .catch((err) => {
        callback(null, createErrorResponse(err.statusCode, err.message));
      })
      .finally(() => {
        db.close();
      });
  });
};

module.exports.updateShop = (event, context, callback) => {
  const db = mongoose.connect(mongoString).connection;
  const data = JSON.parse(event.body);
  const id = event.pathParameters.id;
  let errs = {};
  let shop = {};

  if (!validator.isAlphanumeric(id)) {
    callback(null, createErrorResponse(400, 'Incorrect id'));
    db.close();
    return;
  }

  shop = new Shop({ _id: id,
    name: data.name });

  errs = shop.validateSync();

  if (errs) {
    callback(null, createErrorResponse(400, 'Incorrect parameter'));
    db.close();
    return;
  }

  db.once('open', () => {
    Shop.findByIdAndUpdate(id, product)
      .then(() => {
        callback(null, { statusCode: 200, body: JSON.stringify('Ok') });
      })
      .catch((err) => {
        callback(err, createErrorResponse(err.statusCode, err.message));
      })
      .finally(() => {
        db.close();
      });
  });
};

//#endregion