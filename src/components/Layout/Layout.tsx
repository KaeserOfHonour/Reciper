import LayoutStyles from "./Layout.module.scss";

interface Props {
    className?: string;
    title?: string;
    children?: React.ReactNode;
}
const Layout: React.FC<Props> = ({ className, title, children }) => {
    return (
        <section className={`${LayoutStyles.layout} ${className}`}>
            {title && <h2 className={LayoutStyles.title}>{title}</h2>}
            {children}
        </section>
    );
};

export default Layout;
