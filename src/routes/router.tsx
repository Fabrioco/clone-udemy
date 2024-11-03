import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import { AuthProvider } from "../contexts/authContext";
import { NotificationProvider } from "../contexts/notificationContext";
import Notification from "../components/notification";
import { UserDataProvider } from "../contexts/userDataContext";
import { Course } from "../pages/Course";

export const RouterApp = () => {
  return (
    <Router>
      <NotificationProvider>
        <UserDataProvider>
          <AuthProvider>
            <Notification />
            <Routes>
              <Route path="/dashboard/:uid" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="course/:course" element={<Course />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AuthProvider>
        </UserDataProvider>
      </NotificationProvider>
    </Router>
  );
};
