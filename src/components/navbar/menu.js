import React from 'react';
import { Link } from 'react-router-dom';


const links = [
  {
    name : "Browse",
    link : "/browse"
  },
  {
    name : "Activity",
    link : "/activity"
  },
  {
    name : "Ranking",
    link : "/ranking"
  },
  {
    name : "Blog",
    link : "/blog"
  },
  {
    name : "Community",
    link : "/community"
  },
  {
    name : "Create",
    link : "/create"
  },
]

export const MenuNavbar = () => {
  return(
    <div className="menu-navbar">
      {links.map((item, i) => (
        <Link key={i} to={item.link} className="link-element">
          <span >
            {item.name}
          </span>
        </Link>
      ))}
      <button className="button-login">
        Login
      </button>
    </div>
  )
}