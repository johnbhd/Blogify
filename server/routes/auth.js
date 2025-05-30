import express from 'express';
import passport from 'passport';
import {register, login} from '../controllers/userController.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);   

// redirect user to google auth
router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

router.get('/google/callback', passport.authenticate('google', {
    failureRedirect: '/',
}), (req, res) => {
    res.redirect('http://localhost:5173/Home');  
});

export default router;