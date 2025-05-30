import passport from "passport";
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import User from "../models/User.js";

passport.use(new GoogleStrategy ({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `${process.env.CLIENT_URL}/api/auth/google/callback`
}, async (accessToken, refreshToken, profile, callback) => {
    try {
        const existingUser = await User.findOne({ googleId: profile.id });
        if (existingUser) return callback(null, existingUser);
    
        const user = await new User({
            googleId: profile.id,
            name: profile.displayName,
            email: profile.emails?.[0]?.value || '',
            photo: profile.photos?.[0]?.value || ''

        }).save();
    
        callback(null, user);
    } catch (error) {
        callback(error, null);
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => done(null, user))
        .catch(err => done(err, null));
});