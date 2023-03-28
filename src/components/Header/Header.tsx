import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { FaBell, FaUserCircle, FaRegCompass, FaSignInAlt } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import HeaderStyles from "./Header.module.scss";
import logo from "../../images/logo.png";
import useToggle from "../../hooks/useToggle";
import Hamburger from "../Hamburger/Hamburger";

const Header: React.FC = () => {
    const [expanded, setExpanded] = useToggle();

    const isPhone = useMediaQuery({ query: "(max-width: 600px)" });

    return (
        <header className={HeaderStyles.header}>
            <NavLink to="/">
                <img src={logo} alt="Logo" className={HeaderStyles.logo} />
            </NavLink>
            <Hamburger onClick={() => setExpanded()} expanded={expanded} className={HeaderStyles.hamburger} />
            <nav className={`${HeaderStyles.navigation} ${expanded ? HeaderStyles.active : ""}`}>
                <ul>
                    <li>
                        <NavLink to="/" className={(navData) => (navData.isActive ? HeaderStyles.active : "")}>
                            {isPhone ? "Home" : <HiHome className={HeaderStyles.icon} />}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/discover" className={(navData) => (navData.isActive ? HeaderStyles.active : "")}>
                            {isPhone ? "Discover" : <FaRegCompass className={HeaderStyles.icon} />}
                        </NavLink>
                    </li>
                    {/* <li>
                        <NavLink to="/profile" className={(navData) => (navData.isActive ? HeaderStyles.active : "")}>
                            {isPhone ? "Notifications" : <FaBell className={HeaderStyles.icon} />}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/profile" className={(navData) => (navData.isActive ? HeaderStyles.active : "")}>
                            {isPhone ? "Profile" : <FaUserCircle className={HeaderStyles.icon} />}
                        </NavLink>
                    </li> */}
                    <li>
                        <NavLink to="/signin" className={(navData) => (navData.isActive ? HeaderStyles.active : "")}>
                            {isPhone ? "Sign in" : <FaSignInAlt className={HeaderStyles.icon} />}
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
export default Header;
