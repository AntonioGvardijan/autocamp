import React from 'react'
import {NavLink} from 'react-router-dom'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
} from '../styles/MobileNavigationStyle';

const MobileNavigation = ({isOpen, toggle}) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                    <CloseIcon></CloseIcon>
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <NavLink className="navlink" to="/" onClick={toggle}>Početna</NavLink>

                        <NavLink className="navlink" to="/ponuda" onClick={toggle}>Ponuda</NavLink>

                        <NavLink className="navlink" to="/galerija" onClick={toggle}>Galerija</NavLink>

                        <NavLink className="navlink" to="/cjenik" onClick={toggle}>Cjenik</NavLink>

                        <NavLink className="navlink" to="/lokacija" onClick={toggle}>Lokacija</NavLink>

                        <NavLink className="navlink" to="/kontakt" onClick={toggle}>Kontakt</NavLink>
                    </SidebarMenu>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default MobileNavigation