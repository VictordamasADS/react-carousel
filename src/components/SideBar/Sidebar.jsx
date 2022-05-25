import React from 'react';
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarMenu, 
    SidebarLink,
    SideBtnWrap,
    SidebarRoute,
    SidebarWrapper,
    CoursesIcon,
    ChatIcon
} from '../../styles/Styled'


const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="/" onClick={toggle}>
                    <ChatIcon/>Chat
                </SidebarLink>

                <SidebarLink to="/" onClick={toggle}>
                    <CoursesIcon/>Courses
                </SidebarLink>

            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/'>Join</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>

    </SidebarContainer>
  )
}

export default Sidebar