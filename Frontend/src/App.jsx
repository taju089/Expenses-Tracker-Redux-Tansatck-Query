import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HeroSection from "./components/Home/HomePage";
import PublicNavbar from "./components/Navbar/PublicNavbar";
import LoginForm from "./Users/Login";
import RegistrationForm from "./Users/Register";
import PrivateNavbar from "./components/Navbar/PrivateNavbar";
import { getToken } from "./utils/getUserFromLocalStorage";
import { useSelector } from "react-redux";
import AddCategory from "./components/Category/AddCategory";
import CategoriesList from "./components/Category/CategoriesList";
import UpdateCategory from "./components/Category/UpdateCategory";
import TransactionForm from "./components/Transactions/TransactionForm";
import Dashboard from "./Users/Dashboard";
import UserProfile from "./Users/UserProfile";
import UpdatePassword from "./Users/UpdatePassword";
import AuthRoute from "./components/AuthRoute/AuthRoute";

function App() {
  // ! get User Data
  const user = useSelector((state) => {
    return state.auth?.user?.data?.data;
  });
  return (
    <BrowserRouter>
      {/* Nav Bar */}
      {user ? <PrivateNavbar /> : <PublicNavbar />}

      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route
          path="/add-category"
          element={
            <AuthRoute>
              <AddCategory />
            </AuthRoute>
          }
        />
        <Route
          path="/categories"
          element={
            <AuthRoute>
              <CategoriesList />
            </AuthRoute>
          }
        />
        <Route
          path="/update-category/:id"
          element={
            <AuthRoute>
              <UpdateCategory />
            </AuthRoute>
          }
        />
        <Route
          path="/add-transaction"
          element={
            <AuthRoute>
              <TransactionForm />
            </AuthRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <AuthRoute>
              <Dashboard />
            </AuthRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <AuthRoute>
              <UserProfile />
            </AuthRoute>
          }
        />
        <Route
          path="/update-password"
          element={
            <AuthRoute>
              <UpdatePassword />
            </AuthRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
