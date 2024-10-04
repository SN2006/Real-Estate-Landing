import styles from "./Footer.module.css"
import Logo from "../../../UI/Logo.jsx";

const Footer = () => {
    return <footer id="footer" className={styles.footer}>
        <div className={styles["footer__container"]}>
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
    </footer>
}

export default Footer