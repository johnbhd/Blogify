import jwt from 'jsonwebtoken';

export async function authMiddleware(req, res, next) {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ message: 'Not authenticated'});
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();

    } catch (error) {
        return res.status(403).json({ message: 'Invalid tokens'});
    }
}
