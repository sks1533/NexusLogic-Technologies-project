import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPageView1 from './components/LandingPageView1';
import LandingPageView2 from './components/LandingPageView2';
import MergedLandingPage from './components/MergedLandingPage'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/landing1" element={<LandingPageView1 />} />
        <Route path="/landing2" element={<LandingPageView2 />} />
        <Route path="/landing3" element={<MergedLandingPage />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
