import React from 'react';

import video49 from './videos/49obliques.mp4';
import video50 from './videos/50-Obliques.mp4';
import video51 from './videos/51-Obliques.mp4';
import video52 from './videos/52-Obliques.mp4';
import video53 from './videos/53-Obliques.mp4';
import video54 from './videos/54-Obliques.mp4';
import video55 from './videos/55-Obliques.mp4';
import video56 from './videos/56-Obliques.mp4';

const ObliquesWorkout = () => {
  return (
    <main className="main-content-workout-male-normal">
      <h1>Obliques Workout Guide</h1>
      <div className="main_content">
        <div className="video_container">
          <div className="video-card">
            <video src={video49} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Hand Side Plank - Front View</p>
          </div>
          <div className="video-card">
            <video src={video50} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Hand Side Plank - Side View</p>
          </div>
        </div>
        <div className="list">
          <h2 className="list-title">How to Perform Hand Side Plank</h2>
          <ol className="workout-steps">
            <li>
              <span>Press your hand into the ground and pick up your hip off the ground.</span>
            </li>
            <li>
              <span>Open your chest and maintain this position for the allotted amount of time.</span>
            </li>
          </ol>
        </div>
      </div>
      <div className="hr"></div>
      <div className="main_content">
        <div className="video_container">
          <div className="video-card">
            <video src={video51} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Elbow Side Plank - Front View</p>
          </div>
          <div className="video-card">
            <video src={video52} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Elbow Side Plank - Side View</p>
          </div>
        </div>
        <div className="list">
          <h2 className="list-title">How to Perform Elbow Side Plank</h2>
          <ol className="workout-steps">
            <li>
              <span>Press your elbow into the floor.</span>
            </li>
            <li>
              <span>Pick your hips up off the ground and maintain this position for the allotted amount of time.</span>
            </li>
            <li>
              <span>Make sure you don't let your chest fall forward or backward.</span>
            </li>
          </ol>
        </div>
      </div>
      <div className="hr"></div>
      <div className="main_content">
        <div className="video_container">
          <div className="video-card">
            <video src={video54} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Dumbbell Russian Twist - Front View</p>
          </div>
          <div className="video-card">
            <video src={video53} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Dumbbell Russian Twist - Side View</p>
          </div>
        </div>
        <div className="list">
          <h2 className="list-title">How to Perform Dumbbell Russian Twist</h2>
          <ol className="workout-steps">
            <li>
              <span>Sit on the floor and flex your knees and hips to a 90 degree angle.</span>
            </li>
            <li>
              <span>Your feet should be hovering off the ground. (If that's too hard start with heels on the floor)</span>
            </li>
            <li>
              <span>Rotate your upper spine to engage your obliques.</span>
            </li>
          </ol>
        </div>
      </div>
      <div className="hr"></div>
      <div className="main_content">
        <div className="video_container">
          <div className="video-card">
            <video src={video55} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Kettlebell Windmill - Front View</p>
          </div>
          <div className="video-card">
            <video src={video56} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Kettlebell Windmill - Side View</p>
          </div>
        </div>
        <div className="list">
          <h2 className="list-title">How to Perform Kettlebell Windmill</h2>
          <ol className="workout-steps">
            <li>
              <span>Stand with feet slightly wider than shoulder width apart. Hold the kettlebell in one hand and extend your arm above your head.</span>
            </li>
            <li>
              <span>Keeping your legs straight and the kettlebell above your head, lower the relaxed arm towards the ground, twisting your body towards the side of the raised arm.</span>
            </li>
            <li>
              <span>Return to the starting position, tilt your pelvis forward and repeat.</span>
            </li>
          </ol>
        </div>
      </div>
    </main>
  );
};

export default ObliquesWorkout;