const userService = require('../services/user');
const authService = require('../services/auth');

// Login function
const login = async (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).send({ message: "email and password required" });
    }

    try {
        console.log('Logged in');
        const response = await authService.login(req.body);
        res.status(200).send({ response: response });
    } catch (e) {
        console.log(e, 'error');
    }
};

// Register function
const register = async (req, res) => {
    try {
        const response = await userService.createUser(req.body);
        res.status(200).send({ response: response });
    } catch (e) {
        console.log(e, 'error');
    }
};

module.exports = {
    login,
    register
};
