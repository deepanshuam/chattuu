import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectRoute from "./components/auth/ProtectRoute";
import { Loader } from "./components/Layout/Loadors";


const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login "));
const NotFound = lazy(() => import("./pages/NotFound"));
const Chat = lazy(() => import("./pages/Chat"));
const Group = lazy(() => import("./pages/Group"));
const AdminLogin = lazy(() => import("./pages/Admin/AdminLogin"));
const Dashboard = lazy(() => import("./pages/Admin/Dashboard"));
const UserManagment = lazy(() => import("./pages/Admin/UserManagment"))
const MessageManagment= lazy(()=> import ("./pages/Admin/MessageManagment"))
const ChatManagment=lazy(()=> import ("./pages/Admin/ChatManagment"))
let user = true;

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route element={<ProtectRoute user={user} />}>
            <Route path="/" element={<Home />} />
            <Route path="/chat/:chatId" element={<Chat />} />
            <Route path="/groups" element={<Group />} />
          </Route>
          <Route
            path="/login"
            element={
              <ProtectRoute user={!user} redirect="/">
                <Login />
              </ProtectRoute>
            }
          />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/usermanagment" element={<UserManagment />} />
          <Route path="/admin/messagemanagment" element={<MessageManagment />} />
          <Route path="/admin/chatmanagment" element={<ChatManagment />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
