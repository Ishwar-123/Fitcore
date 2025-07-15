import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// {/*=================== Main Components  ====================*/}
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Index';
import Workouts from './pages/Workouts';
import Nutrition from './pages/Nutrition';
import Programs from './pages/Programs';
import Contact from './pages/Contact';
import './App.css';
// {/*================= Male_Normal_Workouts ==================*/}
import Traps01 from './pages/workout/male-normal/Traps01';
import Front_Shoulder02 from './pages/workout/male-normal/Front_Shoulder02';
import Chest03 from './pages/workout/male-normal/Chest03';
import Biceps04 from './pages/workout/male-normal/Biceps04';
import ForArms05 from './pages/workout/male-normal/ForArms05';
import Hands06 from './pages/workout/male-normal/Hands06';
import Obliques07 from './pages/workout/male-normal/Obliques07';
import Abdominals08 from './pages/workout/male-normal/Abdominals08';
import Quads09 from './pages/workout/male-normal/Quads09';
import Calves10 from './pages/workout/male-normal/Calves10';
import Rear_Shoulder from './pages/workout/male-normal/Rear_shoulders11';
import Triceps12 from './pages/workout/male-normal/Triceps12';
import Traps_middle13 from './pages/workout/male-normal/Traps_middle13';
import Lats14 from './pages/workout/male-normal/Lats14';
import Lowerback15 from './pages/workout/male-normal/Lowerback15';
import Hamstrings17 from './pages/workout/male-normal/Hamstrings17';
import Glutes16 from './pages/workout/male-normal/Glutes16';
// {/*================= Female_Normal_Workouts ==================*/}
import Female_Normal_Traps01 from './pages/workout/female-normal/Female_Normal_Traps01'
import Female_Normal_Front_Shoulder02 from './pages/workout/female-normal/Female_Normal_Front_Shoulder02'
import Female_Normal_Chest03 from './pages/workout/female-normal/Female_Normal_Chest03'
import Female_Normal_Biceps04 from './pages/workout/female-normal/Female_Normal_Biceps04'
import Female_Normal_ForArms05 from './pages/workout/female-normal/Female_Normal_ForArms05'
import Female_Normal_Hands06 from './pages/workout/female-normal/Female_Normal_Hands06'
import Female_Normal_Obliques07 from './pages/workout/female-normal/Female_Normal_Obliques07'
import Female_Normal_Abdominals08 from './pages/workout/female-normal/Female_Normal_Abdominals08'
import Female_Normal_Quads09 from './pages/workout/female-normal/Female_Normal_Quads09'
import Female_Normal_Calves10 from './pages/workout/female-normal/Female_Normal_Calves10'
import Female_Normal_Rear_shoulders11 from './pages/workout/female-normal/Female_Normal_Rear_shoulders11'
import Female_Normal_Triceps12 from './pages/workout/female-normal/Female_Normal_Triceps12'
import Female_Normal_Traps_middle13 from './pages/workout/female-normal/Female_Normal_Traps_middle13'
import Female_Normal_Lats14 from './pages/workout/female-normal/Female_Normal_Lats14'
import Female_Normal_Lowerback15 from './pages/workout/female-normal/Female_Normal_Lowerback15'
import Female_Normal_Glutes16 from './pages/workout/female-normal/Female_Normal_Glutes16'
import Female_Normal_Hamstrings17 from './pages/workout/female-normal/Female_Normal_Hamstrings17'
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            {/*=================== Main Components  ====================*/}
            <Route path="/" element={<Home />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/nutrition" element={<Nutrition />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/contact" element={<Contact />} />
            {/*================= Male_Normal_Workouts ==================*/}
            {/* Front  */}
            <Route path="/Male_Normal_Traps" element={<Traps01 />} />
            <Route path="/Male_Normal_Front_Shoulder" element={<Front_Shoulder02 />} />
            <Route path="/Male_Normal_Chest" element={<Chest03 />} />
            <Route path="/Male_Normal_Biceps" element={<Biceps04 />} />
            <Route path="/Male_Normal_Forarms" element={<ForArms05 />} />
            <Route path="/Male_Normal_Hands" element={<Hands06 />} />
            <Route path="/Male_Normal_Obliques" element={<Obliques07 />} />
            <Route path="/Male_Normal_Abdominals" element={<Abdominals08 />} />
            <Route path="/Male_Normal_Quads" element={<Quads09 />} />
            <Route path="/Male_Normal_Calves" element={<Calves10 />} />
            {/* Back  */}
            <Route path="/Male_Normal_Rear_Shoulder" element={<Rear_Shoulder />} />
            <Route path="/Male_Normal_Triceps" element={<Triceps12 />} />
            <Route path="/Male_Normal_Middle-Trapes" element={<Traps_middle13 />} />
            <Route path="/Male_Normal_Lats" element={<Lats14 />} />
            <Route path="/Male_Normal_Lower_Back" element={<Lowerback15 />} />
            <Route path="/Male_Normal_Glutes" element={<Glutes16 />} />
            <Route path="/Male_Normal_Hamstrings" element={<Hamstrings17 />} />
            {/*================= Female_Normal_Workouts ==================*/}
            {/* Front  */}
            <Route path="/Female_Normal_Traps" element={<Female_Normal_Traps01 />} />
            <Route path="/Female_Normal_Front_Shoulder" element={<Female_Normal_Front_Shoulder02 />} />
            <Route path="/Female_Normal_Chest" element={<Female_Normal_Chest03 />} />
            <Route path="/Female_Normal_Biceps" element={<Female_Normal_Biceps04 />} />
            <Route path="/Female_Normal_ForArms" element={<Female_Normal_ForArms05 />} />
            <Route path="/Female_Normal_Hands" element={<Female_Normal_Hands06 />} />
            <Route path="/Female_Normal_Obliques" element={<Female_Normal_Obliques07 />} />
            <Route path="/Female_Normal_Abdominals" element={<Female_Normal_Abdominals08 />} />
            <Route path="/Female_Normal_Quads" element={<Female_Normal_Quads09 />} />
            <Route path="/Female_Normal_Calves" element={<Female_Normal_Calves10 />} />
            {/* Back  */}
            <Route path="/Female_Normal_Rear_shoulders" element={<Female_Normal_Rear_shoulders11 />} />
            <Route path="/Female_Normal_Triceps" element={<Female_Normal_Triceps12 />} />
            <Route path="/Female_Normal_Traps_middle" element={<Female_Normal_Traps_middle13 />} />
            <Route path="/Female_Normal_Lats" element={<Female_Normal_Lats14 />} />
            <Route path="/Female_Normal_Lowerback" element={<Female_Normal_Lowerback15 />} />
            <Route path="/Female_Normal_Glutes" element={<Female_Normal_Glutes16 />} />
            <Route path="/Female_Normal_Hamstrings" element={<Female_Normal_Hamstrings17 />} />

          </Routes>

        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;