import React from 'react'
import './Header.css';
import FindInPageTwoToneIcon from '@material-ui/icons/FindInPageTwoTone';
import logo from './img1.svg';

function Header() {
    return (
        <div className="header">
          
         
  
           <div className="header_center">
     

                <FindInPageTwoToneIcon />

                <input></input>
                <img src={logo} alt="logo" />

              
       
   
           </div>


        </div>
    )
}

export default Header
