import styles from "./Reviews.module.css"
import headerImg from "../../../assets/titles/SaysHeader.svg"
import PropTypes from "prop-types";

const Review = ({text, author, date}) => {
    return <div className={styles.review}>
        <div className={styles['review__text-block']}>
            <p className={styles['review__decoration']}>’’</p>
            <p className={styles['review__text']}>{text}</p>
        </div>
        <div className={styles['review__info-block']}>
            <p className={styles['review__author']}>{author}</p>
            <p className={styles['review__data']}>{date}</p>
        </div>
    </div>
}

Review.propTypes = {
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
}

const Reviews = () => {
    return <section id="reviews" className={styles.reviews}>
        <div className={styles['reviews__container']}>
            <div className={styles['reviews__title']}>
                <img src={headerImg} alt="What Our Clients Says"/>
            </div>
            <div className={styles['reviews__list']}>
                <Review
                    author="John Mclare"
                    date="17.06.2024"
                    text="Working with Real Estate was an absolute pleasure. They took the time to understand exactly what we were looking for and found us the perfect home in no time. Their knowledge of the market and attention to detail made the entire process smooth and stress-free. We couldn’t be happier!"
                />
                <Review
                    author="Rose Klair"
                    date="05.07.2024"
                    text="Real Estate was incredible from start to finish. Their professionalism, expertise, and dedication were evident throughout the entire process. They negotiated a great deal for us and made sure we were informed every step of the way. We highly recommend Real Estate to everyone."
                />
                <Review
                    author="Barb Wayne"
                    date="21.08.2024"
                    text="Real Estate exceeded all our expectations. They were professional, honest, and worked tirelessly to ensure we got the best possible price for our home. Their expertise was invaluable, and we would not hesitate to recommend Real Estate to anyone looking to buy or sell a property."
                />
            </div>
        </div>
    </section>
}

export default Reviews;