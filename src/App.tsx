import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import WhyIBuiltThis from './pages/WhyIBuiltThis';
import HowItWorks from './pages/HowItWorks';
import Competitors from './pages/Competitors';
import VsJobber from './pages/VsJobber';
import VsHousecallPro from './pages/VsHousecallPro';
import VsServiceTitan from './pages/VsServiceTitan';
import VsWorkiz from './pages/VsWorkiz';
import VsFieldEdge from './pages/VsFieldEdge';
import VsServiceM8 from './pages/VsServiceM8';
import ChimneySweepSoftware from './pages/ChimneySweepSoftware';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="why-i-built-this" element={<WhyIBuiltThis />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="competitors" element={<Competitors />} />
          <Route path="vs-jobber" element={<VsJobber />} />
          <Route path="vs-housecall-pro" element={<VsHousecallPro />} />
          <Route path="vs-servicetitan" element={<VsServiceTitan />} />
          <Route path="vs-workiz" element={<VsWorkiz />} />
          <Route path="vs-fieldedge" element={<VsFieldEdge />} />
          <Route path="vs-servicem8" element={<VsServiceM8 />} />
          <Route path="chimney-sweep-software" element={<ChimneySweepSoftware />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

