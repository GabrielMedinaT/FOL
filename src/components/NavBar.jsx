import React, { useState } from "react";
import "./NavBar.css";

const NavBar = ({render, setRender } ) => {

  //metodo para cambiar el useState
  const changeRender = (value) => {
    setRender(value);
  };
  return (
    <div className="Navbar">
      <div className="renders">
        <div onClick={() => changeRender("primeros")} className="links">
          Primeros Auxilios
        </div>
        <div onClick={() => changeRender("heridas")} className="links">
          Heridas
        </div>
        <div onClick={() => changeRender("fracturas")} className="links">
          Fracturas
        </div>
        <div onClick={() => changeRender("quemaduras")} className="links">
          Quemaduras
        </div>
        <div onClick={() => changeRender("reanimacion")} className="links">
          Reanimación
        </div>
      </div>
    </div>
  );
};

export default NavBar;
