import { BrowserRouter, Route, Routes, Router, Navigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import AdminsPage from "../pages/AdminsPage";
import ChatPage from "../pages/ChatPage";
import IssuesPage from "../pages/IssuesPage";
import UsersPage from "../pages/UsersPage";
import RequireAuth from "./RequireAuth";


const ApplicationRouter: React.FC = () => {
    return (
        <>
            <NavBar />
            <Routes>
                {/* Public */}
                {/* {<Route path="/user-login" element={<UserLogin />} />} */}

                {/* Private */}
                <Route element={<RequireAuth />}>
                    <Route path="/" element={
                        <Navigate to="/admin" />
                    } />
                    <Route path='/admin' element={<AdminsPage />} />
                    <Route path='/user' element={<UsersPage />} />
                    <Route path='/talk' element={<ChatPage />} />
                    <Route path='/register' element={<IssuesPage />} />
                </Route>
            </Routes>
        </>
    );
}

export default ApplicationRouter;