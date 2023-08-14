import React from 'react'; // Don't forget to import React
import { useEffect, useState } from "react";
import './index.css'
import logo from './images/logo.jpg';
import { Home } from './home';

const Header = () => {


    // handels the menu click to change the page title
    const menuClickHandler = (page) => {
        setCurrentPage(page);
    };
    //The usefect helps the user to see the page title and home or initial is set to abdulahi...
    const [currentPage, setCurrentPage] = useState("Abdullahi The DevStudent")
    useEffect(()=> {
        document.title = currentPage;
    }, [currentPage]);



    return (    
        <header className="flex items-center justify-between p-4 bg-blue-900">

            <div className="flex items-center">
                <img src={logo} alt="Website Logo" className="rounded-full w-12 h-12 mr-2 cursor-pointer" onClick={Home} />
                    <p className="font-semibold text-white">Abdullahi The DevStudent</p>            
            </div>

        <nav>            
            <ul className="flex space-x-4">
                <li className="hover:bg-sky-700 "                
                    onClick={() => menuClickHandler("Abdullahi The DevStudent")}>
                    <a href="./home" className="text-blue-500">Home</a>
                </li>
                <li className="hover:underline"
                    onClick={() => menuClickHandler("Users")}>
                    <a href="./users" className="text-blue-500">Users</a>
                </li>
                <li className="hover:underline"
                    onClick={() => menuClickHandler("Counter")}>
                    <a href="./counter" className="text-blue-500 text">Counter</a>
                </li>
                <li className="hover:underline"
                    onClick={() => menuClickHandler("Engineers")}>
                    <a href="./engineers" className="text-blue-500">Engineers</a>
                </li>
                <li className="hover:underline"
                    onClick={() => menuClickHandler("Reducer")}>
                    <a href="./reducer" className="text-blue-500">Reducer</a>
                </li>
            </ul>
        </nav>
        </header>
    );
};

export default Header;
