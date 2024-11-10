import Header from "./header/Header.jsx";
import Hero from "./hero/Hero.jsx";
import AboutUs from "./aboutUs/AboutUs.jsx";
import Advantages from "./advantages/Advantages.jsx";
import HomesForSale from "./homesForSale/HomesForSale.jsx";
import Reviews from "./reviews/Reviews.jsx";
import Stage from "./stage/Stage.jsx";
import Question from "./question/Question.jsx";
import Footer from "./footer/Footer.jsx";

const Home = () => {
    return <>
        <Header/>
        <main>
            <Hero/>
            <AboutUs/>
            <Advantages/>
            <HomesForSale/>
            <Reviews/>
            <Stage/>
            <Question/>
        </main>
        <Footer/>
    </>
}

export default Home;