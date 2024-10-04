import styles from "./AboutUs.module.css"
import headerImg from "../../../assets/titles/AboutUsHeader.svg"
import houseImg1 from "../../../assets/houses/AboutUsHouse1.jpg"
import houseImg2 from "../../../assets/houses/AboutUsHouse2.jpg"
import PictureWithBorder from "../../../UI/PictureWithBorder.jsx";
import PropTypes from "prop-types";

const StatisticListItem = ({mainLine, secondLine}) => {
    return <div className={styles['statistic-item']}>
        <h3>{mainLine}</h3>
        <p>{secondLine}</p>
    </div>
}

StatisticListItem.propTypes = {
    mainLine: PropTypes.string.isRequired,
    secondLine: PropTypes.string.isRequired,
}

const AboutUs = () => {
    return <section id="about-us" className={styles["about-us"]}>
        <div className={styles["about-us__container"]}>
            <div className={styles["about-us__heading"]}>
                <div className={styles["about-us__content"]}>
                    <img src={headerImg} alt="About Us"/>
                    <p className={styles['about-us__paragraph']}>At Real Estate, we specialize in turning dreams into reality. With a deep understanding of the
                        local market and a commitment to customer satisfaction, we provide a full range of real estate
                        services. From finding your ideal home to maximizing the value of your investment, our
                        experienced team is here to support you with honest advice and reliable service at every stage.
                        Our goal is to simplify the process and ensure that your experience is as smooth and stress-free
                        as possible, no matter your needs or budget.</p>
                    <PictureWithBorder src={houseImg1} left={17} top={17}/>
                </div>
                <PictureWithBorder src={houseImg2} left={-17} top={17}/>
            </div>
            <div className={styles['about-us__statistics']}>
                <StatisticListItem
                    mainLine={"2020"}
                    secondLine={"Company founding year"}
                />
                <StatisticListItem
                    mainLine={"500+"}
                    secondLine={"Projects"}
                />
                <StatisticListItem
                    mainLine={"100%"}
                    secondLine={"Satisfied customers"}
                />
                <StatisticListItem
                    mainLine={"150+"}
                    secondLine={"Employees"}
                />
            </div>
        </div>
    </section>
}

export default AboutUs;