
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HeroSection from './Components/heroSection/HeroSection.jsx';
import SafetyAndStyleSection from './Components/secondSection/SafetyAndStyleSection.jsx';
import BikeFeatureSection from './Components/sycleSection/BikeFeatureSection;.jsx';
import BESpectralite from './Components/BESpectralite/BESpectralite.jsx';
import WordlFirstSection from './Components/WorldFirstSection/WordlFirstSection.jsx';
import LastSection from './Components/LastSection/LastSection.jsx';
import Footer from './Components/footer/Footer.jsx';

function App() {
  return (
   <>
   <HeroSection/>
   <SafetyAndStyleSection/>
   <BikeFeatureSection/>
   <BESpectralite/>
   <WordlFirstSection/>
   <LastSection/>
   <Footer/>
   </>
  );
}

export default App;
