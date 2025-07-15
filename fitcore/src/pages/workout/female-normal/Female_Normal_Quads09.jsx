import React from 'react';

import video65 from './videos/65quads.mp4';
import video66 from './videos/66quads.mp4';
import video67 from './videos/67quads.mp4';
import video68 from './videos/68quads.mp4';
import video69 from './videos/69quads.mp4';
import video70 from './videos/70quads.mp4';
import video71 from './videos/71quads.mp4';
import video72 from './videos/72quads.mp4';

const QuadsWorkout = () => {
  return (
    <main className="main-content-workout-male-normal">
      <h1>Quads Workout Guide</h1>
      <div className="main_content">
        <div className="video_container">
          <div className="video-card">
            <video src={video65} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Barbell Squat - Front View</p>
          </div>
          <div className="video-card">
            <video src={video66} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Barbell Squat - Side View</p>
          </div>
        </div>
        <div className="list">
          <h2 className="list-title">How to Perform Barbell Squat</h2>
          <ol className="workout-steps">
            <li>
              <span>Stand with your feet shoulder-width apart. Maintain the natural arch in your back, squeezing your shoulder blades and raising your chest.</span>
            </li>
            <li>
              <span>Grip the bar across your shoulders and support it on your upper back. Unwrack the bar by straightening your legs, and take a step back.</span>
            </li>
            <li>
              <span>Bend your knees as you lower the weight without altering the form of your back until your hips are below your knees.</span>
            </li>
            <li>
              <span>Raise the bar back to starting position, lift with your legs and exhale at the top.</span>
            </li>
          </ol>
        </div>
      </div>
      <div className="hr"></div>
      <div className="main_content">
        <div className="video_container">
          <div className="video-card">
            <video src={video67} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Dumbbell Goblet Squat - Front View</p>
          </div>
          <div className="video-card">
            <video src={video68} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Dumbbell Goblet Squat - Side View</p>
          </div>
        </div>
        <div className="list">
          <h2 className="list-title">How to Perform Dumbbell Goblet Squat</h2>
          <ol className="workout-steps">
            <li>
              <span>Hold the weight tucked into your upper chest area, keeping your elbows in. Your feet should be slightly wider than shoulder width.</span>
            </li>
            <li>
              <span>Sink down into the squat, keeping your elbows inside the track of your knees.</span>
            </li>
            <li>
              <span>Push through your heels while keeping your chest up and return to starting position.</span>
            </li>
          </ol>
        </div>
      </div>
      <div className="hr"></div>
      <div className="main_content">
        <div className="video_container">
          <div className="video-card">
            <video src={video69} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Machine Leg Extension - Front View</p>
          </div>
          <div className="video-card">
            <video src={video70} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Machine Leg Extension - Side View</p>
          </div>
        </div>
        <div className="list">
          <h2 className="list-title">How to Perform Machine Leg Extension</h2>
          <ol className="workout-steps">
            <li>
              <span>Sit on the machine with your back against the cushion and adjust the machine you are using so that your knees are at a 90 degree angle at the starting position.</span>
            </li>
            <li>
              <span>Raise the weight by extending your knees outward, then lower your leg to the starting position. Both movements should be done in a slow, controlled motion.</span>
            </li>
          </ol>
        </div>
      </div>
      <div className="hr"></div>
      <div className="main_content">
        <div className="video_container">
          <div className="video-card">
            <video src={video71} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Barbell Step Up - Front View</p>
          </div>
          <div className="video-card">
            <video src={video72} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Barbell Step Up - Side View</p>
          </div>
        </div>
        <div className="list">
          <h2 className="list-title">How to Perform Barbell Step Up</h2>
          <ol className="workout-steps">
            <li>
              <span>Begin by standing in front of a sturdy box or bench that is about knee-height, holding a barbell across your upper back and shoulders, using an overhand grip.</span>
            </li>
            <li>
              <span>Place your right foot on the box and push through the heel to lift your body up and onto the box.</span>
            </li>
            <li>
              <span>Step back down with your right foot.</span>
            </li>
          </ol>
        </div>
      </div>
    </main>
  );
};

export default QuadsWorkout;