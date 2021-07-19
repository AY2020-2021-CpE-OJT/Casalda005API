const router = require('express').Router();
const verify = require('./verifyToken');

router.get('/', verify, (req, res) => {
    res.json({
        posts: {
            title: 'My another post',
            description: 'random data you shouldnt access'
        }
    });
});

module.exports = router;