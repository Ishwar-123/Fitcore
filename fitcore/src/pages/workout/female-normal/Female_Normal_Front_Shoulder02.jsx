import React from 'react';
import video09 from './videos/09front-shoulders.mp4';
import video10 from './videos/10front-shoulders.mp4';
import video11 from './videos/11front-shoulders.mp4';
import video12 from './videos/12front-shoulders.mp4';
import video13 from './videos/13front-shoulders.mp4';
import video14 from './videos/14front-shoulders.mp4';
import video15 from './videos/15front-shoulders.mp4';
import video16 from './videos/16front-shoulders.mp4';

const FrontShoulderWorkout = () => {
  return (
    <main className="main-content-workout-male-normal">
      <h1>Front-Shoulder Workout Guide</h1>
      <div className="main_content">
        <div className="video_container">
          <div className="video-card">
            <video src={video09} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Barbell Overhead Press - Front View</p>
          </div>
          <div className="video-card">
            <video src={video10} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Barbell Overhead Press - Side View</p>
          </div>
        </div>
        <div className="list">
          <h2 className="list-title">How to Perform Barbell Overhead Press</h2>
          <ol className="workout-steps">
            <li>
              <span>Take a roughly shoulder width grip. There should be a straight line from your elbow to fist (vertical forearms).</span>
            </li>
            <li>
              <span>Pull your chin back and press the weight toward the ceiling by extending at the elbow joint and flexing at the shoulder joint.</span>
            </li>
            <li>
              <span>Press until your elbows are extended and push your head forward slightly.</span>
            </li>
            <li>
              <span>Return to the start position with control. Pulling your chin back to allow the bar to pass your face safely.</span>
            </li>
          </ol>
        </div>
      </div>
      <div className="hr"></div>
      <div className="main_content">
        <div className="video_container">
          <div className="video-card">
            <video src={video11} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Dumbbell Seated Overhead Press - Front View</p>
          </div>
          <div className="video-card">
            <video src={video12} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Dumbbell Seated Overhead Press - Side View</p>
          </div>
        </div>
        <div className="list">
          <h2 className="list-title">How to Perform Dumbbell Seated Overhead Press</h2>
          <ol className="workout-steps">
            <li>
              <span>Sit on a bench with back support. Raise the dumbbells to shoulder height with your palms forward.</span>
            </li>
            <li>
              <span>Raise the dumbbells upwards and pause at the contracted position.</span>
            </li>
            <li>
              <span>Lower the weights back to starting position.</span>
            </li>
          </ol>
        </div>
      </div>
      <div className="hr"></div>
      <div className="main_content">
        <div className="video_container">
          <div className="video-card">
            <video src={video13} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Dumbbell Incline Bench Press - Front View</p>
          </div>
          <div className="video-card">
            <video src={video14} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Dumbbell Incline Bench Press - Side View</p>
          </div>
        </div>
        <div className="list">
          <h2 className="list-title">How to Perform Dumbbell Incline Bench Press</h2>
          <ol className="workout-steps">
            <li>
              <span>Lay flat on the incline bench with your feet on the ground. Raise the dumbbells until you have straight arms.</span>
            </li>
            <li>
              <span>Lower the dumbbells to your mid chest.</span>
            </li>
            <li>
              <span>Raise the dumbbells until you've locked your elbows.</span>
            </li>
          </ol>
        </div>
      </div>
      <div className="hr"></div>
      <div className="main_content">
        <div className="video_container">
          <div className="video-card">
            <video src={video15} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Cable Low Single Arm Lateral Raise - Front View</p>
          </div>
          <div className="video-card">
            <video src={video16} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Cable Low Single Arm Lateral Raise - Side View</p>
          </div>
        </div>
        <div className="list">
          <h2 className="list-title">How to Perform Cable Low Single Arm Lateral Raise</h2>
          <ol className="workout-steps">
            <li>
              <span>Use a handle attachment with the cable set all the way to the bottom of the machine.</span>
            </li>
            <li>
              <span>You should vertically abduct at the shoulder raising your arm straight out to the side.</span>
            </li>
            <li>
              <span>Raise until your arm is parallel with the ground and then back to the starting position.</span>
            </li>
          </ol>
        </div>
      </div>
    </main>
  );
};

export default FrontShoulderWorkout;