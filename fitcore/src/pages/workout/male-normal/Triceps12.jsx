import React from "react";
import video89 from "./videos/89triceps.mp4";
import video90 from "./videos/90triceps.mp4";
import video91 from "./videos/91triceps.mp4";
import video92 from "./videos/92triceps.mp4";
import video93 from "./videos/93triceps.mp4";
import video94 from "./videos/94triceps.mp4";
import video95 from "./videos/95triceps.mp4";
import video96 from "./videos/96triceps.mp4";

const Triceps12 = () => {
  return (
    <main className="main-content-workout-male-normal">
      <h1>Triceps Workout Guide</h1>
      <div className="main_content">
        <div className="video_container">
          <div className="video-card">
            <video src={video90} autoPlay loop muted>
              <p>
                Your browser does not support the video tag. Please use a modern
                browser.
              </p>
            </video>
            <p className="video-caption">Cable Rope Pushdown - Front View</p>
          </div>
          <div className="video-card">
            <video src={video89} autoPlay loop muted>
              <p>
                Your browser does not support the video tag. Please use a modern
                browser.
              </p>
            </video>
            <p className="video-caption">Cable Rope Pushdown - Side View</p>
          </div>
        </div>
        <div className="list">
          <h2 className="list-title">How to Perform Cable Rope Pushdown</h2>
          <ol className="workout-steps">
            <li>
              <span>
                The cable should be set all the way at the top of the machine.
              </span>
            </li>
            <li>
              <span>
                Make sure to keep your upper arm glued at your side. Extend your
                elbows until you feel your triceps contract.
              </span>
            </li>
          </ol>
        </div>
      </div>
      <div className="hr"></div>
      <div className="main_content">
        <div className="video_container">
          <div className="video-card">
            <video src={video92} autoPlay loop muted>
              <p>
                Your browser does not support the video tag. Please use a modern
                browser.
              </p>
            </video>
            <p className="video-caption">
              Barbell Close Grip Bench Press - Front View
            </p>
          </div>
          <div className="video-card">
            <video src={video91} autoPlay loop muted>
              <p>
                Your browser does not support the video tag. Please use a modern
                browser.
              </p>
            </video>
            <p className="video-caption">
              Barbell Close Grip Bench Press - Side View
            </p>
          </div>
        </div>
        <div className="list">
          <h2 className="list-title">
            How to Perform Barbell Close Grip Bench Press
          </h2>
          <ol className="workout-steps">
            <li>
              <span>
                Lay flat on the bench with your feet on the ground. With a
                narrow grip on the bar, straighten your arms
              </span>
            </li>
            <li>
              <span>Lower the bar to your lower-mid chest</span>
            </li>
            <li>
              <span>Slowly raise the bar until you've locked your elbows.</span>
            </li>
          </ol>
        </div>
      </div>
      <div className="hr"></div>
      <div className="main_content">
        <div className="video_container">
          <div className="video-card">
            <video src={video93} autoPlay loop muted>
              <p>
                Your browser does not support the video tag. Please use a modern
                browser.
              </p>
            </video>
            <p className="video-caption">Dumbbell Skullcrusher - Front View</p>
          </div>
          <div className="video-card">
            <video src={video94} autoPlay loop muted>
              <p>
                Your browser does not support the video tag. Please use a modern
                browser.
              </p>
            </video>
            <p className="video-caption">Dumbbell Skullcrusher - Side View</p>
          </div>
        </div>
        <div className="list">
          <h2 className="list-title">How to PerformDumbbell Skullcrusher</h2>
          <ol className="workout-steps">
            <li>
              <span>
                Lay flat on the floor or a bench with your fists extended to the
                ceiling and a neutral grip.
              </span>
            </li>
            <li>
              <span>
                Break at the elbows until your fists are by your temples. Then
                extend your elbows and flex your triceps at the top.
              </span>
            </li>
          </ol>
        </div>
      </div>
      <div className="hr"></div>
      <div className="main_content">
        <div className="video_container">
          <div className="video-card">
            <video src={video95} autoPlay loop muted>
              <p>
                Your browser does not support the video tag. Please use a modern
                browser.
              </p>
            </video>
            <p className="video-caption">Bench Dips - Front View</p>
          </div>
          <div className="video-card">
            <video src={video96} autoPlay loop muted>
              <p>
                Your browser does not support the video tag. Please use a modern
                browser.
              </p>
            </video>
            <p className="video-caption">Bench Dips - Side View</p>
          </div>
        </div>
        <div className="list">
          <h2 className="list-title">How to Perform Bench Dips</h2>
          <ol className="workout-steps">
            <li>
              <span>
                Grip the edge of the bench with your hands, Keep your feet
                together and legs straight.
              </span>
            </li>
            <li>
              <span>Lower your body straight down.</span>
            </li>
            <li>
              <span>Slowly press back up to the starting point.</span>
            </li>
            <li>
              <span>
                TIP: Make this harder by raising your feet off the floor and
                adding weight.
              </span>
            </li>
          </ol>
        </div>
      </div>
    </main>
  );
};

export default Triceps12;
