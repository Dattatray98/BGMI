import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './src/models/User';

dotenv.config();

const usersToSeed = [
    {
        name: 'Super Admin',
        email: 'admin@gmail.com',
        password: 'admin',
        role: 'admin'
    },
    {
        name: 'Registration Admin',
        email: 'res@gmail.com',
        password: 'resadmin',
        role: 'registration_admin'
    }
];

const seedAdmins = async () => {
    try {
        const uri = process.env.MONGODB_URI;
        if (!uri) throw new Error('MONGODB_URI not found');

        console.log('Connecting to DB...');
        await mongoose.connect(uri);
        console.log('MongoDB Connected');

        for (const userData of usersToSeed) {
            const userExists = await User.findOne({ email: userData.email });

            if (userExists) {
                console.log(`${userData.role} already exists:`, userData.email);
                // Optionally update if we want to reset passwords, but skipping is fine
            } else {
                const user = await User.create(userData);
                console.log(`${userData.role} created successfully:`, user.email);
            }
        }

        process.exit(0);
    } catch (error: any) {
        console.error('Error:', error.message);
        process.exit(1);
    }
};

seedAdmins();
