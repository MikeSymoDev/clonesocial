import React from 'react'
import '../scss/home.scss'

export default function Registration() {
  return (
    <>
    <Registration />
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
            <a href="" className="account">Don't have an account?</a>
            <Registration type="submit" className="signup">Sign Up</Registration>
          </div>
        </div>
        <div className="middle">
          
          <div className="box2">
             {/* form */}
            <form >
            <h2>Registration</h2>
            <div className='box3'>
    
              {/* username */}
              <div className="input_form">
                <div className="fa"></div>
                <input type='text' placeholder='Username'></input>
              </div>
              {/* username */}
              {/* emaill */}
              <div className="input_form">
                <div className="fa"></div>
                <input type='email' placeholder='E-mail..'></input>
              </div>
              {/* email */}
              {/* pasword */}
              <div className="input_form">
                <div className="fa"></div>
                <input type='password' placeholder='password...'></input>
              </div>
                 {/* pasword */}
               {/* repeat pasword */}
              <div className="input_form">
                <div className="da"></div>
                <input type='password' placeholder='repeat password...'></input>
              </div>
                {/* repeat pasword */}
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
