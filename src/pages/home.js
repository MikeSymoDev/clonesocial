import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../features/users/userSlice';
import '../scss/home.scss'


export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const user = useSelector(selectUser);

  const [email, setEmail] = useState("mcsymo@pm.me");
  const [password, setPassword] = useState("qpwoeirutz");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const obj = {"email": email, "password": password}
    await dispatch(loginUser(obj));
    navigate("/posts");
  }

  //   useEffect(() => {
   
  // }, [user])

  return (
    
    <>
    {/* all */}
    <div className='home'>
      {/* left side */}
      <aside class="left">

        <div className="header_text">
          <div className="logo"></div>
          <h1>Motion</h1>
          <h3>Connect with friends and the world around you with Motion.</h3>
          
          <div className="applogo">
            <div className='apple'>
              <div></div>
            </div>
            <div className='google'>
              <div></div>
            </div>
          </div>
        </div>

        <div className="links">
          <div class="social_media">
            <div className="icon_f"></div>
            <div className="icon_tw"></div>
            <div className="icon_sta"></div>
          </div>
          <small>© Motion 2018. All rights reserved.</small>
        </div>

      </aside>
      {/* left side end*/}
       {/* right side */}
      <aside className="right">
        <div className="top">
          <div className="box1">
            <div className="account">Don't have an account?</div>
            <Link to="../registration" className="signup">Sign Up</Link>
          </div>
        </div>
        <div className="middle">
          
          <div className="box2">
             {/* form */}
            <form onSubmit={(e) => onSubmitHandler(e)}>
            <h2>Login</h2>
            <div className='box3'>
              <div className="input_form">
                <div className="fa"></div>
                {/* Input */}
                <input value={email} onChange={(e) => {
                  setEmail(e.target.value);
                }} type='text' placeholder='email'></input>
              </div>
              <div className="input_form">
                <div className="da"></div>
                 {/* Input */}
                <input value={password} onChange={(e) => {
                  setPassword(e.target.value);
                }} type='password' placeholder='password'>
                </input>
              </div>
              </div>
              <div className='bottom'>
                <button className="sign_button" type='submit'>Login</button>
              </div>
            </form> 
            {/* form end */}
          </div>
        </div>
      </aside>
       {/* right side end */}
    </div>

    </>
   
  )
}
