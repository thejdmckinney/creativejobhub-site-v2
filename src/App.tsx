import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
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
import HandymanSoftware from './pages/HandymanSoftware';
import PoolServiceSoftware from './pages/PoolServiceSoftware';
import PlumbingSoftware from './pages/PlumbingSoftware';
import HVACSoftware from './pages/HVACSoftware';
import ElectricalSoftware from './pages/ElectricalSoftware';
import LandscapingSoftware from './pages/LandscapingSoftware';
import PaintingSoftware from './pages/PaintingSoftware';
import GeneralContractorsSoftware from './pages/GeneralContractorsSoftware';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NotFound from './pages/NotFound';
import BringYourOwnTools from './pages/BringYourOwnTools';
import SetupGuidesIndex from './pages/setup-guides/SetupGuidesIndex';
import TwilioSetup from './pages/setup-guides/TwilioSetup';
import ResendSetup from './pages/setup-guides/ResendSetup';
import MapboxSetup from './pages/setup-guides/MapboxSetup';
import StripeSetup from './pages/setup-guides/StripeSetup';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Studio from './pages/Studio';
import Contact from './pages/Contact';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import SmsTerms from './pages/SmsTerms';
import SchedulingFeatures from './pages/SchedulingFeatures';
import InvoicingPayments from './pages/InvoicingPayments';
import OutreachHub from './pages/OutreachHub';
import Features from './pages/Features';
import JobsMap from './pages/JobsMap';
import FieldServiceSoftwareTexas from './pages/FieldServiceSoftwareTexas';
import HVACSoftwarePhoenix from './pages/HVACSoftwarePhoenix';
import PlumbingSoftwareFlorida from './pages/PlumbingSoftwareFlorida';
import FieldServiceSoftwareCalifornia from './pages/FieldServiceSoftwareCalifornia';
import ContractorSoftwareDallas from './pages/ContractorSoftwareDallas';
import SmartMaterialsList from './pages/SmartMaterialsList';
import ChimneyInspectionSuite from './pages/ChimneyInspectionSuite';
import RouteOptimization from './pages/RouteOptimization';
import AffordableFieldServiceSoftware from './pages/AffordableFieldServiceSoftware';
import JobberAlternativeUnder100 from './pages/JobberAlternativeUnder100';
import SoftwareHandymanScheduling from './pages/SoftwareHandymanScheduling';
import BestFieldServiceSoftware2026 from './pages/BestFieldServiceSoftware2026';
import HousecallProAlternativeAffordable from './pages/HousecallProAlternativeAffordable';
import QuickBooksIntegration from './pages/QuickBooksIntegration';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <SpeedInsights />
      <Routes>
        {/* Studio Route - Outside MainLayout for full screen */}
        <Route path="/studio/*" element={<Studio />} />
        
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
          <Route path="handyman-software" element={<HandymanSoftware />} />
          <Route path="pool-service-software" element={<PoolServiceSoftware />} />
          <Route path="plumbing-software" element={<PlumbingSoftware />} />
          <Route path="hvac-software" element={<HVACSoftware />} />
          <Route path="electrical-software" element={<ElectricalSoftware />} />
          <Route path="landscaping-software" element={<LandscapingSoftware />} />
          <Route path="painting-software" element={<PaintingSoftware />} />
          <Route path="general-contractors-software" element={<GeneralContractorsSoftware />} />
          
          {/* Long-tail Keyword Pages */}
          <Route path="affordable-field-service-software" element={<AffordableFieldServiceSoftware />} />
          <Route path="jobber-alternative-under-100" element={<JobberAlternativeUnder100 />} />
          <Route path="software-for-handyman-business-scheduling" element={<SoftwareHandymanScheduling />} />
          <Route path="best-field-service-software-small-business-2026" element={<BestFieldServiceSoftware2026 />} />
          <Route path="housecall-pro-alternative-affordable" element={<HousecallProAlternativeAffordable />} />
          <Route path="field-service-software-quickbooks-integration" element={<QuickBooksIntegration />} />
          
          {/* Location Pages */}
          <Route path="field-service-software-texas" element={<FieldServiceSoftwareTexas />} />
          <Route path="hvac-software-phoenix" element={<HVACSoftwarePhoenix />} />
          <Route path="plumbing-software-florida" element={<PlumbingSoftwareFlorida />} />
          <Route path="field-service-software-california" element={<FieldServiceSoftwareCalifornia />} />
          <Route path="contractor-software-dallas" element={<ContractorSoftwareDallas />} />
          
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="bring-your-own-tools" element={<BringYourOwnTools />} />
          <Route path="contact" element={<Contact />} />
          <Route path="scheduling" element={<SchedulingFeatures />} />
          <Route path="invoicing-payments" element={<InvoicingPayments />} />
          <Route path="outreach-hub" element={<OutreachHub />} />
          <Route path="features" element={<Features />} />
          <Route path="features/jobs-map" element={<JobsMap />} />
          <Route path="jobs-map" element={<JobsMap />} />
          <Route path="smart-materials-list" element={<SmartMaterialsList />} />
          <Route path="chimney-inspection-suite" element={<ChimneyInspectionSuite />} />
          <Route path="features/route-optimization" element={<RouteOptimization />} />
          {/* Legal Pages */}
          <Route path="terms-of-service" element={<TermsOfService />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="sms-terms" element={<SmsTerms />} />
          {/* Blog Routes */}
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          {/* Setup Guides */}
          <Route path="setup-guides" element={<SetupGuidesIndex />} />
          <Route path="setup-guides/twilio" element={<TwilioSetup />} />
          <Route path="setup-guides/resend" element={<ResendSetup />} />
          <Route path="setup-guides/mapbox" element={<MapboxSetup />} />
          <Route path="setup-guides/stripe" element={<StripeSetup />} />
          {/* Catch-all 404 route */}
          <Route path="*" element={<NotFound />} />
        </Route>
        {/* Studio Route - Outside MainLayout for full screen */}
        <Route path="/studio" element={<Studio />} />
      </Routes>
    </Router>
  );
}

export default App;

