import React from "react";
import iconFilter from "../../assets/filter.svg";


export const WrapperItems = ({children, title, withFilter}) => {

  return(
    <div className="wrapper-items">
      <div className="header-items">
        <span className="title-elemnts">
          {title}
        </span>
        {/* this an icon filter if exists */}
        {withFilter && <img src={iconFilter} alt="icon-filter"/>}
      </div>
      {children}
    </div>
  )
}