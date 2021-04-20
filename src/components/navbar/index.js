import React from 'react';
import { useForm } from "react-hook-form";

import { MenuNavbar } from './menu';

import  logoRality  from '../../assets/logo.png';
import  searchLogo  from '../../assets/search.svg';


const Navbar = () => {
  
  const { register, handleSubmit} = useForm();
  const { ref, ...rest } = register('value_name')
  const onSubmit = (data) => {
    console.log(data)
  }
  return(
    <div className="wrapper-navbar">
      <img src={logoRality} alt="logo-rarity" width="127" height="58"/>
      <form className="form-search" onSubmit={handleSubmit(onSubmit)}>
        <img className="icon-search" src={searchLogo} alt="search" />
        <input className="input-search" placeholder="search" ref={ref} {...rest}/>
      </form>
      <MenuNavbar />
    </div>
  )
}

export default Navbar ;