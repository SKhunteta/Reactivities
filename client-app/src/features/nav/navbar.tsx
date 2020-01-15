import React from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';

const NavBar = () => {
    return (
        <Menu fixed='top' inverted>
            <Container>
            <Menu.Item header>
            <img src="/assets/logo.png" alt="logo" style={{marginRight: 10}}/>
            Reactivities
            </Menu.Item>
            <Menu.Item name='home' />
            <Menu.Item name = 'messages' />
            <Menu.Item name = 'friends' />
            </Container>
        </Menu>
    )
}

export default NavBar;