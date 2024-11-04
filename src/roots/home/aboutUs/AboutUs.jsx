import styles from "./AboutUs.module.css"
import headerImg from "../../../assets/titles/AboutUsHeader.svg"
import PictureWithBorder from "../../../UI/PictureWithBorder.jsx";
import {motion} from "framer-motion";
import {useEffect, useState} from "react";

const galleryVariants = (startRotate, endRotate, x, y) => ({
    initial: {
        rotateZ: startRotate,
        translateX: `calc(-50% + 0px)`,
        translateY: `calc(-50% + 0px)`,
        opacity: 1,
    },
    ended: {
        rotateZ: endRotate,
        translateX: `calc(${x > 0 ? '100%' : '-180%'} + ${x}px)`,
        translateY: `calc(${y > 0 ? '100%' : '-180%'} + ${y}px)`,
        opacity: 0.3,
    }
});

const StatisticListItem = ({mainLine, secondLine}) => {
    return <div className={styles['statistic-item']}>
        <h3>{mainLine}</h3>
        <p>{secondLine}</p>
    </div>
}

const galleryStates = [
    {},
    {
        startRotate: 12,
        endRotate: -100,
        x: 84,
        y: -84,
    },
    {
        startRotate: -5,
        endRotate: 162,
        x: -62,
        y: 62,
    },
    {
        startRotate: -11,
        endRotate: -146,
        x: 22,
        y: 22,
    },
    {
        startRotate: 6,
        endRotate: 90,
        x: -98,
        y: -98,
    },
    {
        startRotate: 0,
        endRotate: -80,
        x: 76,
        y: -76,
    }
]

const AboutUs = () => {
    const [galleryCurrent, setGalleryCurrent] = useState(5);
    const [currentTimeout, setCurrentTimeout] = useState(undefined);

    const decrementGalleryCurrent = () => {
        if (galleryCurrent > 0) setGalleryCurrent(prevState => prevState - 1);
    }

    useEffect(() => {
        clearTimeout(currentTimeout);
        const newTimout = setTimeout(() => {
            if (galleryCurrent < 5) setGalleryCurrent(prevState => prevState + 1);
        }, 2000);
        setCurrentTimeout(newTimout);
    }, [galleryCurrent])

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
                    <div className={styles["about-us__img1"]}>
                        <PictureWithBorder src={'\\src/assets/houses/AboutUsHouse1.jpg'} srcW={'src/assets/houses/AboutUsHouse1.webp'} left={17} top={17}/>
                    </div>
                </div>
                <div className={styles["about-us__img2"]}>
                    <PictureWithBorder src={'\\src/assets/houses/AboutUsHouse2.jpg'} srcW={'\\src/assets/houses/AboutUsHouse2.webp'} left={-17} top={17}/>
                </div>
            </div>
            <div className={styles["about-us__gallery"]} onClick={decrementGalleryCurrent}>
                <div className={styles["about-us__gallery__img-container"]}>
                    <picture>
                        <source className={styles['about-us__gallery__img']} type="image/webp" srcSet={'\\src/assets/gallery/0.webp'}/>
                        <img className={styles['about-us__gallery__img']} src={'\\src/assets/gallery/0.jpg'} alt="Gallery First"/>
                    </picture>
                </div>
                {[1, 2, 3, 4, 5].map(value => {
                    return <motion.div
                        transition={{
                            type: 'spring',
                            mass: 1,
                            stiffness: 80,
                            damping: 20,
                        }}
                        variants={galleryVariants(galleryStates[value].startRotate,
                            galleryStates[value].endRotate,
                            galleryStates[value].x,
                            galleryStates[value].y)}
                        initial={"initial"}
                        animate={galleryCurrent < value ? "ended" : "initial"}
                        key={value}
                        className={styles["about-us__gallery__img-container"] + " " +
                            styles["about-us__gallery__img-container--absolute"]}>
                        <picture>
                            <source className={styles['about-us__gallery__img']} type="image/webp" srcSet={`\\src/assets/gallery/${value}.webp`}/>
                            <img
                                className={styles['about-us__gallery__img']}
                                src={`\\src/assets/gallery/${value}.jpg`}
                                alt="Gallery First"
                            />
                        </picture>
                    </motion.div>
                })}
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