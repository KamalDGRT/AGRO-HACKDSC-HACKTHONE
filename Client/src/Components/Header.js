import React from 'react'
import './Header.css' 
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function Header() {
    return (
        <div className='header_container'>
            <h1>Fresh&Cheap</h1>
            <div className="header_search">
                <button>All Products<ArrowDropDownIcon/></button>
                <input type="text" name = "search-item" placeholder='Search item...'/>
                <SearchIcon className='header_searchicon'/>
            </div>
            <div className="header_nav">
                <PersonIcon/>
                <ShoppingCartIcon/>
                <h4>5</h4>
            </div>
        </div>
    )
}

export default Header;
