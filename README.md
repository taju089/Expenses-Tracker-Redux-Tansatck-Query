💰 Expense Tracker – MERN Stack Application

A full-stack Expense Tracker application built using React.js (Vite) for the frontend and Node.js + Express.js for the backend.
This application helps users manage their income and expenses with secure authentication, category management, and transaction tracking.

🔗 GitHub Repository:
Expenses-Tracker-Redux-Tansatck-Query

🚀 Features
🔐 Authentication & Authorization
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
Fetch Categories List
Separate Category Types:
Income
Expense
💰 Transaction Management
Create Transactions
Update Transactions
Delete Transactions
List Transactions
Transactions linked with categories
⚡ Frontend Functionalities
Built using React.js with Vite
TanStack Query for API handling
API caching and mutation handling
Centralized Redux store for user management
Protected Routing
Reusable Components
Error Handling
Responsive UI
🛠️ Tech Stack
Frontend
React.js
Vite
Redux Toolkit
TanStack Query
React Router DOM
Axios
CSS
Backend
Node.js
Express.js
MongoDB
Mongoose
JWT
bcrypt.js
📁 Project Structure
Expenses-Tracker-Redux-Tansatck-Query/
│
├── client/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── redux/
│   ├── routes/
│   ├── services/
│   └── utils/
│
├── server/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── config/
│   └── utils/
│
├── package.json
└── README.md
⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/taju089/Expenses-Tracker-Redux-Tansatck-Query.git
2️⃣ Frontend Setup
cd client
npm install
npm run dev
3️⃣ Backend Setup
cd server
npm install
npm start
🔑 Environment Variables

Create a .env file inside the server folder.

PORT=5000
MONGO_URI=your_mongodb_connection_string
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
🔄 TanStack Query Usage

Implemented complete API handling using:

useQuery
useMutation

Features achieved using TanStack Query:

API Caching
Refetching
Optimistic Updates
Loading States
Error Handling
🧠 Redux State Management

Redux Toolkit is used for:

User Authentication State
Storing User Details
Global State Management
🔒 Protected Routes

Protected routes are implemented to restrict unauthorized users from accessing:

Dashboard
Transactions
Categories
Profile Pages
📸 Screenshots

Add your application screenshots inside a screenshots folder.

Example:

![Login](./screenshots/login.png)
![Dashboard](./screenshots/dashboard.png)
![Transactions](./screenshots/transactions.png)
🚀 Future Improvements
Dashboard Analytics
Expense Charts & Graphs
Monthly Reports
Export Transactions
Dark Mode
Pagination & Filters
Income vs Expense Statistics
👨‍💻 Author
Shaik Taju
GitHub:
taju089 GitHub Profile
LinkedIn:
Add your LinkedIn profile link here
⭐ Support

If you found this project useful, give it a ⭐ on GitHub.
