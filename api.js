var product = require("./product");
const db = require("./dboperations");

var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api", router);

router.use((request, response, next) => {
  console.log("Middleware");
  next();
});

router.route("/products").get((request, response) => {
  db.getProducts()
    .then((result) => {
      console.log("we here");
      console.log(result);
      return response.json(result[0]);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/category/:id").get((request, response) => {
  db.getProductsByCategory(request.params.id)
    .then((result) => {
      console.log(result);
      return response.json(result[0]);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/products/:id").get((request, response) => {
  console.log(request.params);
  db.getProduct(request.params.id)
    .then((result) => {
      response.json(result[0]);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/categories").get(async function (request, response) {
  const result = await db.getCategories();
  return response.json(result[0]);
});

var port = process.env.PORT || 8080;
app.listen(port);
console.log("Shoe API is running at: " + port);
