# BGMI Tournament Management System

A comprehensive platform for managing BGMI (Battlegrounds Mobile India) tournaments, featuring a dynamic leaderboard, match management, and an administrative dashboard for real-time score updates.

## 🚀 Project Structure

- **/Client**: React.js frontend built with TypeScript, Tailwind CSS, and Framer Motion.
- **/Server**: Node.js/Express backend with MongoDB/Mongoose.

## 🛠️ Features

- **Dynamic Leaderboard**: Real-time standings with automatic placement and kill point calculations.
- **Match Center**: Detailed match history, upcoming schedules, and tactical "IntelliGate" for match management.
- **Admin Dashboard**: Tactical interface for score entry, team registration, and match completion.
- **Role-Based Access**: Secure admin routes protected by JWT.
- **Rich Aesthetics**: Premium dark-themed UI with fluid animations.

## 🏁 Getting Started

### Prerequisites

- Node.js (v18+)
- MongoDB (Local or Atlas)
- Cloudinary Account (for team logo uploads)

### Backend Setup

1. Navigate to the server directory:
   ```bash
   cd Server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```
   Fill in your MongoDB URI, JWT Secret, and Cloudinary credentials.
4. Start the development server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the client directory:
   ```bash
   cd Client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```
   Set `VITE_API_URL` to your backend URL (default: `http://localhost:5000/api`).
4. Start the development server:
   ```bash
   npm run dev
   ```

## 📜 Key Dependencies

### Frontend
- React + Vite
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Axios
- React Hook Form

### Backend
- Express
- Mongoose
- JSON Web Token (JWT)
- Cloudinary
- Multer
- Bcryptjs

## 🛡️ License

This project is for educational/personal use. Please check the license terms for BGMI tournament organization in your region.
