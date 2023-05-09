// import React from 'react'
// import { useDispatch } from 'react-redux'
// import { useSelector } from 'react-redux'
// import { Navigate } from 'react-router-dom'
// // import { selectUser } from '../features/selectors'
// import { setUser } from '../features/users/userSlice'
// import { selectUser } from '../features/selectors'

// const RequireAuth = (props) => {
//   const user = useSelector(selectUser);
//   const dispatch = useDispatch();
//   const localStorageUser = JSON.parse(localStorage.getItem("user"));

//     if (!user.token) {
//       if(localStorageUser && localStorageUser.token) {
//         dispatch(setUser(localStorageUser));
//         return props.children;
//       } 
//       return <Navigate to="/" />;
//     } else {
//       return props.children;
//     }
// }
// export default RequireAuth;

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function RequireAuth(props) {
  
  const user = useSelector((store) => store.users);

    if(!user.token) {
      return <Navigate to="/"/>
    } else {
      return props.children; 
    } 
}
