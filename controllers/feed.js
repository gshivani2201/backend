exports.getProducts = (req, res, next) => {
  res
    .status(200)
    .json({ products: [{ title: "First product", price: "₹499" }] });
};

exports.createProduct = (req, res, next) => {
  const title = req.body.title;
  const price = req.body.price;
  //Create product in db
  res.status(201).json({
    message: "Product created successfully!",
    product: { id: `id-${Math.random()}`, title: title, price: price },
  });
};
