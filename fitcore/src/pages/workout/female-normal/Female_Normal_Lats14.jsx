import React from "react";
import video105 from "./videos/105Lats.mp4";
import video106 from "./videos/106Lats.mp4";
import video107 from "./videos/107Lats.mp4";
import video108 from "./videos/108Lats.mp4";
import video109 from "./videos/109Lats.mp4";
import video110 from "./videos/110Lats.mp4";
import video111 from "./videos/111Lats.mp4";
import video112 from "./videos/112Lats.mp4";

const Lats14 = () => {
  return (
    <main className="main-content-workout-male-normal">
      <h1>Lats Workout Guide</h1>
      <div className="main_content">
        <div className="video_container">
          <div className="video-card">
            <video src={video105} autoPlay loop muted>
              <p>
                Your browser does not support the video tag. Please use a modern
                browser.
              </p>
            </video>
            <p className="video-caption">Chin Ups - Front View</p>
          </div>
          <div className="video-card">
            <video src={video106} autoPlay loop muted>
              <p>
                Your browser does not support the video tag. Please use a modern
                browser.
              </p>
            </video>
            <p className="video-caption">Chin Ups - Side View</p>
          </div>
        </div>
        <div className="list">
          <h2 className="list-title">How to Perform Chin Ups</h2>
          <ol className="workout-steps">
            <li>
              <span>
                Grab the bar shoulder width apart with a supinated grip (palms
                facing you)
              </span>
            </li>
            <li>
              <span>
                With your body hanging and arms fully extended, pull yourself up
                until your chin is past the bar.
              </span>
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
            <video src={video107} autoPlay loop muted>
              <p>
                Your browser does not support the video tag. Please use a modern
                browser.
              </p>
            </video>
            <p className="video-caption">
              Dumbbell Row Unilateral - Front View
            </p>
          </div>
          <div className="video-card">
            <video src={video108} autoPlay loop muted>
              <p>
                Your browser does not support the video tag. Please use a modern
                browser.
              </p>
            </video>
            <p className="video-caption">Dumbbell Row Unilateral - Side View</p>
          </div>
        </div>
        <div className="list">
          <h2 className="list-title">How to Perform Dumbbell Row Unilateral</h2>
          <ol className="workout-steps">
            <li>
              <span>
                Brace your off arm against something stable (bench, box).
                Stagger your stance so your leg on the side of your working arm
                is back.
              </span>
            </li>
            <li>
              <span>
                Try to get your torso to parallel with the ground. That will
                extend your range of motion.
              </span>
            </li>
            <li>
              <span>
                Let your arm hang freely and then pull your elbow back. Imagine
                you've got a tennis ball in your armpit and squeeze it each rep.
              </span>
            </li>
          </ol>
        </div>
      </div>
      <div className="hr"></div>
      <div className="main_content">
        <div className="video_container">
          <div className="video-card">
            <video src={video109} autoPlay loop muted>
              <p>
                Your browser does not support the video tag. Please use a modern
                browser.
              </p>
            </video>
            <p className="video-caption">Pull Ups - Front View</p>
          </div>
          <div className="video-card">
            <video src={video110} autoPlay loop muted>
              <p>
                Your browser does not support the video tag. Please use a modern
                browser.
              </p>
            </video>
            <p className="video-caption">Pull Ups - Side View</p>
          </div>
        </div>
        <div className="list">
          <h2 className="list-title">How to Perform Pull Ups</h2>
          <ol className="workout-steps">
            <li>
              <span>
                Grasp the bar with an overhand grip, arms and shoulders fully
                extended.
              </span>
            </li>
            <li>
              <span>Pull your body up until your chin is above the bar.</span>
            </li>
            <li>
              <span>Lower your body back to starting position.</span>
            </li>
          </ol>
        </div>
      </div>
      <div className="hr"></div>
      <div className="main_content">
        <div className="video_container">
          <div className="video-card">
            <video src={video111} autoPlay loop muted>
              <p>
                Your browser does not support the video tag. Please use a modern
                browser.
              </p>
            </video>
            <p className="video-caption">
              Kettlebell Incline Shrug - Front View
            </p>
          </div>
          <div className="video-card">
            <video src={video112} autoPlay loop muted>
              <p>
                Your browser does not support the video tag. Please use a modern
                browser.
              </p>
            </video>
            <p className="video-caption">
              Kettlebell Incline Shrug - Side View
            </p>
          </div>
        </div>
        <div className="list">
          <h2 className="list-title">
            How to Perform Kettlebell Incline Shrug
          </h2>
          <ol className="workout-steps">
            <li>
              <span>
                You can use any attachment. Cable should be set all the way to
                the top of the machine.
              </span>
            </li>
            <li>
              <span>
                Grab your attachment and walk a few steps back. Push your butt
                back to where you are leaning forward somewhat.
              </span>
            </li>
            <li>
              <span>
                Initiate the movement with your shoulders and not your elbows.
                Imagine trying to pull the attachment through your thighs at the
                bottom.
              </span>
            </li>
          </ol>
        </div>
      </div>
    </main>
  );
};

export default Lats14;
