import styles from "./Footer.module.css"
import Logo from "../../../UI/Logo.jsx";
import {useState} from "react";
import {motion} from "framer-motion";

// const accordionVariants = {
//     closed: {
//
//     },
//     open: {
//
//     }
// }

const Accordion = ({children, title}) => {
    const [isOpen, setIsOpen] = useState(false);

    const onClickHandler = () => {
        setIsOpen(prev => !prev);
    }

    return <div className={styles['footer__accordion-links']}>
        <button
            onClick={onClickHandler}
            className={styles['footer__accordion-button']}
        >
            <h3>
                {title}
            </h3>
            <motion.svg
                animate={isOpen ? {
                    rotate: 45,
                } : {
                    rotate: 0,
                }}
                xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 22 24" fill="none">
                <path
                    d="M17.875 12C17.875 12.276 17.6697 12.5 17.4167 12.5H11.4583V19C11.4583 19.276 11.253 19.5 11 19.5C10.747 19.5 10.5417 19.276 10.5417 19V12.5H4.58333C4.33033 12.5 4.125 12.276 4.125 12C4.125 11.724 4.33033 11.5 4.58333 11.5H10.5417V5C10.5417 4.724 10.747 4.5 11 4.5C11.253 4.5 11.4583 4.724 11.4583 5V11.5H17.4167C17.6697 11.5 17.875 11.724 17.875 12Z"
                    fill="white"/>
            </motion.svg>
        </button>
        <div className={styles['footer__accordion-content']}>
            {children}
        </div>
    </div>
}

const AccordionItem = ({text, href}) => {
    return <a className={styles['footer__accordion-item']} href={href ? href : "#"}>
        {text}
    </a>
}

const Footer = () => {
    return <footer id="footer" className={styles.footer}>
        <div className={styles["footer__container"]}>
            <a href="#root" className={styles["footer__logo-link"]}>
                <Logo
                    mainGap={25}
                    gap={24}
                    logoWidth={55}
                    logoHeight={92}
                    realWidth={199}
                    realHeight={48}
                    estateWidth={278}
                    estateHeight={48}
                />
            </a>
            <div className={styles["footer__links"]}>
                <div className={styles["footer__link-group"]}>
                    <h3>ADDRESS</h3>
                    <p>Florida, USA</p>
                    <p>Miami</p>
                    <p>401 Biscayne Blvd</p>
                    <p>FL, 010701</p>
                </div>
                <div className={styles["footer__link-group"]}>
                    <h3>INFORMATION</h3>
                    <a href="#about-us">About us</a>
                    <a href="#advantages">Our advantages</a>
                    <a href="#reviews">Reviews</a>
                    <a href="#stage">Stage of work</a>
                    <a href="#question">Questions</a>
                </div>
                <div className={styles["footer__link-group"]}>
                    <h3>CONTACT US</h3>
                    <p>real.estate@gmail.com</p>
                    <p>+1-(777)-000-11-77</p>
                    <p>+1-(111)-007-77-00</p>
                    <p>@real.estate</p>
                    <p>9:00 - 21:00</p>
                </div>
            </div>
        </div>
        <hr className={styles['footer__line']}/>
        <div className={styles['footer__container--small']}>
            <Accordion title="ADDRESS">
                <AccordionItem text="Florida, USA" href=""/>
                <AccordionItem text="Miami" href=""/>
                <AccordionItem text="401 Biscayne Blvd" href=""/>
                <AccordionItem text="FL, 010701" href=""/>
            </Accordion>
        </div>
        <hr className={styles['footer__line']}/>
    </footer>
}

export default Footer