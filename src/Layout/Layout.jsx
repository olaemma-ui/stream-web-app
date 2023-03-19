import React from "react";

import './Layout.css';
import { Navbar } from "../Utils/Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";


export const Layout = () =>{
    return (
        <div className="layout">

            <section className="h-100" >
                <Navbar />

                <div className="layout-conten">
                    <Outlet />
                </div>
            </section>
        </div>
    );
}

