import React, { memo } from 'react'
import "./Sidebar.scss"
import { MdMenuOpen } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa6";
import { Link, NavLink } from 'react-router-dom';


const Sidebar: React.FC<{ isOpen: boolean, setIsOpen: (isOpen: boolean) => void }> = ({ isOpen, setIsOpen }) => {

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };


    return (
        <>

            <div>
                <div
                    className={`overlay ${isOpen ? "active" : ""}`}
                    onClick={toggleSidebar}
                ></div>

                <div className={`sidebar ${isOpen ? "active" : ""}`}>
                    <button className="close-btn" onClick={toggleSidebar}>
                        <MdMenuOpen />
                    </button>
                    <div className="sidebar-content">
                        <Link to={"/"}>
                            <h3 className='sidebar__logo'>SHOP.CO</h3>
                        </Link>
                        <ul className="sidebar__content">
                            <li className="sidebar__content">
                                <NavLink to={"/"}><span className="sidebar__content__item__span">Shop <FaChevronDown className="chevron__icon" /></span></NavLink>
                            </li>
                            <li className="sidebar__content">
                                <NavLink to={"/"}><span>On Sale</span></NavLink>
                            </li>
                            <li className="sidebar__content">
                                <NavLink to={"/"}><span>New Arrivals</span></NavLink>
                            </li>
                            <li className="sidebar__content">
                                <NavLink to={"/"}><span>Brands</span></NavLink>
                            </li>
                        </ul>
                    </div>
                </div>


            </div>

        </>
    )
}

export default memo(Sidebar)