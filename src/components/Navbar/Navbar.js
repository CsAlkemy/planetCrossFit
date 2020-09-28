import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyles";
import Logo from "../../images/logo-planet-crossfit.png"
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavBtnLink,
} from "./Navbar.elements";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  var extarnal_link="https://planet.wodbuster.com/account/login.aspx?ReturnUrl=%2Fuser%2F"

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" onClick={closeMobileMenu}>
              <figure className='image is-128x128 customImage'>
                  <img src={Logo} alt='logoforPage'></img>
              </figure>
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/schedule" onClick={closeMobileMenu}>
                  Horarios
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/price" onClick={closeMobileMenu}>
                  Precios
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to={extarnal_link} target="_blank" rel="norefferal" onClick={closeMobileMenu}>
                  Reservar
                </NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/signUp">
                    <Button primary>Pureba Gratis</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/signUp">
                    <Button onClick={closeMobileMenu} fontBig primary>
                      Pureba Gratis
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
