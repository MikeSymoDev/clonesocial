import React from 'react';
import '../../scss/header.scss';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logos/logo.png';
import posts_logo from '../../assets/logos/posts_logo.png';
import iconfriends from '../../assets/icons/icon-friends.svg';
// import { deleteUser } from '../../features/users/userSlice';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { selectUser } from '../../features/selectors';
// import { useSelector } from 'react-redux';

export const Header = () => {

// const user = useSelector(selectUser);
//    const navigate = useNavigate();
//    const dispatch = useDispatch();

// const handleLogout = () => {
//     dispatch(deleteUser());
//     localStorage.clear();
//     navigate('/');
//    }


  return (
    <div className="header">
      <div className="leftheader">
        <div className="motionlogo">
          <img src={logo} alt="logo" width={30} height={30} />
          <NavLink className="NavLink" to="/">
            Motion
          </NavLink>
        </div>

        <div className="headerlinks">
          <img src={posts_logo} alt="posts logo" width={20} height={20} />
          <NavLink className="NavLink" to="/posts">
            Posts
          </NavLink>
          <img src={iconfriends} alt="friends" width={30} height={30} />
          <NavLink className="NavLink" to="/findfriends">
            Find Friends
          </NavLink>
        </div>
      </div>

      <div className="rightheader"></div>
 {/* {user.token && <button onClick={handleLogout}>Logout</button>} */}

    </div>
  );
};
