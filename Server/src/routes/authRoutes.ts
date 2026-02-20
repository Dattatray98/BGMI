import express from 'express';
import { registerUser, loginUser } from '../controllers/authController';
import { protect, admin } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/register', protect, admin, registerUser);
router.post('/login', loginUser);

export default router;
