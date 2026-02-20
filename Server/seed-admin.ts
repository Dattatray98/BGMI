import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './src/models/User';

dotenv.config();

const createAdmin = async () => {
    try {
        const uri = process.env.MONGODB_URI;
        if (!uri) throw new Error('MONGODB_URI not found');

        console.log('Connecting to DB...');
        await mongoose.connect(uri);
        console.log('MongoDB Connected');

        const email = 'Jojewardattatray@gmail.com';
        const password = 'Devid@98';

        const userExists = await User.findOne({ email });

        if (userExists) {
            console.log('Admin user already exists');
            process.exit(0);
        }

        const adminUser = await User.create({
            name: 'Super Admin',
            email,
            password,
            role: 'admin'
        });

        console.log('Admin user created successfully:', adminUser.email);
        process.exit(0);
    } catch (error: any) {
        console.error('Error:', error.message);
        process.exit(1);
    }
};

createAdmin();
