import HeroStyles from "./Hero.module.scss";
import HeroImg from "../../images/hero.webp";

const Hero: React.FC = () => {
    return (
        <section className={HeroStyles.hero}>
            <section className={HeroStyles.info}>
                <h1 className={HeroStyles.heading}>Reciper</h1>
                <p className={HeroStyles.slogan}>Discover, create, and share delicious recipes</p>
            </section>
            <img src={HeroImg} alt="Hero" className={HeroStyles.image} />
        </section>
    );
};
export default Hero;
