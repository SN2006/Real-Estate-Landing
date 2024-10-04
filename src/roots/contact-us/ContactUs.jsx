import styles from "./ContactUs.module.css"
import {useState} from "react";
import Backdor from "../../UI/Backdor.jsx";
import {motion} from "framer-motion";

const ContactUs = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const onSubmitHandler = () => {
        if (name.trim() !== "" && phone.trim() !== "" && email.trim() !== "" && phone.trim() !== "" && email.trim() !== "") {
            setName("");
            setPhone("");
            setEmail("");
            location.href = "/";
        }
    }

    return <main className={styles["contact-us"]}>
        <form className={styles["contact-us__form"]}>
            <h2>Leave your details and we will call you back</h2>
            <input
                type="text"
                placeholder="Your name"
                onChange={event => setName(event.target.value)}
            />
            <input
                type="phone"
                placeholder="Phone number"
                onChange={event => setPhone(event.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                onChange={event => setEmail(event.target.value)}
            />
            <motion.button
                className={styles["contact-us__submit"]}
                animate={{
                    background: "transparent",
                    color: "white",
                }}
                whileHover={{
                    background: "white",
                    color: "black",
                }}
                onClick={onSubmitHandler}
            >
                Send
            </motion.button>
        </form>
        <motion.a
            href="/"
            className={styles['back-link']}
            animate={{
                color: "rgba(255, 255, 255, 1)",
                borderColor: "rgba(255, 255, 255, 1)"
            }}
            whileHover={{
                color: "#acacac",
                borderColor: "#acacac"
            }}
        >
            back
        </motion.a>
        <Backdor/>
    </main>
}

export default ContactUs;