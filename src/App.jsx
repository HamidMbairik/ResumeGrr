import Navbar from './components/navbar.jsx'
import Hero from './components/hero.jsx'
import Features from './components/features.jsx'
import CounterSection from './components/countersection.jsx'
import ReviewsSection from './components/slider.jsx'
import TryItSection from './components/tryitsection.jsx'
import './index.css'


const App = () => {
  return (
    <div className="font-sans">
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
      <div id='TryIt'>
        <TryItSection />
      </div>
    </div>
  )
}

export default App