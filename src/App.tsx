import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import WhyIBuiltThis from './pages/WhyIBuiltThis';
import HowItWorks from './pages/HowItWorks';
import Competitors from './pages/Competitors';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="why-i-built-this" element={<WhyIBuiltThis />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="competitors" element={<Competitors />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

