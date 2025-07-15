import React from "react";
import video81 from "./videos/81Rear_Shoulder.mp4";
import video82 from "./videos/82Rear_Shoulder.mp4";
import video83 from "./videos/83Rear_Shoulder.mp4";
import video84 from "./videos/84Rear_Shoulder.mp4";
import video85 from "./videos/85Rear_Shoulder.mp4";
import video86 from "./videos/86Rear_Shoulder.mp4";
import video87 from "./videos/87Rear_Shoulder.mp4";
import video88 from "./videos/88Rear_Shoulder.mp4";

const Rear_Shoulder = () => {
  return (
    <main className="main-content-workout-male-normal">
      <h1>Rear-Shoulder Workout Guide</h1>
      <div className="main_content">
        <div className="video_container">
          <div className="video-card">
            <video src={video81} autoPlay loop muted>
              <p>
                Your browser does not support the video tag. Please use a modern
                browser.
              </p>
            </video>
            <p className="video-caption">Cable Rope Face Pulls - Front View</p>
          </div>
          <div className="video-card">
            <video src={video82} autoPlay loop muted>
              <p>
                Your browser does not support the video tag. Please use a modern
                browser.
              </p>
            </video>
            <p className="video-caption">Cable Rope Face Pulls - Side View</p>
          </div>
        </div>
        <div className="list">
          <h2 className="list-title">How to Perform Cable Rope Face Pulls</h2>
          <ol className="workout-steps">
            <li>
              <span>
                Facing the pulley, pull the weight towards you while keeping
                your arms parallel to the ground.
              </span>
            </li>
            <li>
              <span>
                Pull your hands back to both sides of your head and hold the
                position.
              </span>
            </li>
            <li>
              <span>Slowly return weight to starting position. Repeat.</span>
            </li>
          </ol>
        </div>
      </div>
      <div className="hr"></div>
      <div className="main_content">
        <div className="video_container">
          <div className="video-card">
            <video src={video83} autoPlay loop muted>
              <p>
                Your browser does not support the video tag. Please use a modern
                browser.
              </p>
            </video>
            <p className="video-caption">Machine Reverse Fly - Front View</p>
          </div>
          <div className="video-card">
            <video src={video84} autoPlay loop muted>
              <p>
                Your browser does not support the video tag. Please use a modern
                browser.
              </p>
            </video>
            <p className="video-caption">Machine Reverse Fly - Side View</p>
          </div>
        </div>
        <div className="list">
          <h2 className="list-title">How to Perform Machine Reverse Fly</h2>
          <ol className="workout-steps">
            <li>
              <span>Sit on machine and press your chest into the pad.</span>
            </li>
            <li>
              <span>
                Grab the handles with an overhand grip. Keep your elbows mostly
                extended.
              </span>
            </li>
            <li>
              <span>
                Bring your arms backwards and squeeze your scapula together.
              </span>
            </li>
          </ol>
        </div>
      </div>
      <div className="hr"></div>
      <div className="main_content">
        <div className="video_container">
          <div className="video-card">
            <video src={video85} autoPlay loop muted>
              <p>
                Your browser does not support the video tag. Please use a modern
                browser.
              </p>
            </video>
            <p className="video-caption">
              Dumbbell Seated Rear Delt Fly - Front View
            </p>
          </div>
          <div className="video-card">
            <video src={video86} autoPlay loop muted>
              <p>
                Your browser does not support the video tag. Please use a modern
                browser.
              </p>
            </video>
            <p className="video-caption">
              Dumbbell Seated Rear Delt Fly - Side View
            </p>
          </div>
        </div>
        <div className="list">
          <h2 className="list-title">
            How to Perform Dumbbell Seated Rear Delt Fly
          </h2>
          <ol className="workout-steps">
            <li>
              <span>
                With dumbbells in either hand, bend your knees with your feet
                slightly bowed out. Arch your back above your knees, and start
                with the weights touching in front of your chest.
              </span>
            </li>
            <li>
              <span>
                With bent elbows, raise your arms up to shoulder level, pausing
                at the at the end of the motion.
              </span>
            </li>
            <li>
              <span>Slowly lower your arms back to starting position.</span>
            </li>
          </ol>
        </div>
      </div>
      <div className="hr"></div>
      <div className="main_content">
        <div className="video_container">
          <div className="video-card">
            <video src={video87} autoPlay loop muted>
              <p>
                Your browser does not support the video tag. Please use a modern
                browser.
              </p>
            </video>
            <p className="video-caption">Band Pull Apart - Front View</p>
          </div>
          <div className="video-card">
            <video src={video88} autoPlay loop muted>
              <p>
                Your browser does not support the video tag. Please use a modern
                browser.
              </p>
            </video>
            <p className="video-caption">Band Pull Apart - Side View</p>
          </div>
        </div>
        <div className="list">
          <h2 className="list-title">How to Perform Band Pull Apart</h2>
          <ol className="workout-steps">
            <li>
              <span>
                Grab the band with a shoulder width grip. Point your arms straight in front of you.

              </span>
            </li>
            <li>
              <span>Retract your shoulder blades and shoulder joint until the band taps your chest.
              </span>
            </li>
          </ol>
        </div>
      </div>
    </main>
  );
};

export default Rear_Shoulder;
