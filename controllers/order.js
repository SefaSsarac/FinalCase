const orderService = require('../services/order');
const kafka = require('../utils/kafka');

// Create an order
const create = async (req, res) => {
    const io = req.app.get('io');
    const { userId, products } = req.body;

    if (!userId) {
        return res.status(502).send({ message: "userId is required" });
    }
    if (!products) {
        return res.status(502).send({ message: "products is required" });
    }
    
    try {
        const response = await orderService.create(req.body);
        io.emit('order_created', { event: 'order_created', order: response });
        console.log(response, 'result');
        res.status(200).send({ response: response });
    } catch (e) {
        console.log(e, 'error');
    }
};

// Update an order
const update = async (req, res) => {
    const { name, color, price, stock } = req.body;

    if (!name) {
        return res.status(502).send({ message: "name is required" });
    }
    if (!price) {
        return res.status(502).send({ message: "price is required" });
    }

    try {
        const response = await orderService.update(req.body);
        console.log(response, 'result');
        res.status(200).send({ response: response });
    } catch (e) {
        console.log(e, 'error');
    }
};

// Delete an order
const deleteOrder = async (req, res) => {
    const { id } = req.body;

    if (!id) {
        return res.status(502).send({ message: "id is required" });
    }

    try {
        const response = await orderService.deleleteF(id);
        console.log(response, 'result');
        res.status(200).send({ response: response });
    } catch (e) {
        console.log(e, 'error');
    }
};

// Get all orders
const getAll = async (req, res) => {
    try {
        const response = await orderService.getAll();
        console.log(response, 'result');
        res.status(200).send({ response: response });
    } catch (e) {
        console.log(e, 'error');
    }
};

// Get a single order
const getSingle = async (req, res) => {
    const { name, color, price, stock } = req.body;

    if (!name) {
        return res.status(502).send({ message: "name is required" });
    }
    if (!price) {
        return res.status(502).send({ message: "price is required" });
    }

    try {
        const response = await orderService.create(req.body);
        console.log(response, 'result');
        res.status(200).send({ response: response });
    } catch (e) {
        console.log(e, 'error');
    }
};

module.exports = {
    create,
    update,
    deleteOrder,
    getAll,
    getSingle
};
