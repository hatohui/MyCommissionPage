import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

interface NavBarSetting {
  settings: {
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
    currentMode: string;
  };
}

const NavigationBar: React.FC<NavBarSetting> = ({ settings }) => {
  const setDarkMode = settings.setDarkMode;
  const location = useLocation();

  return (
    <Navbar
      className="d-flex align-content-center 
      justify-content-center z-3 vw-100 m-0"
      style={{ backdropFilter: "blur(5px)" }}
    >
      <Nav fill variant="underline" activeKey={location.pathname}>
        <NavItem>
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/gallery" className="nav-link">
            Gallery
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/commission" className="nav-link">
            Commission
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/qna" className="nav-link">
            Q/A
          </NavLink>
        </NavItem>
        <NavItem className="align-self-end">
          <div className="btn" onClick={() => setDarkMode((prev) => !prev)}>
            {settings.currentMode === "Light" ? (
              <i className="bi bi-brightness-high"></i>
            ) : (
              <i className="bi bi-moon"></i>
            )}
          </div>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
