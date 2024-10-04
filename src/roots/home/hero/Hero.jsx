import styles from "./Hero.module.css"
import Logo from "../../../UI/Logo.jsx";
import Backdor from "../../../UI/Backdor.jsx";
import PropTypes from "prop-types";
import {motion} from "framer-motion";

const buttonVariants = {
    animate: {
        background: "transparent",
        border: "1px solid rgba(255, 255, 255, 1)",
        color: "white"
    },
    hover: {
        background: "rgba(255, 255, 255, 0.8)",
        border: "1px solid rgba(27, 27, 27, 1)",
        color: "rgba(27, 27, 27, 1)"
    }
}

const textVariants = {
    animate: {
        color: "white"
    },
    hover: {
        color: "rgba(27, 27, 27, 1)"
    }
}

const HeroBtn = ({children}) => {
    return <motion.button
        className={styles['hero-btn']}
        variants={buttonVariants}
        animate={"animate"}
        whileHover={"hover"}
    >
        {children}
    </motion.button>
}

HeroBtn.propTypes = {
    children: PropTypes.node.isRequired,
}

const Hero = () => {
    return <section className={styles.hero} id={"hero"}>
        <Backdor/>
        <div className={styles['hero__container']}>
            <Logo
                mainGap={33}
                gap={41}
                logoWidth={125}
                logoHeight={209}
                realWidth={374}
                realHeight={86}
                estateWidth={540}
                estateHeight={87}
            />
            <div className={styles['hero__actions']}>
                <HeroBtn>Houses</HeroBtn>
                <HeroBtn>Apartments</HeroBtn>
                <HeroBtn>Townhouses</HeroBtn>
                <HeroBtn>Cottages</HeroBtn>
            </div>
            <div className={styles['hero__links']}>
                <a className={styles['hero__link']} href="#homes">View our offers</a>
                <a className={styles['hero__link']} href="/contact-us">Contact us</a>
            </div>
        </div>
    </section>
}

export default Hero;