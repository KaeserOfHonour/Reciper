import HeroStyles from "./Hero.module.scss";
import Logo from "../../images/logo.png";

const Hero: React.FC = () => {
    return (
        <section className={HeroStyles.hero}>
            <img src={Logo} alt="Logo" className={HeroStyles.logo} />
            <h1 className={HeroStyles.heading}>Reciper</h1>
            <p className={HeroStyles.slogan}>Discover, create, and share delicious recipes</p>
        </section>
    );
};
export default Hero;
