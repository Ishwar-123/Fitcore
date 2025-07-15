import React from 'react';

import video33 from './videos/33forearms.mp4';
import video34 from './videos/34forearms.mp4';
import video35 from './videos/35forearms.mp4';
import video36 from './videos/36forearms.mp4';
import video37 from './videos/37forearms.mp4';
import video38 from './videos/38forearms.mp4';
import video39 from './videos/39forearms.mp4';
import video40 from './videos/40forearms.mp4';

const ForearmsWorkout = () => {
  return (
    <main className="main-content-workout-male-normal">
      <h1>Forearms Workout Guide</h1>
      <div className="main_content">
        <div className="video_container">
          <div className="video-card">
            <video src={video33} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Chin Ups - Front View</p>
          </div>
          <div className="video-card">
            <video src={video34} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Chin Ups - Side View</p>
          </div>
        </div>
        <div className="list">
          <h2 className="list-title">How to Perform Chin Ups</h2>
          <ol className="workout-steps">
            <li>
              <span>Grab the bar shoulder width apart with a supinated grip (palms facing you).</span>
            </li>
            <li>
              <span>With your body hanging and arms fully extended, pull yourself up until your chin is past the bar.</span>
            </li>
            <li>
              <span>Slowly return to starting position. Repeat.</span>
            </li>
          </ol>
        </div>
      </div>
      <div className="hr"></div>
      <div className="main_content">
        <div className="video_container">
          <div className="video-card">
            <video src={video35} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Dumbbell Row Unilateral - Front View</p>
          </div>
          <div className="video-card">
            <video src={video36} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Dumbbell Row Unilateral - Side View</p>
          </div>
        </div>
        <div className="list">
          <h2 className="list-title">How to Perform Dumbbell Row Unilateral</h2>
          <ol className="workout-steps">
            <li>
              <span>Brace your off arm against something stable (bench, box). Stagger your stance so your leg on the side of your working arm is back.</span>
            </li>
            <li>
              <span>Try to get your torso to parallel with the ground. That will extend your range of motion.</span>
            </li>
            <li>
              <span>Let your arm hang freely and then pull your elbow back. Imagine you've got a tennis ball in your armpit and squeeze it each rep.</span>
            </li>
          </ol>
        </div>
      </div>
      <div className="hr"></div>
      <div className="main_content">
        <div className="video_container">
          <div className="video-card">
            <video src={video37} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Dumbbell Reverse Curl - Front View</p>
          </div>
          <div className="video-card">
            <video src={video38} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Dumbbell Reverse Curl - Side View</p>
          </div>
        </div>
        <div className="list">
          <h2 className="list-title">How to Perform Dumbbell Reverse Curl</h2>
          <ol className="workout-steps">
            <li>
              <span>Grab the dumbbells with a pronated (overhand) grip. You can do this exercise thumbless if it's more comfortable on your wrists.</span>
            </li>
            <li>
              <span>Flex at the elbows until your biceps touch your forearms. Try not to let your elbows flair outward.</span>
            </li>
          </ol>
        </div>
      </div>
      <div className="hr"></div>
      <div className="main_content">
        <div className="video_container">
          <div className="video-card">
            <video src={video40} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Barbell Reverse Curl - Front View</p>
          </div>
          <div className="video-card">
            <video src={video39} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Barbell Reverse Curl - Side View</p>
          </div>
        </div>
        <div className="list">
          <h2 className="list-title">How to Perform Barbell Reverse Curl</h2>
          <ol className="workout-steps">
            <li>
              <span>Take a double overhand grip that's about shoulder width. Flex your elbows while keeping your elbows tucked in. Try not to let them flare out.</span>
            </li>
            <li>
              <span>Curl until your forearm presses into your bicep. Then fully extend your elbows at the bottom of each rep.</span>
            </li>
          </ol>
        </div>
      </div>
    </main>
  );
};

export default ForearmsWorkout;