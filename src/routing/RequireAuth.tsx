import { useLocation, Navigate, Outlet, OutletProps } from 'react-router-dom';

const RequireAuth = () => {
    const { auth } = { auth: true };
    const location = useLocation();

    return (
        auth
            ? <Outlet /> 
            : <Navigate to="/user-login" state={{from: location }} replace />
    )
}

export default RequireAuth;