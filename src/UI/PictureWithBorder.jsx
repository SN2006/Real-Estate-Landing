import styles from "./PictureWithBorder.module.css"
import PropTypes from "prop-types";

const PictureWithBorder = ({src, left, top}) => {
    return <div className={styles.imageBox}>
        <img src={src} alt="house"/>
        <div
            className={styles.border}
            style={{left: `${left}px`, top: `${top}px`}}
        ></div>
    </div>
}

PictureWithBorder.propsType = {
    src: PropTypes.string.isRequired,
    left: PropTypes.number,
    top: PropTypes.number,
}

export default PictureWithBorder;