import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'

export const Container = styled.div`
    height: 80px;
    width: 100%;
    background: white;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
`

export const NavWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 800px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 70%);
        font-size: 1.8rem;
        cursor: pointer;
        color: black;
    }
`

export const NavLogo = styled(LinkR)`
    padding: 0 20px;
    color: black;
    height: 80px;
    
    & img{
        height: 80px;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    
`

export const NavItem = styled.li`
    height: 80px;

    @media screen and (max-width: 800px){
        display: none;
    }

    & > .navlink{
        color: black;
        display: flex;
        font-size: 16px;
        font-weight: 500;
        align-items: center;
        text-decoration: none;
        padding: 0 1rem;
        height: 100%;
        position: relative;
        cursor: pointer;

        &::after{
        content: "";
        display: block;
        width: 0;
        height: 10px;
        position: absolute;
        background: pink;
        top: 50%;
        left: 30px;
        z-index: -1;
        opacity: 0;
        transition: all 0.4 ease-in-out;
        transition-duration: 0.6s;
        }

        &.active::after{
            opacity: 1;
            width: 70%;
        }

        &:hover::after{
            opacity: 1;
            width: 70%;
        }
    }
`

export const NavInfo = styled.div`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 1150px){
        display: none;
    }
`

export const NavInfoItem = styled.p`
    padding: 0 20px;
    font-size: 16px;
    font-weight: 300;
    vertical-align: center;
    text-decoration: none;
    color: black;
    translate: all 0.4 ease-in-out;
    transition-duration: 0.4s;

    &:hover{
        color: pink;
    }
`