class Product {
  constructor(Id, pCode, barcode, pDesc, price, categoryId) {
    this.Id = Id;
    this.pCode = pCode;
    this.barcode = barcode;
    this.pDesc = pDesc;
    this.price = price;
    this.categoryId = categoryId;
  }
}

module.exports = Product;
