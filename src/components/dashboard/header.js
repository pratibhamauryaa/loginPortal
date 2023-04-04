import {React} from 'react';
import { Button, Dropdown, Menu } from 'antd';
import {BiUserCircle,BiLogOutCircle} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom';


export default function Headers(){
  const navigate = useNavigate();

  const handleLogout = () => {
    alert('Logout');
    navigate('/')
  };

  const items = [
    {
      key: '1',
      label:"logout",
      icon:<BiLogOutCircle style={{color:"red"}}/>,
      onClick: handleLogout,
      className:'logout-logo'
    }
  ];

  
  return(
    <div className='user-icon-logout'>
      <Dropdown menu={{ items }} arrow >
      <BiUserCircle style={{fontSize:"30px", marginBottom:"30px"}}/>
    </Dropdown>
    </div>
  );
 
}

