import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {
  return (
    <div className = "header">
    
         <img className= "header_logo"src =" https://archive.org/download/amazon-logo/amazon-logo.png"/>
        
        <div className="header_search">
            <input className= "header_searchInput" type="text"/>
            <SearchIcon
            className="header_searchIcon" />
        </div>


        <div className = "header_nav">
            <div className="header_option">
                 
                    <span className="header_optionLineOne">Hello Guest</span>
                    <span className="header_optionLineTwo">Sign In</span>
            </div>

            <div className="header_option"> 
            <span
            className="header_optionLineOne">Returns</span>
            <span
            className="header_optionLineTwo">&orders</span>
            </div>


             
            <div className="header_option">
            <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">Prime</span>

            </div>
            <div className="header_optionBasket">
            <ShoppingCartIcon />
            <span className="header_optionLineTwoheader_basketCount">0</span>
            </div>
         
        </div>
        </div>
  )
}

export default Header