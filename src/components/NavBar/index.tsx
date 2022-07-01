import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.scss"

interface NavBarProps {

}

const NavBar: React.FC<NavBarProps> = () => {

    useEffect(() => {
        document.body.classList.add('body');

        return function cleanup() {
            document.body.classList.remove('body');
        };
    }, []);

    return (
        <div className="navbar-nav">
            <Link to="/" className="nav-link" >Home</Link>
            <Link to="/admin" className="nav-link" >Administrator</Link>
            <Link to="/user" className="nav-link">User</Link>
        </div>
    );
}

export default NavBar;