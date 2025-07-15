import React from 'react';

import video17 from './videos/17chest.mp4';
import video18 from './videos/18chest.mp4';
import video19 from './videos/19chest.mp4';
import video20 from './videos/20chest.mp4';
import video21 from './videos/21chest.mp4';
import video22 from './videos/22chest.mp4';
import video23 from './videos/23chest.mp4';
import video24 from './videos/24chest.mp4';

const ChestWorkout = () => {
  return (
    <main className="main-content-workout-male-normal">
      <h1>Chest Workout Guide</h1>
      <div className="main_content">
        <div className="video_container">
          <div className="video-card">
            <video src={video18} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Machine Pec Fly - Front View</p>
          </div>
          <div className="video-card">
            <video src={video17} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Machine Pec Fly - Side View</p>
          </div>
        </div>
        <div className="list">
          <h2 className="list-title">How to Perform Machine Pec Fly</h2>
          <ol className="workout-steps">
            <li>
              <span>Adjust seat height so handles align with chest. Sit and grip handles with elbows slightly bent.</span>
            </li>
            <li>
              <span>Slowly bring handles together in front, keeping tension. Focus on squeezing chest muscles.</span>
            </li>
            <li>
              <span>Press until your elbows are extended and push your head forward slightly.</span>
            </li>
            <li>
              <span>Return handles to starting position with controlled motion. Keep chest up throughout. Repeat for reps.</span>
            </li>
          </ol>
        </div>
      </div>
      <div className="hr"></div>
      <div className="main_content">
        <div className="video_container">
          <div className="video-card">
            <video src={video19} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Barbell Bench Press - Front View</p>
          </div>
          <div className="video-card">
            <video src={video20} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Barbell Bench Press - Side View</p>
          </div>
        </div>
        <div className="list">
          <h2 className="list-title">How to Perform Barbell Bench Press</h2>
          <ol className="workout-steps">
            <li>
              <span>Lay flat on the bench with your feet on the ground. With straight arms unrack the bar.</span>
            </li>
            <li>
              <span>Lower the bar to your mid chest.</span>
            </li>
            <li>
              <span>Raise the bar until you've locked your elbows.</span>
            </li>
          </ol>
        </div>
      </div>
      <div className="hr"></div>
      <div className="main_content">
        <div className="video_container">
          <div className="video-card">
            <video src={video21} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Push Up - Front View</p>
          </div>
          <div className="video-card">
            <video src={video22} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Push Up - Side View</p>
          </div>
        </div>
        <div className="list">
          <h2 className="list-title">How to Perform Push Up</h2>
          <ol className="workout-steps">
            <li>
              <span>Place your hands firmly on the ground, directly under shoulders.</span>
            </li>
            <li>
              <span>Flatten your back so your entire body is straight and slowly lower your body.</span>
            </li>
            <li>
              <span>Draw shoulder blades back and down, keeping elbows tucked close to your body.</span>
            </li>
            <li>
              <span>Exhale as you push back to the starting position.</span>
            </li>
          </ol>
        </div>
      </div>
      <div className="hr"></div>
      <div className="main_content">
        <div className="video_container">
          <div className="video-card">
            <video src={video23} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Dumbbell Incline Bench Press - Front View</p>
          </div>
          <div className="video-card">
            <video src={video24} autoPlay loop muted>
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
    </main>
  );
};

export default ChestWorkout;