import mongoose from 'mongoose';
import User from './src/models/User';

const MONGODB_URI = 'mongodb://127.0.0.1:27017/bgmi_tournament';

const checkUser = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        const user = await User.findOne({ email: 'Jojewardattatray@gmail.com' });
        if (user) {
            console.log('USER_FOUND:', user.email, 'ROLE:', user.role);
        } else {
            console.log('USER_NOT_FOUND');
        }
        process.exit(0);
    } catch (error) {
        process.exit(1);
    }
};

checkUser();
