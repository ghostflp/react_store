import React from 'react';
import {FaBars, FaCartPlus} from 'react-icons/fa'
import styled from 'styled-components'
import {ProductConsumer} from '../context'
import logo from '../images/logo.svg'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <ProductConsumer>
      {
        value => {
          const{ cartItems, handleSidebar, handleCart, token, firstname, logOut } = value;

          return (
            <NavWrapper itemsInCart={cartItems} >
              <div className="nav-center">
                <FaBars className="nav-icon" onClick={handleSidebar}/>
                <img src={logo} alt="tech store logo"/>
                <div className="nav-cart">
                {token && (<span className="sign font-weight-bold">Hi, {firstname}!</span>)}
                {token && (<span className="sign logout" onClick={() => logOut()}>Logout</span>)}
                {!token && (<Link to="/login" className="sign">Login</Link>)}
                {!token && (<Link to="/sign-up" className="sign">Sign Up</Link>)}
                </div>
                <div className="nav-cart">
                  <FaCartPlus className="nav-icon" onClick={handleCart}/>
                  <div className="cart-items">{cartItems}</div>
                </div>
              </div>
            </NavWrapper>
          );
        }
      }
    </ProductConsumer>
  )
}

const NavWrapper = styled.nav`
  position:-webkit-sticky;
  position:sticky;
  top:0;
  width:100%;
  padding:1rem 1.5rem;
  background: var(--mainGrey);
  border-bottom: 3px solid var(--primaryColor);
  z-index:1;
  
  .nav-center{
    display:flex;
    align-items:center;
    justify-content:space-between;
    max-width:1170px;
    margin:0 auto;
  }
  .nav-icon{
    font-size:1.5rem;
    cursor: pointer;

  }
  .nav-cart{
    position:relative;

  }
  .cart-items{
    position:absolute;
    background: var(--primaryColor);
    color: var(--mainWhite);
    font-size: 0.85rem;
    top:-8px;
    right:-8px;
    padding: 0 5px;
    border-radius:50%;
    visibility: ${props => (props.itemsInCart > 0 ? "visible" : "hidden")};
  }
  .nav-cart .sign{
    display:block;
    text-align: right;
    margin-left: 1rem;
    font-size: 0.75rem;
    color: var(--primaryColor);
  }
  .logout:hover{
    text-decoration:underline;
    transition: var(--mainTransition);
    cursor: pointer;
  }

  @media (min-width: 567px) {
    .nav-cart .sign{
      font-size: 0.95rem;
    }
  }
`;