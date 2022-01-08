import React, { useState } from 'react';
import {Link, Outlet } from "react-router-dom";

export const Header = () => {

  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <header className="header">
        <a ><Link to="/"><img src="./img/logo.png" alt="logo"/></Link></a>
        <div>
          <ul className={open ? 'navbar active' : 'navbar'}>
            <li>
              {/* <a className="active"> */}
              <a className="active">
                <Link to="/">Home</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to="/shop">Shop</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to="/blog">Blog</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to="/about">About us</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to="/contact">Contact</Link>
              </a>
            </li>
            <li className="lg-bar"><a href=""><i className="fas fa-shopping-cart"/></a></li>
            <div onClick={() => setOpen(!open)} className="close"><i className="far fa-times"/></div>
          </ul>
        </div>
        <div className="burger">
          <a href="#"><i className="fas fa-shopping-cart"/></a>
          <i onClick={() => setOpen(!open)} className="bar fas fa-outdent"/>
        </div>
      </header>
      <Outlet />
    </>
  );
};
