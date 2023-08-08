import { Outlet, Link } from "react-router-dom";
import "./Layout.css"

const Layout = () => {
    return (
      <div className="main">
        <nav>
          <div className="nav">
              <Link to="/">
                <button type="button" className="buttons">Profile</button>
              </Link>
              <Link to="/resume">
                <button type="button" className="buttons">Resume</button>
              </Link>
              <Link to="/projects">
                <button type="button" className="buttons">Projects</button>
              </Link>
          </div>
              
            
        </nav>
  
        <Outlet />
      </div>
    )
  };
  
  export default Layout;