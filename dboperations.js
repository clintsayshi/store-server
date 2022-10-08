let config = require("./dbconfig");
let sql = require("mssql");

async function getProducts() {
  try {
    let pool = await sql.connect(config);
    let products = await pool
      .request()
      .query(
        `SELECT product.Id as pId, product.pName as pName, product.pDesc as pDesc, product.price as price, product_image.image as image, product.categoryId as categoryId FROM product INNER JOIN product_image ON product.Id = product_image.productId`
      );
    return products.recordsets;
  } catch (err) {
    console.log(err);
  }
}

async function getProductsByCategory(categoryId) {
  try {
    let pool = await sql.connect(config);
    let products = await pool
      .request()
      .query(
        `SELECT produt.Id as pId, pName, pDesc, price, image, categoryId FROM product INNER JOIN product_image ON product.Id = product_image.productId WHERE categoryId = ${categoryId}`
      );
    return products.recordsets;
  } catch (err) {
    console.log(err);
  }
}

async function getProduct(productId) {
  try {
    let pool = await sql.connect(config);
    let product = await pool
      .request()
      .query(
        `SELECT product.Id as pId, pName, price, image, description, categoryId,pDesc FROM product INNER JOIN product_image ON product.Id = product_image.productId WHERE product.Id = ${productId}`
      );

    return product.recordsets;
  } catch (err) {
    console.log(err);
  }
}

async function getCategories() {
  try {
    let pool = await sql.connect(config);
    let categories = await pool.request().query("SELECT * FROM category");

    return categories.recordsets;
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  getProducts: getProducts,
  getProductsByCategory: getProductsByCategory,
  getProduct: getProduct,
  getCategories: getCategories,
};
