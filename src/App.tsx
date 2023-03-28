import { Suspense } from "react";
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from "react-router-dom";
import Header from "./components/Header/Header";
import "./scss/styles.scss";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/"
            element={
                <>
                    <Header />
                    <main>
                        <Suspense fallback={<h1>Loading...</h1>}>
                            <Outlet />
                        </Suspense>
                    </main>
                </>
            }
        >
            <Route index element={<h1>Hello World!</h1>} />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
