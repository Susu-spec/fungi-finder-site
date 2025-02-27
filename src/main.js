import AboutSections from './components/about-cards';
import { JoyCards } from './components/joy-cards'

function renderCards() {
    const container = document.getElementById("joy-card-container");
    const aboutContainer = document.getElementById("about-section-container")
    container.innerHTML = JoyCards();
    aboutContainer.innerHTML = AboutSections()
  }
  
  document.addEventListener("DOMContentLoaded", renderCards);