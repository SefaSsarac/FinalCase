const { io } = require('../index'); // socket.io instance'ını import edin

async function createInvoice(orderId) {
    console.log(orderId, 'orderId');
    io.emit('order_created', { event: 'order_created', orderId });
    return orderId;
}

module.exports = {
    createInvoice
};