import styles from "./Hero.module.css"
import Logo from "../../../UI/Logo.jsx";
import Backdor from "../../../UI/Backdor.jsx";
import {motion} from "framer-motion";
import {forwardRef, useEffect, useState} from "react";

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

const buttonTranslateVariants = (xStart, xEnd) => ({
    hidden: {
        translateX: xStart,
    },
    visible: {
        translateX: xEnd,
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 28.8
        }
    }
})
// eslint-disable-next-line react/display-name
const HeroBtn = forwardRef(({children, left, right}, ref) => {
    return <motion.button
        ref={ref}
        className={styles['hero-btn'] + (left ? " " + styles['hero-btn--left'] : "") + (right ? " " + styles['hero-btn--right'] : "")}
        variants={buttonVariants}
        animate={"animate"}
        whileHover={"hover"}
    >
        {children}
    </motion.button>
})

const MHeroBtn = motion.create(HeroBtn)

const Hero = () => {
    const [mainGap, setMainGap] = useState(window.innerWidth > 800 ? 33 : 15);
    const [gap, setGap] = useState(window.innerWidth > 800 ? 41 : 18);
    const [logoWidth, setLogoWidth] = useState(window.innerWidth > 800 ? 125 : 55);
    const [logoHeight, setLogoHeight] = useState(window.innerWidth > 800 ? 209 : 92);
    const [realWidth, setRealWidth] = useState(window.innerWidth > 800 ? 374 : 165);
    const [realHeight, setRealHeight] = useState(window.innerWidth > 800 ? 86 : 37);
    const [estateWidth, setEstateWidth] = useState(window.innerWidth > 800 ? 540 : 238);
    const [estateHeight, setEstateHeight] = useState(window.innerWidth > 800 ? 87 : 38);

    useEffect(() => {
        changeLogoSize();
        const root = document.getElementById("root");
        const resizeObserver = new ResizeObserver(onResize);
        resizeObserver.observe(root);
    }, []);

    const onResize = () => {
        changeLogoSize();
    }

    const changeLogoSize = () => {
        if (window.innerWidth > 800){
            setMainGap(33);
            setGap(41);
            setLogoWidth(125);
            setLogoHeight(209);
            setRealWidth(374);
            setRealHeight(86);
            setEstateWidth(540);
            setEstateHeight(87);
        }else{
            setMainGap(15);
            setGap(18);
            setLogoWidth(55);
            setLogoHeight(92);
            setRealWidth(165);
            setRealHeight(37);
            setEstateWidth(238);
            setEstateHeight(38);
        }
    }

    return <section className={styles.hero} id={"hero"}>
        <Backdor/>
        <div className={styles['hero__container']}>
            <Logo
                mainGap={mainGap}
                gap={gap}
                logoWidth={logoWidth}
                logoHeight={logoHeight}
                realWidth={realWidth}
                realHeight={realHeight}
                estateWidth={estateWidth}
                estateHeight={estateHeight}
            />
            <div className={styles['hero__actions'] + " " + styles['hero__actions--large']}>
                <HeroBtn>Houses</HeroBtn>
                <HeroBtn>Apartments</HeroBtn>
                <HeroBtn>Townhouses</HeroBtn>
                <HeroBtn>Cottages</HeroBtn>
            </div>
            <div className={styles['hero__actions'] + " " + styles['hero__actions--small']}>
                <MHeroBtn
                    right
                    variants={buttonTranslateVariants(1000, -85)}
                    initial="hidden"
                    animate="visible"
                >Houses</MHeroBtn>
                <MHeroBtn
                    left
                    variants={buttonTranslateVariants(-1000, 85)}
                    initial="hidden"
                    animate="visible"
                >Apartments</MHeroBtn>
                <MHeroBtn
                    right
                    variants={buttonTranslateVariants(1000, -85)}
                    initial="hidden"
                    animate="visible"
                >Townhouses</MHeroBtn>
                <MHeroBtn
                    left
                    variants={buttonTranslateVariants(-1000, 85)}
                    initial="hidden"
                    animate="visible"
                >Cottages</MHeroBtn>
            </div>
            <div className={styles['hero__links']}>
                <a className={styles['hero__link']} href="#homes">View our offers</a>
                <a className={styles['hero__link']} href="/contact-us">Contact us</a>
            </div>
        </div>
    </section>
}

export default Hero;