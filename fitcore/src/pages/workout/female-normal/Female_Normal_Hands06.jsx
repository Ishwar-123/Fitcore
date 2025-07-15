import React from 'react';
import video41 from './videos/41hands.mp4';
import video42 from './videos/42hands.mp4';
import video43 from './videos/43hands.mp4';
import video44 from './videos/44hands.mp4';
import video45 from './videos/45hands.mp4';
import video46 from './videos/46hands.mp4';
import video47 from './videos/47hands.mp4';
import video48 from './videos/48hands.mp4';

const HandsWorkout = () => {
  return (
    <main className="main-content-workout-male-normal">
      <h1>Hands Workout Guide</h1>
      <div className="main_content">
        <div className="video_container">
          <div className="video-card">
            <video src={video42} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Kettlebell Farmers Carry - Front View</p>
          </div>
          <div className="video-card">
            <video src={video41} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Kettlebell Farmers Carry - Side View</p>
          </div>
        </div>
        <div className="list">
          <h2 className="list-title">How to Perform Kettlebell Farmers Carry</h2>
          <ol className="workout-steps">
            <li>
              <span>Hold two kettlebells in each hand.</span>
            </li>
            <li>
              <span>Keep your shoulder blades pulled back and walk for a specified duration.</span>
            </li>
          </ol>
        </div>
      </div>
      <div className="hr"></div>
      <div className="main_content">
        <div className="video_container">
          <div className="video-card">
            <video src={video43} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Plate Pinch Grip Farmer's Carry - Front View</p>
          </div>
          <div className="video-card">
            <video src={video44} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Plate Pinch Grip Farmer's Carry - Side View</p>
          </div>
        </div>
        <div className="list">
          <h2 className="list-title">How to Perform Plate Pinch Grip Farmer's Carry</h2>
          <ol className="workout-steps">
            <li>
              <span>Stand tall holding two plates in each hand with a pinch grip.</span>
            </li>
            <li>
              <span>Walk for the desired distance or time.</span>
            </li>
          </ol>
        </div>
      </div>
      <div className="hr"></div>
      <div className="main_content">
        <div className="video_container">
          <div className="video-card">
            <video src={video45} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Plate Pinch Grip Deadlift - Front View</p>
          </div>
          <div className="video-card">
            <video src={video46} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Plate Pinch Grip Deadlift - Side View</p>
          </div>
        </div>
        <div className="list">
          <h2 className="list-title">How to Perform Plate Pinch Grip Deadlift</h2>
          <ol className="workout-steps">
            <li>
              <span>Stand facing the plate with your feet shoulder-width apart and the plate positioned between your feet.</span>
            </li>
            <li>
              <span>Bend down and grasp the plate from the top edges with both hands, making sure your thumbs and fingers are evenly spaced.</span>
            </li>
            <li>
              <span>Keep your back straight, chest up and core engaged, and stand up with the plate, keeping it close to your body.</span>
            </li>
            <li>
              <span>Lower the plate back down to the ground, keeping control and maintaining good posture.</span>
            </li>
          </ol>
        </div>
      </div>
      <div className="hr"></div>
      <div className="main_content">
        <div className="video_container">
          <div className="video-card">
            <video src={video47} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Barbell Suitcase Deadlift - Front View</p>
          </div>
          <div className="video-card">
            <video src={video48} autoPlay loop muted>
              <p>Your browser does not support the video tag. Please use a modern browser.</p>
            </video>
            <p className="video-caption">Barbell Suitcase Deadlift - Side View</p>
          </div>
        </div>
        <div className="list">
          <h2 className="list-title">How to Perform Barbell Suitcase Deadlift</h2>
          <ol className="workout-steps">
            <li>
              <span>Begin by standing with your feet hip-width apart and holding a barbell at one side of your body, with your palms facing your thighs.</span>
            </li>
            <li>
              <span>Keeping your core engaged and your back straight, bend at the hips and knees to lower the barbell down towards the ground.</span>
            </li>
            <li>
              <span>As the barbell reaches the ground, use your legs and glutes to push through your heels and extend your hips and knees to raise your body back to the starting position.</span>
            </li>
            <li>
              <span>Repeat the movement for the desired number of reps, then switch sides and repeat the exercise with the barbell on the opposite side of your body.</span>
            </li>
          </ol>
        </div>
      </div>
    </main>
  );
};

export default HandsWorkout;