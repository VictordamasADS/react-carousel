import React from 'react';
import {FaBars} from 'react-icons/fa';
import { 
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavLinks,
    NavItem,
    NavBtn,
    NavBtnLink,
    DevIcon
} from '../../styles/Styled'

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'><DevIcon/>Dev</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="/">Chat</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/">Courses</NavLinks>
                        </NavItem>
                        <NavBtn>
                            <NavBtnLink to="/">Join</NavBtnLink>
                        </NavBtn>
                    </NavMenu>

                </NavbarContainer>
            </Nav>
        </>    
    )
}

export default Navbar;