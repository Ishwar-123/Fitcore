import React from 'react';
import video25 from './videos/25Biceps.mp4';
import video26 from './videos/26Biceps.mp4';
import video27 from './videos/27Biceps.mp4';
import video28 from './videos/28Biceps.mp4';
import video29 from './videos/29Biceps.mp4';
import video30 from './videos/30Biceps.mp4';
import video31 from './videos/31Biceps.mp4';
import video32 from './videos/32Biceps.mp4';

const BicepsWorkout = () => {
  return (
    <main className="main-content-workout-male-normal">
      <h1>Biceps Workout Guide</h1>
      <div className="main_content">
        <div className="video_container">
          <div className="video-card">
            <video src={video25} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Chin Ups - Front View</p>
          </div>
          <div className="video-card">
            <video src={video26} autoPlay loop muted>
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
            <video src={video28} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Cable Bayesian Curl - Front View</p>
          </div>
          <div className="video-card">
            <video src={video27} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Cable Bayesian Curl - Side View</p>
          </div>
        </div>
        <div className="list">
          <h2 className="list-title">How to Perform Cable Bayesian Curl</h2>
          <ol className="workout-steps">
            <li>
              <span>Use a handle attachment. The cable should be set all the way to the bottom of the machine.</span>
            </li>
            <li>
              <span>Face away from the cable machine.</span>
            </li>
            <li>
              <span>Stagger your stance so you have a better base of support. Face your palm forward. Flex at the elbow and extend.</span>
            </li>
          </ol>
        </div>
      </div>
      <div className="hr"></div>
      <div className="main_content">
        <div className="video_container">
          <div className="video-card">
            <video src={video29} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Dumbbell Curl - Front View</p>
          </div>
          <div className="video-card">
            <video src={video30} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Dumbbell Curl - Side View</p>
          </div>
        </div>
        <div className="list">
          <h2 className="list-title">How to Perform Dumbbell Curl</h2>
          <ol className="workout-steps">
            <li>
              <span>Stand up straight with a dumbbell in each hand at arm's length.</span>
            </li>
            <li>
              <span>Raise one dumbbell and twist your forearm until it is vertical and your palm faces the shoulder.</span>
            </li>
            <li>
              <span>Lower to original position and repeat with opposite arm.</span>
            </li>
          </ol>
        </div>
      </div>
      <div className="hr"></div>
      <div className="main_content">
        <div className="video_container">
          <div className="video-card">
            <video src={video32} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Dumbbell Hammer Curl - Front View</p>
          </div>
          <div className="video-card">
            <video src={video31} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Dumbbell Hammer Curl - Side View</p>
          </div>
        </div>
        <div className="list">
          <h2 className="list-title">How to Perform Dumbbell Hammer Curl</h2>
          <ol className="workout-steps">
            <li>
              <span>Hold the dumbbells with a neutral grip (thumbs facing the ceiling).</span>
            </li>
            <li>
              <span>Slowly lift the dumbbell up to chest height.</span>
            </li>
            <li>
              <span>Return to starting position and repeat.</span>
            </li>
          </ol>
        </div>
      </div>
    </main>
  );
};

export default BicepsWorkout;