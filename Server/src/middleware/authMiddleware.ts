import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import User from '../models/User';

interface AuthRequest extends Request {
    user?: any;
}

export const protect = async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
    let token;
    console.log('Protect middleware triggered');

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
            req.user = await User.findById(decoded.id).select('-password');

            if (!req.user) {
                console.warn('Authorization failed: User no longer exists in DB');
                res.status(401).json({ message: 'Not authorized, user not found' });
                return;
            }

            console.log('User authorized:', req.user.email);
            return next();
        } catch (error) {
            console.error('Authorization failed:', error);
            res.status(401).json({ message: 'Not authorized, token failed' });
            return;
        }
    }

    if (!token) {
        console.warn('No token provided');
        res.status(401).json({ message: 'Not authorized, no token' });
        return;
    }
};

export const admin = (req: AuthRequest, res: Response, next: NextFunction) => {
    console.log('Admin middleware triggered. User Role:', req.user?.role);
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        console.warn('Admin check failed for user:', req.user?.email);
        res.status(403).json({ message: 'Not authorized as an admin' });
    }
};

export const authorizeRoles = (...roles: string[]) => {
    return (req: AuthRequest, res: Response, next: NextFunction) => {
        if (req.user && roles.includes(req.user.role)) {
            next();
        } else {
            console.warn(`Role check failed for user: ${req.user?.email}. Required one of: ${roles.join(', ')}`);
            res.status(403).json({ message: `Not authorized. Required role: ${roles.join(' or ')}` });
        }
    };
};
