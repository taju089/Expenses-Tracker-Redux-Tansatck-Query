Expense Tracker – MERN Stack Application

A full-stack Expense Tracker application built using React.js (Vite) for the frontend and Node.js + Express.js for the backend.
The application helps users manage income and expense transactions with secure JWT authentication, category management, and transaction tracking.

🚀 Features
🔐 Authentication
User Signup
User Login
JWT Authentication
Protected Routes
Change Password
Update Profile Details
Get User Profile Details
📂 Category Management
Create Categories
Update Categories
List Categories
Category Types:
Income
Expense
💰 Transaction Management
Create Transactions
Update Transactions
Delete Transactions
List Transactions
Transactions linked with categories
⚡ Frontend Features
Built using React.js with Vite
TanStack Query (useQuery, useMutation) for API handling
Centralized Redux store for user state management
Protected Routing
Reusable Components
API Error Handling
Responsive UI
🛠️ Tech Stack
Frontend
React.js
Vite
Redux Toolkit
TanStack Query
React Router DOM
Axios
Backend
Node.js
Express.js
MongoDB
Mongoose
JWT Authentication
bcrypt.js
📁 Project Structure
Expense-Tracker/
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── redux/
│   ├── services/
│   └── routes/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── utils/
│
└── README.md
⚙️ Installation
Clone Repository
git clone https://github.com/taju089/Expenses-Tracker-Redux-Tansatck-Query
Frontend Setup
cd frontend
npm install
npm run dev
Backend Setup
cd backend
npm install
npm start
🔑 Environment Variables

Create a .env file inside backend folder.

PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
📡 API Modules
Authentication APIs
Signup
Login
Change Password
Update Profile
Get Profile Details
Category APIs
Create Category
Update Category
Get Categories
Transaction APIs
Create Transaction
Update Transaction
Delete Transaction
Get Transactions
