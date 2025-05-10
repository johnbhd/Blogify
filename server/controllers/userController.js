import User from "../models/User.js";

async function register(req, res) {
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

        res.status(201).json({ message: "User registered successfully"});

    } catch (error) {
        console.log("error", error);
        res.status(500).json({ error: "Server error" }); 
    }
}

export default register;