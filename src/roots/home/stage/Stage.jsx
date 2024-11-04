import styles from "./Stage.module.css"
import headerImg from "../../../assets/titles/StageHeader.svg"
import PropTypes from "prop-types";
import tickImg from "../../../assets/icons/TickIcon.svg"
import house1Img from "../../../assets/houses/StageHouse1.jpg"
import house2Img from "../../../assets/houses/StageHouse2.jpg"
import house3Img from "../../../assets/houses/StageHouse3.jpg"
import house1ImgWebp from "../../../assets/houses/StageHouse1.jpg"
import house2ImgWebp from "../../../assets/houses/StageHouse2.jpg"
import house3ImgWebp from "../../../assets/houses/StageHouse3.jpg"
import PictureWithBorder from "../../../UI/PictureWithBorder.jsx";

const StageDecoration = () => {
    return <div className={styles['stage__decoration']}>
        <div className={styles['decoration__container']}>
            <div className={styles['decoration__pic1']}>
                <PictureWithBorder src={house1Img} srcW={house1ImgWebp} top={-21} left={-18}/>
            </div>
            <div className={styles['decoration__pic2']}>
                <PictureWithBorder src={house2Img} srcW={house2ImgWebp} top={-13} left={-13}/>
            </div>
            <div className={styles['decoration__pic3']}>
                <PictureWithBorder src={house3Img} srcW={house3ImgWebp} top={-18} left={-18}/>
            </div>
        </div>
    </div>
}

const StageItem = ({children}) => {
    return <li className={styles["stage__list-item"]}>
        <img src={tickImg} alt="tick"/>
        <p>{children}</p>
    </li>
}

StageItem.propTypes = {
    children: PropTypes.string.isRequired,
}

const Stage = () => {
    return <section id="stage" className={styles.stage}>
        <div className={styles['stage__container']}>
            <div className={styles['stage__title']}>
                <img src={headerImg} alt="Stage Of Work With Us"/>
            </div>
            <ul className={styles['stage__list']}>
                <StageItem>
                    We start with a detailed conversation to understand your goals, preferences, and timeline.
                </StageItem>
                <StageItem>
                    If you’re buying, we begin searching for homes that meet your criteria. We provide personalized recommendations.
                </StageItem>
                <StageItem>
                    You can come come into the home and check over the house and land, make sure it suits you.
                </StageItem>
                <StageItem>
                    If after viewing the house it suits you, then we begin to conclude a contract for buying the house.
                </StageItem>
            </ul>
        </div>
        <StageDecoration/>
    </section>
}

export default Stage;