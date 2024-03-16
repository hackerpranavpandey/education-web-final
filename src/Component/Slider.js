import React from 'react'

const Slider = () => {
  return (
    
    <div className="slider">
        <div className="banner">
            <h1>Welcome to EducationHub</h1>
            <p>Your one-stop solution for educational resources.</p>
            <button className="get-started-btn">Get Started</button>
        </div>

        <div className="featured">
            <div className="featured-item">
                <h2>Featured Book</h2>
                <p>Discover the latest books recommended for your studies.</p>
                <button className="view-btn">View Books</button>
            </div>
            <div className="featured-item">
                <h2>Featured Course</h2>
                <p>Enroll in top-notch courses to enhance your knowledge.</p>
                <button className="view-btn">View Courses</button>
            </div>
            <div className="featured-item">
                <h2>Question Of The Day</h2>
                <p>Solve a question and check your capability.</p>
                <button className="view-btn">Join Community</button>
            </div>
        </div>
    </div>
  )
}

export default Slider
