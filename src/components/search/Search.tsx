import React, { memo } from 'react'
import "./Search.scss"
import { IoSearch } from "react-icons/io5";


const Search: React.FC<{ search: boolean, setSearch: (search: boolean) => void }> = ({ search, setSearch }) => {

    const toggleSearch = () => {
        setSearch(!search);
    };

    return (
        <div className='search'>

            <div className={`search__overlay ${search ? "active" : ""}`}
                onClick={toggleSearch} >
            </div>

            <div className={`header__search ${search ? "header__search__toggle" : ""}`}>
                <form className="header__search__form" action="">
                    <button className="header__search__form__btn"><IoSearch /></button>
                    <input className="header__search__form__input" type="text" placeholder="Search for products..." />
                </form>
            </div>
        </div>
    )
}

export default memo(Search)