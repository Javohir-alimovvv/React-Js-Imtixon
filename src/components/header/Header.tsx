import React, { memo } from "react"
import "./Header.scss"
import logo from "../../assets/image/Logo.png"
import { Link, NavLink } from "react-router-dom"
import { FaChevronDown } from "react-icons/fa6";
import { IoSearch, IoMenu } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";

const Header: React.FC<{ isOpen: boolean, setIsOpen: (isOpen: boolean) => void,  search: boolean, setSearch: (search: boolean) => void}> = ({ isOpen, setIsOpen, search, setSearch}) => {
  

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearch = () => {
    setSearch(!search);
  };

  return (
    <>

      <header>
        <div id="container">
          <div className="header">
            <div className="header__logo__group">
              <button onClick={toggleSidebar} className="header__logo__group__menu__btn"><IoMenu /></button>
              <Link to={"/"}>
                <img className="logo" src={logo} alt="" />
              </Link>
            </div>
            <ul className="header__content">
              <li className="header__content__item">
                <NavLink to={"/"}><span className="header__content__item__span">Shop <FaChevronDown className="chevron__icon" /></span></NavLink>
              </li>
              <li className="header__content__item">
                <NavLink to={"/"}><span>On Sale</span></NavLink>
              </li>
              <li className="header__content__item">
                <NavLink to={"/"}><span>New Arrivals</span></NavLink>
              </li>
              <li className="header__content__item">
                <NavLink to={"/"}><span>Brands</span></NavLink>
              </li>
            </ul>
            <nav className="header__navbar">
              <form className="header__navbar__form" action="">
                <button className="header__navbar__form__btn"><IoSearch /></button>
                <input className="header__navbar__form__input" type="text" placeholder="Search for products..." />
              </form>
              <div className="header__navbar__content">
                <button onClick={toggleSearch} className="header__navbar__content__btn"><IoSearch /></button>
                <Link to={"/card"}><button className="header__navbar__content__btn__block"><BsCart3 /></button></Link>
                <button className="header__navbar__content__btn__block"><FaRegUserCircle /></button>
              </div>
            </nav>
          </div>
        </div>
      </header>

    </>
  )
}

export default memo(Header)