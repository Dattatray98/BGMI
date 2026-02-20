import express from 'express';
import { registerTeam, getTeams, updateTeams } from '../controllers/teamController';
import { protect, admin } from '../middleware/authMiddleware';
import upload from '../middleware/uploadMiddleware';

const router = express.Router();

router.post('/register', protect, admin, upload.single('file'), registerTeam);
router.get('/', getTeams);
router.put('/update', protect, admin, updateTeams);

export default router;
