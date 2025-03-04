import AboutSections from './components/about-cards';
import GuideContent from './components/guide-content';
import { JoyCards } from './components/joy-cards'

function renderCards() {
    const container = document.getElementById("joy-card-container");
    const aboutContainer = document.getElementById("about-section-container");
    const gridContainer = document.getElementById("guide-section-container");
    gridContainer.innerHTML = GuideContent();
    container.innerHTML = JoyCards();
    aboutContainer.innerHTML = AboutSections()
  }
  
  document.addEventListener("DOMContentLoaded", renderCards);