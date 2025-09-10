import Navbar from './components/navbar.jsx'
import Hero from './components/hero.jsx'
import Features from './components/features.jsx'
import CounterSection from './components/countersection.jsx'
import ReviewsSection from './components/slider.jsx'
import TryItSection from './components/tryitsection.jsx'
import PricingSection from './components/pricingsection.jsx'
import PricingHighlightsSlider from './components/pricinghighlightsslider.jsx'
import FAQSection from './components/FAQSection.jsx' 
import Footer from './components/footer.jsx'
import './index.css'


const App = () => {
  return (
    <div className="font-sans" 
      style={{
        scrollBehavior: 'smooth',
        background: "linear-gradient(135deg, #f3f4f6 0%, #e0e7ff 100%)",
      }}
    >
      <Navbar />
      <div id='Home'>
        <Hero />
      </div>
      <div id='Counter'>
        <CounterSection />
      </div>
      <div id='Features'>
        <Features />
      </div>
      <div id='Reviews'>
        <ReviewsSection />
      </div>
      <div id='Try it'>
        <TryItSection />
      </div>
      <div id='PricingHighlights'>
        <PricingHighlightsSlider />
      </div>
      <div id='Pricing'>
        <PricingSection />
      </div>
      <div id='FAQ'>
        <FAQSection />
      </div>
      <div id='Footer'>
        <Footer />
      </div>
    </div>
  )
}

export default App