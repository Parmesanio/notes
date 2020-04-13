const express = require('express');
const redis = require('redis');

const app = express();
const redisClient =  redis.createClient({
    host: 'redis-server',
    port: 6379 // default port #
});

redisClient.set('visits', 1);


app.get('/', (req, res) => {
    redisClient.get('visits', (err, visits) => {
        if (err) throw err;
        res.send(`Site visited ${visits} time(s)`);
        redisClient.set('visits', +visits + 1)
    });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
