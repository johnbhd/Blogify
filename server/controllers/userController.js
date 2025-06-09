import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export async function register(req, res) {
    try {
        const { email, password } = req.body;

        const existingUser = await User.findOne( { email });

        if (existingUser) {
            return res.status(400).json({ error: 'Email is already in use'});
        }

        const newUser = new User ({
            email,
            password,
        });

        await newUser.save();
        
        const token = jwt.sign(
            {
                id: newUser._id,
                role: user.role
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

        res.status(201).json({ message: "User registered successfully", token});

    } catch (error) {
        console.log("error", error);
        res.status(500).json({ error: "Server error" }); 
    }
}
export async function login(req, res) {
    try {

        const { email, password } = req.body;
        
        const user = await User.findOne({ email });
    
        if (!user) {
            return res.status(400).json({ error: "Invalid email or password"});
        }
    
        const isMatch = bcrypt.compareSync(password, user.password);
    
        if (!isMatch) {
            return res.status(400).json({ error: "Invalid email or password" });
        }

        const token = jwt.sign(
            { id: user._id, role: 'user' },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.cookie('token', token, {
            httpOnly: true,
            secure: false,
            sameSite: 'Lax',
            maxAge: 60 * 60 * 100
        });
    
        res.status(200).json({ message: "Login successful", token});

    } catch (error) {
        console.log("Error Login");
        res.status(500).json({ error: "Server error" });
    }
}

export async function logout(req, res) {
    try {
        res.clearCookie('token', {
             httpOnly: true,
            secure: false,
            sameSite: 'Lax',
            maxAge: 60 * 60 * 100
        });
        
        res.status(200).json({ message: 'Logout Succesfully'});

    } catch (error) {
        res.status(500).json({ error: 'Server error'})
    }
}