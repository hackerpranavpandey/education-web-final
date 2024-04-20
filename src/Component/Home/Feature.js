import React from 'react'

const Feature = () => {
    return (
        <div className="profile_container">
            <h1>Why to choose Education Hub</h1>
            {/* <div className="featured"> */}
                <div className="feature">
                    <img src="Image/profile1.jpg" alt="Personalized learning icon"></img>
                    <h2>Personalized learning</h2>
                    <p>Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning.</p>
                </div>
                <div className="feature">
                    <img src="Image/profile2.jpg" alt="Trusted content icon"></img>
                    <h2>Trusted content</h2>
                    <p>Created by experts, Khan Academy’s library of trusted, standards-aligned practice and lessons covers math K-12 through early college, grammar, science, history, SAT®, and more. It’s all free for learners and teachers.</p>
                </div>
                <div className="feature">
                    <img src="Image/profile3.jpg" alt="Tools to empower teachers icon"></img>
                    <h2>Tools to empower teachers</h2>
                    <p>With Khan Academy, teachers can identify gaps in their students’ understanding, tailor instruction, and meet the needs of every student.</p>
                </div>
            {/* </div> */}
        </div>


    )
}


export default Feature;