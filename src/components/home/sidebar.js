import React from "react";


const links = [
  "Trading Cards",
  "Virtual Worlds",
  "New",
  "Art",
  "Domain name",
  "Collectables",
  "Sports",
  "Utilty"
]

export const SidebarHome = ({currentELement, setCurrentElement}) => {

  return(
    <div className="sidebar-home">
      {links.map((item, i) => (
        <span 
          key={i}
          className={`sideLink 
            ${currentELement === item ? "currentLink" : ""}`
          }
          onClick={() => setCurrentElement(item)}
        > 
          {item}
        </span>
      ))}
    </div>
  )
}