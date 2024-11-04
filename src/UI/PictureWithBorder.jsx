import styles from "./PictureWithBorder.module.css"

const PictureWithBorder = ({src, srcW, left, top, hidden}) => {
    return <div className={styles.imageBox + (hidden ? styles.hidden : "")}>
        <picture>
            <source className={styles['img']} type="image/webp" srcSet={srcW}/>
            <img className={styles['img']} src={src} alt="house"/>
        </picture>
        <div
            className={styles.border}
            style={{left: `${left}px`, top: `${top}px`}}
        ></div>
    </div>
}

export default PictureWithBorder;