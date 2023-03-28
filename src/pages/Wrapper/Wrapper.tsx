import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import WrapperStyles from "./Wrapper.module.scss";

const Wrapper = () => {
    return (
        <>
            <Header />
            <main className={WrapperStyles.wrapper}>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Outlet />
                </Suspense>
            </main>
        </>
    );
};
export default Wrapper;
