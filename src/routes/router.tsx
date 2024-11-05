import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import Course from "../pages/Course";

import Notification from "../components/notification";

import { AuthProvider } from "../contexts/authContext";
import { NotificationProvider } from "../contexts/notificationContext";
import { UserDataProvider } from "../contexts/userDataContext";
import MyCourses from "../pages/MyCourses";

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
              <Route path="/mycourses/:uid" element={<MyCourses />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AuthProvider>
        </UserDataProvider>
      </NotificationProvider>
    </Router>
  );
};
