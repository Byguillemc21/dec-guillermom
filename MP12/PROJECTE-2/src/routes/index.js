const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    console.log('Indexx works!');
    res.send('received');
})