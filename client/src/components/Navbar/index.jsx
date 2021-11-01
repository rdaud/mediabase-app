import '../../App.scss';
import React,{ useState }  from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { Dropdown, DropdownItem } from "../";
import logo from '../../assets/logo/logo-vertical.svg';
import { UserOutlined } from '@ant-design/icons'
import { signOut } from '../../redux/actions/usersActions';
import { Navigation, NavItem, Logo, Avatar } from './styles';



export const Navbar = () => {

    const [ isShown, setIsShown ] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory()
    const { token } = useSelector( state => state.authentication )

    const handleLogOutClick = () => {
        dispatch(signOut(history,token))
        console.log("clicked")
    }

    return (      
        <Navigation>
            <Logo>
                <Link
                to='/home'
                >
                <img src={logo} alt="Mediabase" />
                </Link>                
            </Logo>
            <NavItem isShown={isShown} onMouseOver={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
                <Avatar>
                    <UserOutlined />
                </Avatar>
                <Dropdown isShown={isShown} bottom="0" right="0" left="56px">
                    <DropdownItem>
                        <Link to='/perfil'>
                        Perfil
                        </Link>
                    </DropdownItem>
                    <DropdownItem onClick={handleLogOutClick}>        
                       Sair da conta
                    </DropdownItem>
                </Dropdown>
            </NavItem> 
        </Navigation>
    )
}


