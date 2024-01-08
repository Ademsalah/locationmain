const express = require("express");

const produitsSchema = require("../model/product");

const categoriesSchema = require("../model/categories");

const produitRoute = express.Router();

produitRoute.get("/jibproduit/:idcate", async (req, res) => {
  try {
    const products = await produitsSchema
      .find({ category: req.params.idcate })
      .populate("category", "name");
    const id = req.params.idcate;
    console.log("products", products);
    res.status(200).json({ msg: "voici les produits", products });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

produitRoute.post("/ajoutproduit", async (req, res) => {
  try {
    const newProducct = new produitsSchema(req.body);
    newProducct.save();
    res.json({ msg: "new produits", newProducct });
  } catch (err) {
    console.log(err);
  }
});

// PUT update product by ID
produitRoute.put("/updateproduit/:productId/:categoriId", async (req, res) => {
  try {
    const productId = req.params.productId;
    const categoriId = req.params.categoriId;
    // Assuming req.body contains updated product fields, including the category ID
    const updatedProduct = await produitsSchema.findByIdAndUpdate(
      productId,
      { ...req.body, category: categoriId },

      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ msg: "Product not found" });
    }

    res.status(200).json({
      msg: "Product and category updated successfully",
      updatedProduct,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

// DELETE product by ID
produitRoute.delete("/deleteproduit/:productId", async (req, res) => {
  try {
    const productId = req.params.productId;

    // Delete the product
    const deletedProduct = await produitsSchema.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({ msg: "Product not found" });
    }

    // If you also want to delete the associated category, you can do it here
    // const deletedCategory = await categoriesSchema.findByIdAndDelete(deletedProduct.category);

    res.status(200).json({
      msg: "Product deleted successfully",
      deletedProduct /*, deletedCategory */,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

module.exports = produitRoute;
