const userService = require('../services/user');
const kafka = require('../utils/kafka');

// Update a user
const updateUser = async (req, res) => {
    try {
        const response = await userService.updateUser(req.body);
        console.log(response, 'result');
        res.status(200).send({ response: response });
    } catch (e) {
        console.log(e, 'error');
    }
};

// Delete a user
const deleteUser = async (req, res) => {
    try {
        const response = await userService.deleteUser(req.params);
        console.log(response, 'result');
        res.status(200).send({ response: response });
    } catch (e) {
        console.log(e, 'error');
    }
};

// Get a single user
const getUser = async (req, res) => {
    try {
        const response = await userService.getUser(req.params);
        console.log(response, 'result');
        res.status(200).send({ response: response });
    } catch (e) {
        console.log(e, 'error');
    }
};

// Get all users
const getUsers = async (req, res) => {
    try {
        const response = await userService.getUsers();
        console.log(response, `result ${response}`);
        res.status(200).send({ response: response });
    } catch (e) {
        console.log(e, 'error');
    }
};

// Create an order (using Kafka)
const createOrder = async (req, res) => {
    try {
        // Uncomment this when the order creation logic is implemented
        // const response = await userService.createOrder();
        // if(response){
        //     // Logic to handle response
        // }

        kafka.sendMessage('order', 'test3');
        res.status(200).send({ response: [] });
    } catch (e) {
        console.log(e, 'error');
    }
};

module.exports = {
    updateUser,
    deleteUser,
    getUser,
    getUsers,
    createOrder
};
