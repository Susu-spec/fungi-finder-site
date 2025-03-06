import AboutSections from './components/about-cards';
import GuideContent from './components/guide-content';
import { JoyCards } from './components/joy-cards';

function renderCards() {
  const container = document.getElementById("joy-card-container");
  const aboutContainer = document.getElementById("about-section-container");
  const guideGrids = document.getElementById("guide-grid");

  if (container) {
    container.innerHTML = JoyCards();
  }

  if (aboutContainer) {
    aboutContainer.innerHTML = AboutSections();
  }

  if (guideGrids)  {
    GuideContent();
  }

}

document.addEventListener("DOMContentLoaded", function () {
  renderCards();

  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  if (!menuToggle || !mobileMenu) return;

  menuToggle.addEventListener("click", function (event) {
    event.stopPropagation();
    mobileMenu.classList.toggle("hidden");
  });

  document.addEventListener("click", function (event) {
    if (!mobileMenu.contains(event.target) && !menuToggle.contains(event.target)) {
      mobileMenu.classList.add("hidden");
    }
  });
});
