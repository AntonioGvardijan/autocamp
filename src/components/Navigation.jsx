import React from 'react';
import logo from '../images/logo.svg'
import {NavLink} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import {Container, NavWrapper, NavLogo, NavMenu, NavItem, NavInfo, NavInfoItem, MobileIcon} from '../styles/NavigationStyle'

const Navigation = ({toggle}) => {



    function getLastPart(url) {
        var parts = url.split("/");
        return (url.lastIndexOf('/') !== url.length - 1 
           ? parts[parts.length - 1]
           : parts[parts.length - 2]);
    }

    console.log(getLastPart(window.location.href));

    return(
        <Container>
            <NavWrapper>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavLogo to="/">
                        <img src={logo} alt="Logo"/>
                    </NavLogo>
                    <NavItem>
                        <NavLink activeClassName="active" className="navlink"  to="/">
                            Početna
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="navlink"  to="/ponuda">
                            Ponuda
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="navlink" to="/galerija">
                            Galerija
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="navlink" to="/cjenik">
                            Cjenik
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="navlink" to="/lokacija">
                            Lokacija
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="navlink" to="/kontakt">
                            Kontakt
                        </NavLink>
                    </NavItem>
                </NavMenu>
                <NavInfo>
                    <NavInfoItem>
                        +385 98 111 222
                    </NavInfoItem>
                    <NavInfoItem>
                        neki.mail@apartmani.hr
                    </NavInfoItem>
                </NavInfo>
            </NavWrapper>
        </Container>
    )
}

export default Navigation;