import React from 'react';
import {Link} from 'react-router-dom'; //it imports links from react-router-dom
import logo from './invision.png';
import ButtonContainer from '../Button/button';
import styled from 'styled-components';

class Navbar extends React.Component{
  render(){
    return(
        <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">

            <Link to="/" > 
                <img src={logo} alt="" className="navbar-brand" style={{height:'40px', width:'100px'}}/> 
            </Link>



            <ul className="navbar-nav align-items-center">
                <li className="nav-items ml-5">
                <Link to="/" className="nav-link">
                         <h4>Products</h4>  
                </Link>
                </li>
            </ul>


                <Link to= "/cart" className="ml-auto">
                        <ButtonContainer>
                            <span className="mr-2">
                                <i className="fas fa-cart-plus" />
                            </span>
                            My Cart
                        </ButtonContainer>
                </Link>


        </NavWrapper>
    );
   }
} 

  

const NavWrapper = styled.nav `

background: #000;
.nav-link{
    color:#fff !important;
    font-size:1.3rem;
}

`

export default Navbar;
