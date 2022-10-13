import "./Nav.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 

function Nav() {
  const [show, handleShow] = useState(false);
  //Avatar Button's Function represented Below, will be called by the onClick present in "nav_avatar"
  const navigate = useNavigate();
  function handleAvatar() {
    navigate("/profile");
  };
  //https://www.digitalocean.com/community/tutorials/react-react-router-v6

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      {/* only render the nav_black class if the show variable is true*/}
      <div className="nav_contets">
        <img
          onClick={() => navigate("/")}
          className="nav_logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="Netflix"
        />
        <img
          onClick={handleAvatar}
          className="nav_avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
          alt="Profile"
        />
      </div>
    </div>
  );
}

export default Nav;
