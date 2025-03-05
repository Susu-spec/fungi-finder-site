import AboutSections from './components/about-cards';
import GuideContent from './components/guide-content';
import { JoyCards } from './components/joy-cards'

function renderCards() {
    const container = document.getElementById("joy-card-container");
    const aboutContainer = document.getElementById("about-section-container");
    
   
    if (container) {
      container.innerHTML = JoyCards();
  }

  if (aboutContainer) {
      aboutContainer.innerHTML = AboutSections();
  }
    GuideContent();
  }
  
  document.addEventListener("DOMContentLoaded", renderCards);