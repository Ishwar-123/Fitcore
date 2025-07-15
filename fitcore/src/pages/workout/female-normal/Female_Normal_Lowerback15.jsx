import React from "react";
import video113 from "./videos/113lowerback.mp4";
import video114 from "./videos/114lowerback.mp4";
import video115 from "./videos/115lowerback.mp4";
import video116 from "./videos/116lowerback.mp4";
import video117 from "./videos/117lowerback.mp4";
import video118 from "./videos/118lowerback.mp4";
import video119 from "./videos/119lowerback.mp4"; 
import video120 from "./videos/120lowerback.mp4";

const Lowerback15 = () => {
  return (
    <main className="main-content-workout-male-normal">
      <h1>Lowerback Workout Guide</h1>
      <div className="main_content">
        <div className="video_container">
          <div className="video-card">
            <video src={video113} autoPlay loop muted>
              <p>
                Your browser does not support the video tag. Please use a modern
                browser.
              </p>
            </video>
            <p className="video-caption">Barbell Deadlift - Front View</p>
          </div>
          <div className="video-card">
            <video src={video114} autoPlay loop muted>
              <p>
                Your browser does not support the video tag. Please use a modern
                browser.
              </p>
            </video>
            <p className="video-caption">Barbell Deadlift - Side View</p>
          </div>
        </div>
        <div className="list">
          <h2 className="list-title">How to Perform Barbell Deadlift</h2>
          <ol className="workout-steps">
            <li>
              <span>
                Stand with your mid-foot under the bar and grip the bar with
                your hands, about a shoulder width apart.
              </span>
            </li>
            <li>
              <span>
                Bend your knees, then lift the bar by straightening your back.
                It is important to keep your back straight.
              </span>
            </li>
            <li>
              <span>Stand to your full height and hold.</span>
            </li>
            <li>
              <span>
                Lower the bar to the floor by bending your knees and keeping
                your back straight.
              </span>
            </li>
          </ol>
        </div>
      </div>
      <div className="hr"></div>
      <div className="main_content">
        <div className="video_container">
          <div className="video-card">
            <video src={video115} autoPlay loop muted>
              <p>
                Your browser does not support the video tag. Please use a modern
                browser.
              </p>
            </video>
            <p className="video-caption">
              Machine 45 Degree Back Extension - Front View
            </p>
          </div>
          <div className="video-card">
            <video src={video116} autoPlay loop muted>
              <p>
                Your browser does not support the video tag. Please use a modern
                browser.
              </p>
            </video>
            <p className="video-caption">
              Machine 45 Degree Back Extension - Side View
            </p>
          </div>
        </div>
        <div className="list">
          <h2 className="list-title">
            How to Perform Machine 45 Degree Back Extension
          </h2>
          <ol className="workout-steps">
            <li>
              <span>
                Position your thighs on the padding and hook your feet on the
                platform supports.
              </span>
            </li>
            <li>
              <span>
                Keeping your back straight, slowly bend at your waist until your
                legs and back are at a 45° angle.
              </span>
            </li>
            <li>
              <span>Slowly raise your body to the starting position.</span>
            </li>
          </ol>
        </div>
      </div>
      <div className="hr"></div>
      <div className="main_content">
        <div className="video_container">
          <div className="video-card">
            <video src={video117} autoPlay loop muted>
              <p>
                Your browser does not support the video tag. Please use a modern
                browser.
              </p>
            </video>
            <p className="video-caption">
              Barbell Low Bar Good Morning - Front View
            </p>
          </div>
          <div className="video-card">
            <video src={video118} autoPlay loop muted>
              <p>
                Your browser does not support the video tag. Please use a modern
                browser.
              </p>
            </video>
            <p className="video-caption">
              Barbell Low Bar Good Morning - Side View
            </p>
          </div>
        </div>
        <div className="list">
          <h2 className="list-title">
            How to Perform Barbell Low Bar Good Morning
          </h2>
          <ol className="workout-steps">
            <li>
              <span>
                Place the bar between your traps and rear delts. Pull your
                shoulder blades back to give the bar a shelf to sit on.
              </span>
            </li>
            <li>
              <span>
                Push your hips back until you feel a stretch in your hamstrings.
                This means you're nearing the end of your Range of Motion with
                out rounding your spine.
              </span>
            </li>
            <li>
              <span>
                When you feel the stretch push your hips forward until you'e in
                a standing position.
              </span>
            </li>
          </ol>
        </div>
      </div>
      <div className="hr"></div>
      <div className="main_content">
        <div className="video_container">
          <div className="video-card">
            <video src={video119} autoPlay loop muted>
              <p>
                Your browser does not support the video tag. Please use a modern
                browser.
              </p>
            </video>
            <p className="video-caption">Supermans - Front View</p>
          </div>
          <div className="video-card">
            <video src={video120} autoPlay loop muted>
              <p>
                Your browser does not support the video tag. Please use a modern
                browser.
              </p>
            </video>
            <p className="video-caption">Supermans - Side View</p>
          </div>
        </div>
        <div className="list">
          <h2 className="list-title">How to Perform Supermans</h2>
          <ol className="workout-steps">
            <li>
              <span>
                Lie face down on the floor with your arms fully extended in
                front of you.
              </span>
            </li>
            <li>
              <span>
                Simultaneously raise your arms, legs and chest off of the floor
                and hold the position.
              </span>
            </li>
            <li>
              <span>
                Slowly lower your arms, legs and chest back to the starting
                position. Repeat.
              </span>
            </li>
          </ol>
        </div>
      </div>
    </main>
  );
};

export default Lowerback15;
