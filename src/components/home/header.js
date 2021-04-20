import React from "react";



export const Header = () => {

  return(
    <div className="container-header">
      <div className="wrapper-header">
        <span className="title-header">
          NFTs MARKTEPLACE
        </span>
        <span className="subtitle-header">
          on Elrond Blockchain
        </span>
        <div className="section-buttons">
          <button className="button-link">
            Explore
          </button>
          <button className="button-link">
            Create
          </button>
        </div>
      </div>
    </div>
  )
}