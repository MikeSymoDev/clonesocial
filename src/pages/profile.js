import React from "react";

export default function Profile() {
  return (
    <div>
      {" "}
      //main container
      <nav></nav> //should we have a Navbar component?
      <section className="">
        {" "}
        //Header
        <div>
          <img src="" alt="">
            Picture
          </img>
          <h2>Name</h2>
          <p>Location</p>
        </div>
        <div>
          <div>
            <h3>About</h3>
            <p></p>
          </div>
          <div>
            <h3>Email</h3>
            <p></p>
          </div>
          <div>
            <h3>Phone</h3>
            <p></p>
          </div>
          <div>
            <h3>Things I like</h3>
            <ul></ul>
          </div>
        </div>
        <div>
          {" "}
          //Counters
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
      <section className="">
        {" "}
        //Body
        <div className=""></div>
      </section>
    </div>
  );
}
