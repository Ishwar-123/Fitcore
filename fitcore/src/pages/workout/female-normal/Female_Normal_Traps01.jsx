import React from 'react';

// Import videos
import traps01 from './videos/01traps.mp4';
import traps02 from './videos/02traps.mp4';
import traps03 from './videos/03traps.mp4';
import traps04 from './videos/04traps.mp4';
import traps05 from './videos/05traps.mp4';
import traps06 from './videos/06traps.mp4';
import traps07 from './videos/07traps.mp4';
import traps08 from './videos/08traps.mp4';

const Traps = () => {
  return (
    <main className="main-content-workout-male-normal">
      <h1>Traps Workout Guide</h1>
      
      <div className="main_content">
        <div className="video_container">
          <div className="video-card">
            <video src={traps02} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Barbell Shrug - Front View</p>
          </div>
          <div className="video-card">
            <video src={traps01} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Barbell Shrug - Side View</p>
          </div>
        </div>
        <div className="list">
          <h2 className="list-title">How to Perform Barbell Shrugs</h2>
          <ol className="workout-steps">
            <li>
              <span>Stand with your feet shoulder-width apart, holding the barbell with both hands just past
                shoulder width.</span>
            </li>
            <li>
              <span>Bend forward at the hips with a slight bend in your knees, keeping your back
                straight.</span>
            </li>
            <li>
              <span>Engage your shoulder blades, as if you are trying to touch them together.</span>
            </li>
            <li>
              <span>Release the shrug slowly to return to the starting position.</span>
            </li>
          </ol>
        </div>
      </div>
      
      <div className="hr"></div>
      
      <div className="main_content">
        <div className="video_container">
          <div className="video-card">
            <video src={traps03} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Cable 30 Degree Shrug - Front View</p>
          </div>
          <div className="video-card">
            <video src={traps04} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Cable 30 Degree Shrug - Side View</p>
          </div>
        </div>
        <div className="list">
          <h2 className="list-title">How to Perform Cable 30 Degree Shrug</h2>
          <ol className="workout-steps">
            <li>
              <span>Use a handle attachment on both sides of crossover. With cable attachment set all the way
                to the bottom.</span>
            </li>
            <li>
              <span>Grab both handles and make sure you are centered in the machine. Let your arms hang
                freely.</span>
            </li>
            <li>
              <span>Pull your shoulder blades up and in towards your ears. Let your shoulder blades depress
                back to the starting position.</span>
            </li>
          </ol>
        </div>
      </div>
      
      <div className="hr"></div>
      
      <div className="main_content">
        <div className="video_container">
          <div className="video-card">
            <video src={traps05} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Dumbbell Shrug - Front View</p>
          </div>
          <div className="video-card">
            <video src={traps06} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Dumbbell Shrug - Side View</p>
          </div>
        </div>
        <div className="list">
          <h2 className="list-title">How to Perform Dumbbell Shrug</h2>
          <ol className="workout-steps">
            <li>
              <span>Stand tall with two dumbbells. Pull your shoulder blades up. Give a one second squeeze at
                the top.</span>
            </li>
          </ol>
        </div>
      </div>
      
      <div className="hr"></div>
      
      <div className="main_content">
        <div className="video_container">
          <div className="video-card">
            <video src={traps08} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Barbell Upright Row - Front View</p>
          </div>
          <div className="video-card">
            <video src={traps07} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Barbell Upright Row - Side View</p>
          </div>
        </div>
        <div className="list">
          <h2 className="list-title">How to Perform Barbell Upright Row</h2>
          <ol className="workout-steps">
            <li>
              <span>Take a double overhand roughly shoulder width grip.</span>
            </li>
            <li>
              <span>Pull your elbows straight up the ceiling. Aim to get the bar to chin level or slightly
                higher.</span>
            </li>
          </ol>
        </div>
      </div>
    </main>
  );
};

export default Traps;