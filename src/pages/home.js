import React, { useState } from "react";
import { SidebarHome } from "../components/home/sidebar";


const Home = () => {

  const [currentElement , setCurrentElement] = useState("Collectables");

  return(
    <div className="container-home">
      <SidebarHome 
        currentELement={currentElement}
        setCurrentElement={setCurrentElement}
      />
      <div className="wrapper-home">
        
      </div>
    </div>
  )
}

export default Home ;