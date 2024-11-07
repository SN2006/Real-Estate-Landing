import styles from "./Advantages.module.css"
import headerImg from "../../../assets/titles/OurAdvantagesHeader.svg"
import PropTypes from "prop-types";
import CustomizableIcon from "../../../assets/icons/CustomizableIcon.svg"
import PersonalizedIcon from "../../../assets/icons/PersonalizedIcon.svg"
import TransparentIcon from "../../../assets/icons/TransparentIcon.svg"
import ExpertIcon from "../../../assets/icons/ExpertIcon.svg"
import {motion} from "framer-motion";
import {useState} from "react";

const pointVariants = {
    simple: {
        background: "transparent",
    },
    active: {
        background: "white",
    }
}

const headerVariants = {
    simple: {
        translateY: 0,
        scale: 1,
    },
    active: {
        translateY: 170,
        scale: 1.2,
    }
}

const contentVariants = {
    hidden:{
        opacity: 0,
    },
    visible: {
        opacity: 1,
    }
}

const AdvantageCard = ({title, text, iconSrc}) => {
    return <div className={styles["advantage__card"]}>
        <h3>{title}</h3>
        <img src={iconSrc} alt="icon"/>
        <p>{text}</p>
    </div>
}

AdvantageCard.prototype = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    iconSrc: PropTypes.string.isRequired
}

const Advantages = () => {
    const [current, setCurrent] = useState(0);
    const [showContent, setShowContent] = useState(false);

    const onTitleClick = () => {
        setShowContent(true);
    }

    const onLeftButtonClick = (e) => {
        e.stopPropagation();
        if (current > 0) setCurrent(prev => prev - 1);
        else setShowContent(false);
    }

    const onRightButtonClick = (e) => {
        e.stopPropagation();
        if (current < 3) setCurrent(prev => prev + 1);
        else {
            setCurrent(0);
            setShowContent(false);
        }
    }

    return <section id="advantages" className={styles.advantages}>
        <div className={styles['advantages__container'] + " " + styles.large}>
            <div className={styles['advantages__title']}>
                <img src={headerImg} alt="Our Advantages"/>
            </div>
            <div className={styles['advantages__list']}>
                <AdvantageCard
                    title="CUSTOMIZABLE OPTIONS"
                    text="Choose from a variety of models and personalize your home to suit your style."
                    iconSrc={CustomizableIcon}
                />
                <AdvantageCard
                    title="PERSONALIZED SERVICE"
                    text="We focus on understanding your unique goals and delivering customized solutions for buying, selling."
                    iconSrc={PersonalizedIcon}
                />
                <AdvantageCard
                    title="TRANSPARENT PROCESS"
                    text="We guide you every step of the way with clear communication and transparency in all transactions."
                    iconSrc={TransparentIcon}
                />
                <AdvantageCard
                    title="EXPERT KNOWLEDGE"
                    text="Our team has deep expertise in the real estate market, ensuring you receive the best advice tailored to your needs."
                    iconSrc={ExpertIcon}
                />
            </div>
        </div>

        <div onClick={onTitleClick} className={styles['advantages__container'] + " " + styles.small}>
            <motion.div
                transition={{
                    type: "spring",
                    stiffness: 80,
                    damping: 20,
                }}
                variants={headerVariants}
                initial="active"
                animate={showContent ? "simple" : "active"}
                className={styles['advantages__title']}
            >
                <img src={headerImg} alt="Our Advantages"/>
            </motion.div>
            <motion.div
                transition={{
                    type: "spring",
                    stiffness: 80,
                    damping: 20,
                }}
                variants={contentVariants}
                initial="hidden"
                animate={showContent ? "visible" : "hidden"}
                className={styles['advantages__slider-container']}
            >
                <div className={styles['advantages__slider']}>
                    <motion.div
                        animate={{
                            translateX: -299 * current
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 80,
                            damping: 20,
                        }}
                        className={styles['advantages__list']}
                    >
                        <AdvantageCard
                            title="CUSTOMIZABLE OPTIONS"
                            text="Choose from a variety of models and personalize your home to suit your style."
                            iconSrc={CustomizableIcon}
                        />
                        <AdvantageCard
                            title="PERSONALIZED SERVICE"
                            text="We focus on understanding your unique goals and delivering customized solutions for buying, selling."
                            iconSrc={PersonalizedIcon}
                        />
                        <AdvantageCard
                            title="TRANSPARENT PROCESS"
                            text="We guide you every step of the way with clear communication and transparency in all transactions."
                            iconSrc={TransparentIcon}
                        />
                        <AdvantageCard
                            title="EXPERT KNOWLEDGE"
                            text="Our team has deep expertise in the real estate market, ensuring you receive the best advice tailored to your needs."
                            iconSrc={ExpertIcon}
                        />
                    </motion.div>
                </div>
                <div className={styles['advantages__slider-controls']}>
                    <button className={styles['arrow-btn']} onClick={onLeftButtonClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                            <path
                                d="M12.4464 23.9354L22.0206 33.5096C22.5951 34.0841 23.361 34.0841 23.9354 33.5096C24.5099 32.9352 24.5099 32.1692 23.9354 31.5948L16.6591 24.3184L32.5522 24.3184C33.3181 24.3184 33.8926 23.744 33.8926 22.978C33.8926 22.2121 33.3181 21.6376 32.5522 21.6376L16.6591 21.6376L23.9354 14.3613C24.5099 13.7868 24.5099 13.0209 23.9354 12.4464C23.361 11.872 22.5951 11.872 22.0206 12.4464L12.4464 22.0206C11.872 22.5951 11.872 23.361 12.4464 23.9354Z"
                                fill="white"/>
                        </svg>
                    </button>
                    <div className={styles['advantages__slider-points']}>
                        <motion.button
                            variants={pointVariants}
                            initial="simple"
                            animate={current === 0 ? "active" : "simple"}
                            onClick={() => setCurrent(0)}
                            className={styles['advantages__slider-point']}
                        >

                        </motion.button>
                        <motion.button
                            variants={pointVariants}
                            initial="simple"
                            animate={current === 1 ? "active" : "simple"}
                            onClick={() => setCurrent(1)}
                            className={styles['advantages__slider-point']}
                        >

                        </motion.button>
                        <motion.button
                            variants={pointVariants}
                            initial="simple"
                            animate={current === 2 ? "active" : "simple"}
                            onClick={() => setCurrent(2)}
                            className={styles['advantages__slider-point']}
                        >

                        </motion.button>
                        <motion.button
                            variants={pointVariants}
                            initial="simple"
                            animate={current === 3 ? "active" : "simple"}
                            onClick={() => setCurrent(3)}
                            className={styles['advantages__slider-point']}
                        >

                        </motion.button>
                    </div>
                    <button className={styles['arrow-btn']} onClick={onRightButtonClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                            <path
                                d="M33.5096 22.0206L23.9354 12.4464C23.361 11.872 22.5951 11.872 22.0206 12.4464C21.4462 13.0209 21.4462 13.7868 22.0206 14.3613L29.297 21.6376L13.4039 21.6376C12.6379 21.6376 12.0635 22.2121 12.0635 22.978C12.0635 23.744 12.6379 24.3184 13.4038 24.3184L29.297 24.3184L22.0206 31.5948C21.4462 32.1692 21.4462 32.9352 22.0206 33.5096C22.5951 34.0841 23.361 34.0841 23.9354 33.5096L33.5096 23.9354C34.0841 23.361 34.0841 22.5951 33.5096 22.0206Z"
                                fill="white"/>
                        </svg>
                    </button>
                </div>
            </motion.div>
        </div>
    </section>
}

export default Advantages;