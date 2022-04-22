import React from "react";
import { useLocation, Link, NavLink } from "react-router-dom";
import Routes from "../Routes";
function AppRouter() {
  const location = useLocation();

  return (
    <div className="bst_setting">
        <div className="sidebar_menu">
            <nav className="sidebar">
                <NavLink className={(navData) => (navData.isActive ? "active_link" : 'none')} to="/">General</NavLink>
                <NavLink className={(navData) => (navData.isActive ? "active_link" : 'none')} to="/instagram">Instagram</NavLink>
                <NavLink className={(navData) => (navData.isActive ? "active_link" : 'none')} to="/themesetting">Theme Setting</NavLink>
            </nav>
        </div>
        <div className="content">
            <Routes />
        </div>
        
    </div>
  );
}

export default AppRouter;