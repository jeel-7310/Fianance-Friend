import React,{useEffect,useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {message} from 'antd'


const Header = () => {
    const [loginUser,setLoginUser] = useState('');
    const navigate = useNavigate();
    useEffect(() =>{
        const user = JSON.parse(localStorage.getItem('user'));
        if(user)
        {
            setLoginUser(user);
        }

    },[]);
    const logoutHandler = ()=>{
        localStorage.removeItem('user')
        message.success('LogOut Successfully');
        navigate('/login');
    }
    return (
        <>
<nav className="navbar navbar-expand-lg navbar-light bg-light text-dark" style={{ borderRadius: '10px', margin: '5px' }} >
<Link className="navbar-brand" to="/">Finance Friend</Link>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
  </div>
  <div className='d-flex align-items-end' >
      <p className='nav-link justify-content mt-3'>{loginUser && loginUser.name}</p> 
    </div>
    <div className='cls' >
          <button  className="btn btn-outline-success my-2 my-sm-0" style={{marginRight :'10px'}} aria-current="page" 
          onClick={logoutHandler}
          >LogOut</button>
    </div>
</nav>

</>
    )
}
export default Header