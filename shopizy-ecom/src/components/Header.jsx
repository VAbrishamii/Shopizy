import {Home, ShoppingCart, User, Headset } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import {HeaderContainer, Logo, NavLinks, IconLink} from '../styles/HeaderStyles';  
import logo from '../assets/logo.jpg';

const Header = () => {
    return (
       <HeaderContainer>
        <link to ="/">
            <Logo src={logo} alt="Shopizy" />
        </link>
        <NavLinks>
            <IconLink to="/"><Home size={24} /></IconLink>
            <IconLink to="/support"><Headset size={24} /></IconLink>
            <IconLink to="/cart"><ShoppingCart size={24} /></IconLink>
            <IconLink to="/account"><User size={24} /></IconLink>
         
        </NavLinks>
         </HeaderContainer>
    );
};

export default Header;