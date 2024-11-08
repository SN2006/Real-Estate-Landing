import styles from "./Question.module.css"
import headerImg from "../../../assets/titles/QuestionsHeader.svg"
import bgElement1 from "../../../assets/background/QuestionsBg1.svg"
import bgElement2 from "../../../assets/background/QuestionsBg2.svg"
import arrow from "../../../assets/icons/ArrowBottom.svg"
import PropTypes from "prop-types";
import {motion} from "framer-motion";
import {useState} from "react";

const AccordionItem = ({question, answer}) => {
    const [open, setOpen] = useState(false);

    const onClickButtonHandler = () => {
        setOpen(prevState => !prevState);
    }

    return <motion.div
        className={styles["accordion__item"]}
        animate={open ? {gap: 17} : {gap: 0}}
    >
        <button className={styles['accordion__item-btn']} onClick={onClickButtonHandler}>
            <p>
                {question}
            </p>
            <motion.img
                className={styles['accordion__item-btn__img']}
                src={arrow}
                alt="arrow"
                animate={open ? {
                    rotate: 180,
                } : {
                    rotate: 0,
                }}
            />
        </button>
        <motion.p
            className={styles['accordion__item-text']}
            animate={open ? {

            } : {
                height: 0,
            }}
        >
            {answer}
        </motion.p>
    </motion.div>
}

AccordionItem.propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
}

const Accordion = () => {
    return <div className="question__accordion">
        <AccordionItem
            question="How can I schedule a showing to view a home?"
            answer="Simply contact us via phone or email to schedule a private showing at a time that’s convenient for you. We’ll work around your schedule and provide personalized tours of the homes you’re interested in."
        />
        <AccordionItem
            question="How much commission do you charge?"
            answer="Our commission rates are competitive and typically range from 5-6% of the sale price, split between the buyer’s and seller’s agents. We discuss all fees upfront, so there are no surprises."
        />
        <AccordionItem
            question="Can I buy a home with bad credit?"
            answer="Yes, it’s possible to buy a home with bad credit, though it may affect your interest rates and loan terms. We can help connect you with lenders who specialize in working with buyers with less-than-perfect credit."
        />
        <AccordionItem
            question="How much are closing costs, and who pays them?"
            answer="Closing costs typically range from 2-5% of the home’s sale price and include fees such as title insurance, attorney fees, and loan processing fees. Both buyers and sellers have closing costs, though what each party pays can be negotiated."
        />
        <AccordionItem
            question="What is the process for buying a home?"
            answer="First, we’ll help you get pre-approved for a mortgage, then search for homes that match your criteria. After selecting a property, we’ll negotiate the offer, assist with inspections, and guide you through closing."
        />
    </div>
}

const Form = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [question, setQuestion] = useState('');
    const [isSending, setIsSending] = useState(false);

    const onSubmit = () => {
        if (name.length !== 0 && phone.length !== 0 && email.length !== 0 && question.length !== 0) {
            setIsSending(true);
            setName("");
            setPhone("");
            setEmail("");
            setQuestion("");
        }
    }

    return <div className={styles["question__form-container"]}>
        <h3 className={styles["question__form-title"]}>Still have questions?</h3>
        <div className={styles["question__form-inputs"]}>
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
            <div className={styles['question__form-text']}>
                <label>Your question</label>
                <textarea
                    onChange={event => setQuestion(event.target.value)}
                >

                </textarea>
            </div>
        </div>
        <motion.button
            className={styles['question__form-submit']}
            animate={isSending ? {
                background: "rgba(182, 182, 182, 1)",
            } : {
                background: "rgba(254, 235, 166, 1)",
            }}
            whileHover={{
                background: "rgba(240, 204, 128, 1)",
            }}
            disabled={isSending}
            onClick={onSubmit}
        >
            Send
        </motion.button>
    </div>
}

const Decoration = () => {
    return <div className={styles["question__decoration"]}>
        <img src={bgElement1} alt=""/>
        <img src={bgElement2} alt=""/>
    </div>
}

const Question = () => {
    return <section id="question" className={styles["question"]}>
        <div className={styles["question__container"]}>
            <div className={styles["question__info"]}>
                <div className={styles["question__title"]}>
                    <img src={headerImg} alt="Question"/>
                </div>
                <Accordion/>
            </div>
            <div className={styles['question__form']}>
                <Form/>
            </div>
        </div>
        <Decoration/>
    </section>
}

export default Question