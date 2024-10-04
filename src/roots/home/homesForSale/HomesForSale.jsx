import styles from "./HomesForSale.module.css"
import titleImg from "../../../assets/titles/HousesHeader.svg"
import PropTypes from "prop-types";
import {motion} from "framer-motion";
import house1 from "../../../assets/houses/Houses1.jpg"
import house2 from "../../../assets/houses/Houses2.jpg"
import house3 from "../../../assets/houses/Houses3.jpg"
import house4 from "../../../assets/houses/Houses4.jpg"
import house5 from "../../../assets/houses/Houses5.jpg"
import house6 from "../../../assets/houses/Houses6.jpg"
import house7 from "../../../assets/houses/Houses7.jpg"
import house8 from "../../../assets/houses/Houses8.jpg"
import house9 from "../../../assets/houses/Houses9.jpg"
import leftArrow from "../../../assets/icons/LeftArrow.svg"
import rightArrow from "../../../assets/icons/RightArrow.svg"

import {useState} from "react";

const houses_info = [
    {
        src: house1,
        title: "House Tampa",
        price: "$ 3 500 000",
        description: "6-room private house, high ceilings, panoramic windows - such objects are very complex as you need to calculate every detail and make everything perfect. The house is modern renovation. Warm floors that will not let you freeze in winter. Each room has a unique design that the best designers have worked on.",
    },
    {
        src: house2,
        title: "Penthouse Orlndo",
        price: "$ 4 750 000",
        description: "5-room private house in eco style. The house is located in a large cottage village near the forest, the air is always clean. The house is built with natural eco-friendly materials. Panoramic windows give a lot of light into the house. Rich luxury hidden in small details. There is a place for plants on the territory.",
    },
    {
        src: house3,
        title: "House Sarasota",
        price: "$ 2 990 000",
        description: "Featuring spacious 5 rooms filled with natural light, the property includes a large living area, a fully equipped kitchen, multiple bedrooms, and bathrooms. Outside, enjoy a well-maintained garden and a private parking space.  Ideal for families a peaceful retreat, this home is located in a quiet, safe neighborhood.",
    },
    {
        src: house4,
        title: "House Florida",
        price: "$ 5 545 000",
        description: "This private house for sale offers a perfect blend of comfort and modern living. Featuring spacious rooms filled with natural light, the property includes a large living area, a fully equipped kitchen, multiple bedrooms, and bathrooms. Outside, enjoy a well-maintained garden and a private parking space.",
    },
    {
        src: house5,
        title: "House Key West",
        price: "$ 4 700 000",
        description: "This stunning modern home is designed for both comfort and style, with an expansive open floor plan and floor-to-ceiling windows that maximize light and views. The sleek kitchen, spa-like bathrooms, and energy-efficient features make this a dream home for the discerning buyer.",
    },
    {
        src: house6,
        title: "House Miami",
        price: "$ 7 200 000",
        description: "Experience the future of living in this ultra-modern home equipped with the latest smart home technology. From automated lighting and climate control to advanced security systems, this residence offers unparalleled convenience and luxury. Every detail has been meticulously crafted for a high-end, modern lifestyle.",
    },
    {
        src: house7,
        title: "House Boca Raton",
        price: "$ 4 900 000",
        description: "A unique blend of indoor and outdoor living, this modern home features an expansive deck and landscaped garden, perfect for entertaining or relaxing. The sleek interior offers a seamless flow between living spaces, with cutting-edge finishes and a bright, airy feel throughout. Made with special design.",
    },
    {
        src: house8,
        title: "Penthouse Jacksonville",
        price: "$ 4 900 000",
        description: "Step into a world of modern luxury with this private home. Featuring state-of-the-art appliances, spacious living areas, and a minimalist design, this residence offers the ideal blend of sophistication and convenience. Enjoy peaceful living in this quiet neighborhood, just minutes away from top city attractions.",
    },
    {
        src: house9,
        title: "Penthouse Naples",
        price: "$ 2 750 000",
        description: "This contemporary home boasts a cutting-edge design, offering clean lines, open spaces, and luxurious finishes. With large windows, natural light floods the interiors, highlighting the elegant details throughout. Perfect for those seeking a combination of comfort, style, and functionality.",
    },
]

const HouseCard = ({src, title, price, description}) => {
    const [isHover, setIsHover] = useState(false);

    return <motion.div
        className={styles['house-card']}
        onHoverStart={() => setIsHover(true)}
        onHoverEnd={() => setIsHover(false)}
    >
        <motion.div
            className={styles['house-card__visible']}
            animate={isHover ? {opacity: 0} : {opacity: 1}}
        >
            <div className={styles['house-card__imagebox']}>
                <img src={src} alt={title}/>
            </div>
            <div className={styles['house-card__info']}>
                <p className={styles['house-card__title']}>{title}</p>
                <p className={styles['house-card__price']}>{price}</p>
            </div>
        </motion.div>
        <motion.div
            className={styles['house-card__hover']}
            animate={isHover ? {opacity: 1} : {opacity: 0}}
        >
            <p className={styles['house-card__title']}>{title}</p>
            <p className={styles['house-card__description']}>{description}</p>
            <motion.button
                onClick={() => location.href = "/contact-us"}
                className={styles['house-card__btn']}
                animate={{
                    color: "rgba(255, 255, 255, 1)",
                    backgroundColor: "transparent",
                }}
                whileHover={{
                    color: "rgba(0, 0, 0, 1)",
                    backgroundColor: "rgba(255, 255, 255, 0.8)"
                }}
            >More information</motion.button>
        </motion.div>
    </motion.div>
}

const Carousel = () => {
    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(true);
    const [translateX, setTranslateX] = useState(0);

    const onClickLeftArrowHandler = () => {
        if (!showLeft) return;
        let newTranslate = translateX + 424;
        setTranslateX(newTranslate);

        setShowRight(true);
        if (newTranslate === 0){
            setShowLeft(false);
        }
    }

    const onClickRightArrowHandler = () => {
        if (!showRight) return;
        let newTranslate = translateX - 424;
        setTranslateX(newTranslate);

        setShowLeft(true);
        if (document.documentElement.clientWidth <= 900){
            setShowRight(newTranslate > -3230);
        }else if (document.documentElement.clientWidth <= 1300){
            setShowRight(newTranslate > -2820);
        }else{
            setShowRight(newTranslate > -2400);
        }
    }

    return <div className={styles['carousel']}>
        <div className={styles['carousel__inner']}>
            <motion.div
                className={styles['carousel__container']}
                animate={{
                    translateX: translateX,
                }}
            >
                {houses_info.map((item, index) => <HouseCard
                    src={item.src}
                    key={index}
                    title={item.title}
                    description={item.description}
                    price={item.price}/>)}
            </motion.div>
        </div>
        <motion.button
            className={styles['left-arrow-btn']}
            animate={showLeft ? {
                opacity: 1,
                translateX: 0,
            } : {
                opacity: 0,
                translateX: 100,
            }}
            onClick={onClickLeftArrowHandler}
        >
            <img src={leftArrow} alt=""/>
        </motion.button>
        <motion.button
            className={styles['right-arrow-btn']}
            animate={showRight ? {
                opacity: 1,
                translateX: 0,
            } : {
                opacity: 0,
                translateX: -100,
            }}
            onClick={onClickRightArrowHandler}
        >
            <img src={rightArrow} alt=""/>
        </motion.button>
    </div>
}

HouseCard.propTypes = {
    src: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
}

const HomesForSale = () => {
    return <section id="homes" className={styles.homes}>
        <div className={styles['homes__container']}>
            <img src={titleImg} alt="Homes For Sales"/>
            <Carousel/>
        </div>
    </section>
}

export default HomesForSale