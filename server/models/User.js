    import mongoose from "mongoose";
    import bcrypt from 'bcryptjs';

    const userSchema = new mongoose.Schema(
        {   
            googleId: {
                type: String,
                required: true,
                unique: true
            },
            email: { 
                type: String, 
                required: true, 
                unique: true 
            }, 
            password: { 
                type: String,
                required: false
            },
            role: {
                type: String,
                enum: ['user', 'admin'],
                default: 'user', 
                required: true
            },
        },
        { 
            timestamps: true,
            collection: 'userdata'
        }

    );
    // hashing password
    userSchema.pre('save', async function (next) {
        if (!this.isModified('password')) return next();
        const salt = await bcrypt.genSalt(10);
        this.password = bcrypt.hashSync(this.password, salt);
        next();
    });

    userSchema.methods.matchPassword = async function (enteredPassword) {
        return await bcrypt.compare(enteredPassword, this.password);
    }

    const User = mongoose.model('User', userSchema);
    export default User;