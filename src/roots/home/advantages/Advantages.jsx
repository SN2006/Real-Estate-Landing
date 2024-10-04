import styles from "./Advantages.module.css"
import headerImg from "../../../assets/titles/OurAdvantagesHeader.svg"
import PropTypes from "prop-types";
import CustomizableIcon from "../../../assets/icons/CustomizableIcon.svg"
import PersonalizedIcon from "../../../assets/icons/PersonalizedIcon.svg"
import TransparentIcon from "../../../assets/icons/TransparentIcon.svg"
import ExpertIcon from "../../../assets/icons/ExpertIcon.svg"

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
    return <section id="advantages" className={styles.advantages}>
        <div className={styles['advantages__container']}>
            <img src={headerImg} alt="Our Advantages"/>
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
    </section>
}

export default Advantages;