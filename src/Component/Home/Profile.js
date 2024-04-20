import React from 'react';

function Profile() {
  return (
    <>
    <div className="main-container">
      <div className="left-container">
        <div className="circle">
          <img className="priyanshu" src="Image/profile.png" alt="Priyanshu"  />
          <img className="pranav" src="Image/profile.png" alt="Priyanshu"  />
        </div>
      </div>
      <div className="right-container">
        <div className="quote">
          “I’m finally able to truly differentiate my classroom. This has been priceless for my students’ engagement.”
        </div>
        <div className="author">
          Pranav Kumar Pandey, BTech CSE 2nd Year, IIT Dharwad
        </div>
        <div className="author">
          Priyanshu Jayswal, BTech EE 2nd Year, IIT Dharwad
        </div>
        <p className="strategy">
          We understand the preparation and strategy needed for competitive examinations. Here, we provide all relevant resources that are fully trusted and tested by us.
        </p>
      </div>
    </div>
    <button className="button">Teachers, start here</button>
    </>
  );
}
export default Profile;