import React, { memo } from 'react'
import "./Footer.scss"
import { Link, NavLink } from 'react-router-dom'
import { FaTwitter, FaGithub } from "react-icons/fa6";
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import foologo from "../../assets/image/Logo.png"
import visa from "../../assets/image/visa.png"
import master_card from "../../assets/image/mastercard.png"
import pay_pol from "../../assets/image/paypal.png"
import aplle_pay from "../../assets/image/pay.png"
import gogle_pay from "../../assets/image/goglepay.png"
import { TfiEmail } from "react-icons/tfi";

const Footer: React.FC = () => {
  return (
    <>

      <footer className='footer__big'>
        <div id="container">
          <div className='footer__top'>
            <h2 className='footer__top__title'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
            <form className='footer__top__form' action="">
              <div className='footer__top__form__group'>
                <TfiEmail className='footer__top__form__group__icon' />
                <input required className='footer__top__form__group__input' type="email" placeholder='Enter your email address' />
              </div>
              <button className='footer__top__form__btn'>Subscribe to Newsletter</button>
            </form>
          </div>
        </div>
        <div id="container">
          <div className="footer">
            <div className='footer__first__content'>
              <div className='footer__first__content__left'>
                <Link to={"/"}>
                  <img className='footer__first__content__left__logo' src={foologo} alt="" />
                </Link>
                <p className='footer__first__content__left__text'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                <div className='footer__first__content__left__group'>
                  <div className='footer__first__content__left__group__icons'><FaTwitter /></div>
                  <div className='footer__first__content__left__group__icons'><TiSocialFacebook /></div>
                  <div className='footer__first__content__left__group__icons'><FaInstagram /></div>
                  <div className='footer__first__content__left__group__icons'><FaGithub /></div>
                </div>
              </div>
              <div className='footer__first__content__right'>
                <ul className='footer__first__content__right__content'>
                  <li className='footer__first__content__right__content__item__bold'>
                    <NavLink to={"/"}><span>Company</span></NavLink>
                  </li>
                  <li className='footer__first__content__right__content__item'>
                    <NavLink to={"/"}><span>About</span></NavLink>
                  </li>
                  <li className='footer__first__content__right__content__item'>
                    <NavLink to={"/"}><span>Features</span></NavLink>
                  </li>
                  <li className='footer__first__content__right__content__item'>
                    <NavLink to={"/"}><span>Works </span></NavLink>
                  </li>
                  <li className='footer__first__content__right__content__item'>
                    <NavLink to={"/"}><span>Career</span></NavLink>
                  </li>
                </ul>
                <ul className='footer__first__content__right__content'>
                  <li className='footer__first__content__right__content__item__bold'>
                    <NavLink to={"/"}><span>Help</span></NavLink>
                  </li>
                  <li className='footer__first__content__right__content__item'>
                    <NavLink to={"/"}><span>Customer Support</span></NavLink>
                  </li>
                  <li className='footer__first__content__right__content__item'>
                    <NavLink to={"/"}><span>Delivery Details</span></NavLink>
                  </li>
                  <li className='footer__first__content__right__content__item'>
                    <NavLink to={"/"}><span>Terms & Conditions</span></NavLink>
                  </li>
                  <li className='footer__first__content__right__content__item'>
                    <NavLink to={"/"}><span>Privacy Policy</span></NavLink>
                  </li>
                </ul>
                <ul className='footer__first__content__right__content'>
                  <li className='footer__first__content__right__content__item__bold'>
                    <NavLink to={"/"}><span>FAQ</span></NavLink>
                  </li>
                  <li className='footer__first__content__right__content__item'>
                    <NavLink to={"/"}><span>Account</span></NavLink>
                  </li>
                  <li className='footer__first__content__right__content__item'>
                    <NavLink to={"/"}><span>Manage Deliveries</span></NavLink>
                  </li>
                  <li className='footer__first__content__right__content__item'>
                    <NavLink to={"/"}><span>Orders </span></NavLink>
                  </li>
                  <li className='footer__first__content__right__content__item'>
                    <NavLink to={"/"}><span>Payments</span></NavLink>
                  </li>
                </ul>
                <ul className='footer__first__content__right__content'>
                  <li className='footer__first__content__right__content__item__bold'>
                    <NavLink to={"/"}><span>Resources</span></NavLink>
                  </li>
                  <li className='footer__first__content__right__content__item'>
                    <NavLink to={"/"}><span>Free eBooks</span></NavLink>
                  </li>
                  <li className='footer__first__content__right__content__item'>
                    <NavLink to={"/"}><span>Development Tutorial</span></NavLink>
                  </li>
                  <li className='footer__first__content__right__content__item'>
                    <NavLink to={"/"}><span>How to - Blog </span></NavLink>
                  </li>
                  <li className='footer__first__content__right__content__item'>
                    <NavLink to={"/"}><span>Youtube Playlist</span></NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className='footer__line'></div>
            <div className='footer__second'>
              <h3 className='footer__second__title'>Shop.co © 2000-2023, All Rights Reserved</h3>
              <div className='footer__second__group'>
                <img className='footer__second__group__image' src={visa} alt="" />
                <img className='footer__second__group__image' src={master_card} alt="" />
                <img className='footer__second__group__image' src={pay_pol} alt="" />
                <img className='footer__second__group__image' src={aplle_pay} alt="" />
                <img className='footer__second__group__image' src={gogle_pay} alt="" />
              </div>
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}

export default memo(Footer)