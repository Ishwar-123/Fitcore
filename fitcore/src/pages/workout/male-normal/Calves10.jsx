import React from "react";
import video73 from "./videos/73calves.mp4";
import video74 from "./videos/74calves.mp4";
import video75 from "./videos/75calves.mp4";
import video76 from "./videos/76calves.mp4";
import video77 from "./videos/77calves.mp4";
import video78 from "./videos/78calves.mp4";
import video79 from "./videos/79calves.mp4";
import video80 from "./videos/80.mp4";

const CalvesWorkout = () => {
  return (
    <main className="main-content-workout-male-normal">
      <h1>Calves Workout Guide</h1>
      <div className="main_content">
        <div className="video_container">
          <div className="video-card">
            <video src={video73} autoPlay loop muted>
              <p>
                Your browser does not support the video tag. Please use a modern
                browser.
              </p>
            </video>
            <p className="video-caption">
              Machine Standing Calf Raises - Front View
            </p>
          </div>
          <div className="video-card">
            <video src={video74} autoPlay loop muted>
              <p>
                Your browser does not support the video tag. Please use a modern
                browser.
              </p>
            </video>
            <p className="video-caption">
              Machine Standing Calf Raises - Front View
            </p>
          </div>
        </div>
        <div className="list">
          <h2 className="list-title">
            How to Perform Machine Standing Calf Raises
          </h2>
          <ol className="workout-steps">
            <li>
              <span>
                Adjust the machine in accordance with your height and place your
                shoulders underneath the padded lever.
              </span>
            </li>
            <li>
              <span>
                The balls of your feet should be supporting your weight on the
                calve block, your heels extending off of it.
              </span>
            </li>
            <li>
              <span>
                Extend your heels upwards while keeping your knees stationary,
                and pause at the contracted position.
              </span>
            </li>
            <li>
              <span>Slowly return to the starting position. Repeat.</span>
            </li>
          </ol>
        </div>
      </div>
      <div className="hr"></div>
      <div className="main_content">
        <div className="video_container">
          <div className="video-card">
            <video src={video75} autoPlay loop muted>
              <p>
                Your browser does not support the video tag. Please use a modern
                browser.
              </p>
            </video>
            <p className="video-caption">
              Machine Seated Calf Raises - Front View
            </p>
          </div>
          <div className="video-card">
            <video src={video76} autoPlay loop muted>
              <p>
                Your browser does not support the video tag. Please use a modern
                browser.
              </p>
            </video>
            <p className="video-caption">
              Machine Seated Calf Raises - Side View
            </p>
          </div>
        </div>
        <div className="list">
          <h2 className="list-title">
            How to Perform Machine Seated Calf Raises
          </h2>
          <ol className="workout-steps">
            <li>
              <span>
                Get comfortable on the machine, then place your lower thighs
                beneath the padded lever. Place your toes and the balls of your
                feet onto the foot supports.
              </span>
            </li>
            <li>
              <span>
                Prevent the weight from slipping forward by gripping the
                handles, and release the safety bar. Lower the weight until your
                calves are extended.
              </span>
            </li>
            <li>
              <span>
                Push your heels up to lift the padded lever and hold the
                contracted position, then slowly lower back down to the starting
                position. Repeat.
              </span>
            </li>
          </ol>
        </div>
      </div>
      <div className="hr"></div>
      <div className="main_content">
        <div className="video_container">
          <div className="video-card">
            <video src={video77} autoPlay loop muted>
              <p>
                Your browser does not support the video tag. Please use a modern
                browser.
              </p>
            </video>
            <p className="video-caption">Barbell Calf Raises - Front View</p>
          </div>
          <div className="video-card">
            <video src={video78} autoPlay loop muted>
              <p>
                Your browser does not support the video tag. Please use a modern
                browser.
              </p>
            </video>
            <p className="video-caption">Barbell Calf Raises - Side View</p>
          </div>
        </div>
        <div className="list">
          <h2 className="list-title">How to Perform Barbell Calf Raises</h2>
          <ol className="workout-steps">
            <li>
              <span>Place the bar on your back</span>
            </li>
            <li>
              <span>Start with feet flat on the ground</span>
            </li>
            <li>
              <span>
                Extend your heels upwards while keeping your knees stationary,
                and pause at the contracted position.
              </span>
            </li>
            <li>
              <span>Slowly return to the starting position. Repeat.</span>
            </li>
          </ol>
        </div>
      </div>
      <div class="hr"></div>
      <div className="main_content">
        <div className="video_container">
          <div className="video-card">
            <video src={video79} autoPlay loop muted>
              <p>
                Your browser does not support the video tag. Please use a modern
                browser.
              </p>
            </video>
            <p className="video-caption">
              Calves Stretch Variation One - Front View
            </p>
          </div>
          <div className="video-card">
            <video src={video80} autoPlay loop muted>
              <p>
                Your browser does not support the video tag. Please use a modern
                browser.
              </p>
            </video>
            <p className="video-caption">
              Calves Stretch Variation One - Side View
            </p>
          </div>
        </div>
        <div className="list">
          <h2 className="list-title">
            How to Perform Calves Stretch Variation One
          </h2>
          <ol className="workout-steps">
            <li>
              <span>
                Place the ball of your foot against the wall with your heel on
                the ground. Place your hands on the wall in front of your
                shoulders.
              </span>
            </li>
            <li>
              <span>
                Keeping your knee straight, slowly lean towards the wall, pause
                for a few seconds when you feel the stretch extending through
                your calf muscle.
              </span>
            </li>
            <li>
              <span>
                Return to the starting position, and repeat the stretch with
                your other leg.
              </span>
            </li>
          </ol>
        </div>
      </div>
    </main>
  );
};

export default CalvesWorkout;
