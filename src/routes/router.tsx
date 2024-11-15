import { Navigate, Route, Routes, useLocation } from "react-router-dom";
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
import Teacher from "../pages/Teacher";
import Refunds from "../pages/Refunds";
import { SidebarNav } from "../components/sideBarNav";
import Messages from "../pages/Messages";

export const RouterApp = () => {
  const location = useLocation();

  const hideSidebarNav: string[] = ["/login", "/register"];

  const showSidebar = !hideSidebarNav.includes(location.pathname);

  return (
    <NotificationProvider>
      <UserDataProvider>
        <AuthProvider>
          <Notification />
          {showSidebar && <SidebarNav />}
          <Routes>
            <Route path="/" element={<Navigate to={"/login"} replace />} />
            <Route path="/dashboard/:uid" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="course/:course" element={<Course />} />
            <Route path="/mycourses/:uid" element={<MyCourses />} />
            <Route path="/teacher" element={<Teacher />} />
            <Route path="/refunds" element={<Refunds />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </UserDataProvider>
    </NotificationProvider>
  );
};
