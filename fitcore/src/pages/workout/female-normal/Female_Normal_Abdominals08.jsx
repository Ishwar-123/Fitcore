import React from 'react';
import video57 from './videos/57abdominals.mp4';
import video58 from './videos/58abdominals.mp4';
import video59 from './videos/59abdominals.mp4';
import video60 from './videos/60abdominals.mp4';
import video61 from './videos/61abdominals.mp4';
import video62 from './videos/62abdominals.mp4';
import video63 from './videos/63abdominals.mp4';
import video64 from './videos/64abdominals.mp4';

const AbdominalsWorkout = () => {
  return (
    <main className="main-content-workout-male-normal">
      <h1>Abdominals Workout Guide</h1>
      <div className="main_content">
        <div className="video_container">
          <div className="video-card">
            <video src={video58} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Hand Plank - Front View</p>
          </div>
          <div className="video-card">
            <video src={video57} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Hand Plank - Side View</p>
          </div>
        </div>
        <div className="list">
          <h2 className="list-title">How to Perform Hand Plank</h2>
          <ol className="workout-steps">
            <li>
              <span>Start in a kneeling position with your hands planted on the ground.</span>
            </li>
            <li>
              <span>Pick your knees up off the ground. Hold in this position with a flat back.</span>
            </li>
          </ol>
        </div>
      </div>
      <div className="hr"></div>
      <div className="main_content">
        <div className="video_container">
          <div className="video-card">
            <video src={video59} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Barbell Situp - Front View</p>
          </div>
          <div className="video-card">
            <video src={video60} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Barbell Situp - Side View</p>
          </div>
        </div>
        <div className="list">
          <h2 className="list-title">How to Perform Barbell Situp</h2>
          <ol className="workout-steps">
            <li>
              <span>Hold the bar with a slightly wider than shoulder width grip. Push the bar up toward the ceiling and maintain that elbow extension.</span>
            </li>
            <li>
              <span>Flex your abs and sit-up. Aim to get your torso vertical while maintaining the barbell overhead.</span>
            </li>
          </ol>
        </div>
      </div>
      <div className="hr"></div>
      <div className="main_content">
        <div className="video_container">
          <div className="video-card">
            <video src={video61} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Dumbbell Russian Twist - Front View</p>
          </div>
          <div className="video-card">
            <video src={video62} autoPlay loop muted>
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
            <video src={video63} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Laying Leg Raises - Front View</p>
          </div>
          <div className="video-card">
            <video src={video64} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Laying Leg Raises - Side View</p>
          </div>
        </div>
        <div className="list">
          <h2 className="list-title">How to Perform Laying Leg Raises</h2>
          <ol className="workout-steps">
            <li>
              <span>Lay on your back with your arms palms down on either side.</span>
            </li>
            <li>
              <span>Keep your legs together and as straight as possible.</span>
            </li>
            <li>
              <span>Slowly raise your legs to a 90° angle, pause at this position, or as high as you can reach your legs, and then slowly lower your legs back down.</span>
            </li>
            <li>
              <span>Duration of these movements should be slow so that you do not utilize momentum, enabling you to get the most out of the exercise.</span>
            </li>
          </ol>
        </div>
      </div>
    </main>
  );
};

export default AbdominalsWorkout;