const { createClient } = require('redis');

let client; 

async function redisCon() {
    try {
        if (!client) {
            client = createClient({
                url: 'redis://localhost:6379', // Redis sunucusu adresi
            });

            // Hata olayını dinle
            client.on('error', (err) => {
                console.error('Redis Client Error:', err);
            });

            
            await client.connect();
            console.log('Connected to Redis');
        }

        return client; 
    } catch (e) {
        console.error('Could not connect to Redis', e);
        throw e; 
    }
}

module.exports = { redisCon };
