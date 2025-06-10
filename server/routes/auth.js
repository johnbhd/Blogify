import express from 'express';
import passport from 'passport';
import {register, login, logout} from '../controllers/userController.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);   
router.post('/logout', logout);

// redirect user to google auth
router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

router.get('/google/callback', passport.authenticate('google', {
    failureRedirect: '/',
}), (req, res) => {
    const redirectTo = req.query.redirect || '/Home';

    const token = jwt.sign(
        {
            id: req.user._id, role: 'user'
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '1h'
        }
    )

    res.cookie('token', token, {
        httpOnly: true,
        secure: false,
        sameSite: 'Lax',
        maxAge: 60 * 60 * 1000 
    });
    res.redirect(`http://localhost:5173${redirectTo}`);  
});

export default router;