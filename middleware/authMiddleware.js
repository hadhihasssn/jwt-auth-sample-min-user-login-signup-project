const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt; // Use req.cookies.jwt instead of req.cookie.jwt

    if (token) {
        jwt.verify(token, 'net ninja secret', (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                res.redirect('/login');
            } else {
                console.log(decodedToken);
                next(); // Use next() instead of res.next()
            }
        });
    } else {
        res.redirect('/login');
    }
};

module.exports = { requireAuth };
