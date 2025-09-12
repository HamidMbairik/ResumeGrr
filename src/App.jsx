// imports

import { useEffect, useState } from 'react'
import Navbar from './components/navbar.jsx'

// Hero Section
import Hero from './components/hero.jsx'
import HeroMobile from "./isMobileComponents/heroMobile.jsx"; 

// Features Section
import Features from './components/features.jsx'
import FeaturesMobile from "./isMobileComponents/featuresMobile.jsx";

import CounterSection from './components/countersection.jsx'

// reviews slider
import ReviewsSection from './components/slider.jsx';
import ReviewsSectionMobile from "./isMobileComponents/sliderMobile.jsx";

// try it, pricing, faq, footer
import TryItSection from './components/tryitsection.jsx';
import TryItSectionMobile from './isMobileComponents/tryItMobile.jsx'

import PricingSection from './components/pricingsection.jsx'
import PricingMobile from './isMobileComponents/pricingMobile.jsx'

import PricingHighlightsSlider from './components/pricinghighlightsslider.jsx'

import FAQSection from './components/FAQSection.jsx' 
import FAQSectionMobile from './isMobileComponents/FAQSectionMobile.jsx'

import Footer from './components/footer.jsx';
import FooterMobile from './isMobileComponents/footerMobile.jsx';

// styles

import './index.css'


// the actual app

const App = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check window width
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // You can change 1024 to your breakpoint
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Listen for window resizing

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="font-sans" 
      style={{
        scrollBehavior: 'smooth',
        background: "linear-gradient(135deg, #f3f4f6 0%, #e0e7ff 100%)",
      }}
    >
      <Navbar />
      <div id='Home'>
        {isMobile ? <HeroMobile /> : <Hero />}
      </div>
      <div id='Counter'>
        <CounterSection />
      </div>
      <div id='Features'>
        {isMobile ? <FeaturesMobile /> : <Features />}
      </div>
      <div id='Reviews'>
        {isMobile ? <ReviewsSectionMobile /> : <ReviewsSection />}
      </div>
      <div id='Try it'>
        {isMobile ? <TryItSectionMobile /> : <TryItSection />}
      </div>
      <div id='PricingHighlights'>
        <PricingHighlightsSlider />
      </div>
      <div id='Pricing'>
        {isMobile ? <PricingMobile /> : <PricingSection />}
      </div>
      <div id='FAQ'>
        {isMobile ? <FAQSectionMobile /> : <FAQSection />}
      </div>
      <div id='Footer'>
        {isMobile ? <FooterMobile /> : <Footer />}
      </div>
    </div>
  )
}

export default App