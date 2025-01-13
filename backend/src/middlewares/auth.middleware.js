const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {

    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    try {
        const decoded = jwt.verify(token.split(' ')[1], 'SECRET_KEY');
        req.user = decoded.userId;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Invalid Token' });
    }
};

module.exports = verifyToken;
