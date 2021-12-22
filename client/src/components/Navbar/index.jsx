import '../../App.scss';
import React,{ useState, useCallback }  from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector,connect } from "react-redux";
import { useHistory } from 'react-router-dom';
import { Dropdown, DropdownItem } from "../";
import logo from '../../assets/logo/logo-vertical.svg';
import { UserOutlined } from '@ant-design/icons'
import { signOut } from '../../redux/actions/usersActions';
import { Navigation, NavItem, Logo, Avatar } from './styles';
import axios from 'axios';



const Navbar = ({ userInfo, token }) => {

    const [ hasAvatar, setHasAvatar ] = useState(false)
    const profilePicUrl = userInfo !== null && `http://localhost:3001/users/${userInfo._id}/avatar`
    const [ isShown, setIsShown ] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory()


    function checkIfHasProfilePic() {
        axios.get(profilePicUrl,{
            headers: {
                'Authorization': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*',
            }
            }).then(result => {
                setHasAvatar(true)
            }).catch( error => {
                console.log(error)
            })       
    }
    
      const memoizedCheckIfHasProfilePic = useCallback(
        () => {
            checkIfHasProfilePic()
        },
        [],
      );

      if (userInfo !== null) {
        memoizedCheckIfHasProfilePic()
      }

    const handleLogOutClick = () => {
        dispatch(signOut(history,token))
        console.log("clicked")
    }

    const handlePerfilClick = () => {
        history.go('/perfil')
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
            { hasAvatar ? 
            <Avatar>
                <img width="44" src={profilePicUrl}></img>
            </Avatar>
             :
             <Avatar>
                 <UserOutlined style={{color: `gray`}} />
             </Avatar>
             }
                <Dropdown isShown={isShown} bottom="0" right="0" left="56px">
                    <DropdownItem onClick={handlePerfilClick}>
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


function mapStateToProps(state) {
    const userInfo = state.authentication.user
    const { token } = state.authentication
    return { userInfo, token }
  }

const connectedStore = connect(mapStateToProps)(Navbar)

export { connectedStore as Navbar }