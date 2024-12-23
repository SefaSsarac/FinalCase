const basketService = require('../services/basket');

// Create a basket with a product
const create = async (req, res) => {
    const { userId, product } = req.body;
    if (!userId) {
        return res.status(502).send({ message: "userId is required" });
    }
    if (!product.productId) {
        return res.status(502).send({ message: "productId is required" });
    }
    try {
        const response = await basketService.addProductInBasket(req.body);
        res.status(200).send({ response: response });
    } catch (e) {
        console.log(e, 'error');
    }
};

// Update a product in the basket
const update = async (req, res) => {
    const { name, color, price, stock } = req.body;
    if (!name) {
        return res.status(502).send({ message: "name is required" });
    }
    if (!price) {
        return res.status(502).send({ message: "price is required" });
    }
    try {
        const response = await basketService.update(req.body);
        console.log(response, 'result');
        res.status(200).send({ response: response });
    } catch (e) {
        console.log(e, 'error');
    }
};

// Delete a product from the basket
const deleteProduct = async (req, res) => {
    const { userId, productId } = req.body;
    if (!userId) {
        return res.status(502).send({ message: "userId is required" });
    }
    if (!productId) {
        return res.status(502).send({ message: "productId is required" });
    }
    try {
        const response = await basketService.removeProductFromBasket(req.body);
        console.log(response, 'result');
        res.status(200).send({ response: response });
    } catch (e) {
        console.log(e, 'error');
    }
};

// Clear the entire basket
const clearBasket = async (req, res) => {
    const { userId } = req.body;
    if (!userId) {
        return res.status(502).send({ message: "userId is required" });
    }
    try {
        const response = await basketService.clearBasket(req.body);
        console.log(response, 'result');
        res.status(200).send({ response: response });
    } catch (e) {
        console.log(e, 'error');
    }
};

// Get all products in the basket
const getBasket = async (req, res) => {
    try {
        const response = await basketService.getBasket(req.params);
        res.status(200).send({ response: response });
    } catch (e) {
        console.log(e, 'error');
    }
};

// Get a single product in the basket
const getSingle = async (req, res) => {
    const { name, color, price, stock } = req.body;
    if (!name) {
        return res.status(502).send({ message: "name is required" });
    }
    if (!price) {
        return res.status(502).send({ message: "price is required" });
    }
    try {
        const response = await basketService.create(req.body);
        console.log(response, 'result');
        res.status(200).send({ response: response });
    } catch (e) {
        console.log(e, 'error');
    }
};

module.exports = {
    create,
    update,
    deleteProduct,
    clearBasket,
    getBasket,
    getSingle
};
