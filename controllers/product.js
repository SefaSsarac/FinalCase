const productService = require('../services/product');
const kafka = require('../utils/kafka');

// Create a product
const create = async (req, res) => {
    const { productName, color, price, stock } = req.body;
    
    if (!productName) {
        return res.status(502).send({ message: "name is required" });
    }
    if (!price) {
        return res.status(502).send({ message: "price is required" });
    }
    if (!color) {
        return res.status(502).send({ message: "color is required" });
    }
    if (!stock) {
        return res.status(502).send({ message: "stock is required" });
    }
    
    try {
        const response = await productService.create(req.body);
        console.log(response, 'result');
        res.status(200).send({ response: response });
    } catch (e) {
        console.log(e, 'error');
    }
};

// Update a product
const update = async (req, res) => {
    try {
        const response = await productService.update(req.body);
        console.log(response, 'result');
        res.status(200).send({ response: response });
    } catch (e) {
        console.log(e, 'error');
    }
};

// Delete a product
const deleteProduct = async (req, res) => {
    const { id } = req.params;
    
    if (!id) {
        return res.status(502).send({ message: "id is required" });
    }
    
    try {
        const response = await productService.deleleteF(id);
        console.log(response, 'result');
        res.status(200).send({ response: response });
    } catch (e) {
        console.log(e, 'error');
        res.status(500).send({ message: "Error deleting the product" });
    }
};

// Get all products
const getAll = async (req, res) => {
    try {
        const response = await productService.getAll();
        console.log(response, 'result');
        res.status(200).send({ response: response });
    } catch (e) {
        console.log(e, 'error');
    }
};

// Get a single product by id
const getSingle = async (req, res) => {
    try {
        const response = await productService.getSingle(req.params.id);
        console.log(response, 'result');
        res.status(200).send({ response: response });
    } catch (e) {
        console.log(e, 'error');
        res.status(500).send({ message: "Error fetching the product" });
    }
};

module.exports = {
    create,
    update,
    deleteProduct,
    getAll,
    getSingle
};
