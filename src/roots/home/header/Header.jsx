import styles from "./Header.module.css"
import logoFirstPart from "../../../assets/icons/SmallLogo1.svg"
import logoSecondPart from "../../../assets/icons/SmallLogo2.svg"
import PropTypes from "prop-types";
import {motion} from "framer-motion";

const linkVariants = {
    visible: {
        color: "white"
    },
    hover: {
        color: "#acacac",
    }
}

const NavLink = ({children, to}) => {
    return <motion.a
        variants={linkVariants}
        animate={"visible"}
        whileHover={"hover"}
        className={styles["nav__link"]}
        href={to}
        rel="noopener noreferrer">{children}</motion.a>
}

NavLink.propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.string.isRequired
}

const Header = () => {
    return <header>
        <div className={styles.header + " container"}>
            <div
                className={styles.logoBox}
                onClick={() => location.href = "#hero"}
            >
                <img src={logoFirstPart} alt="logo"/>
                <img src={logoSecondPart} alt="logo"/>
            </div>
            <nav>
                <div className={styles.nav}>
                    <NavLink to={"#about-us"}>About us</NavLink>
                    <NavLink to={"#advantages"}>Advantages</NavLink>
                    <NavLink to={"#reviews"}>Reviews</NavLink>
                    <NavLink to={"#stage"}>Stage of work</NavLink>
                    <NavLink to={"#question"}>Questions</NavLink>
                    <NavLink to={"#footer"}>Contacts</NavLink>
                </div>
            </nav>

        </div>
        <div className={styles.line}></div>
    </header>
}

export default Header;