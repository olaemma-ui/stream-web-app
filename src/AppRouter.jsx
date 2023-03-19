import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
// import { MovieBanner } from "./Utils/Components/MovieBanner/MovieBanner";
import { Home } from "./Pages/Home/Home";


export const AppRouter = ()=> {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home /> } />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}