import cookingMushrooms from "../assets/cooking-mushrooms.jpg?url";
import diverseMushrooms from "../assets/diverse-mushrooms.jpg?url";
import mushrooms from "../assets/mushrooms.jpg?url";


const benefits = [
  {
    image: {
        img: diverseMushrooms,
        alt: "Mushrooms on a tree bark"
    },
    heading: "Outdoor Exploration",
    body: "Mushroom foraging takes you off the beaten path and into the heart of nature. Learn to read the landscape, identifying prime mushroom habitats from lush forest floors to sun-dappled meadows. Every expedition is a new adventure, with the potential for exciting discoveries around every tree and under every log.",
  },
  {
    image: {
        img: mushrooms,
        alt: "A variety of mushrooms",
    },
    heading: "Botanical Expertise",
    body: "Dive into the intricate world of fungal biology. Discover the unique structures of mushrooms, from caps to gills to spores. Learn to use field guides and identification keys to distinguish between species. With practice, you'll stat to see the forest in a whole new light, recognizing the vital role fungi play in ecosystem health.",
  },
  {
    image: {
        img: cookingMushrooms,
        alt: "Cooked mushrooms on a plate"
    },
    heading: "Culinary Delights",
    body: "Transform your foraged finds into delectable dishes. Many edible mushrooms offer unique flavors and textures that can elevate your cooking. From the earthy porcini to the delicate chanterelle, each variety brings its own character to the table. Explore recipes, preservation techniques, and the joy of cooking with nature's bounty.",
  },
];


export function JoyCard(image, heading, body, className="flex-col", headingClass="text-primary", imageClass="") {
  return `
        <li class="rounded-xl p-4 gap-6 bg-brown-200 flex ${className} justify-center w-full">
          <figure class="w-full ${imageClass}">
            <img src=${image.img} alt=${image.alt} class="rounded-xl w-full"/>
            <figcaption></figcaption>
          </figure>
          <div class="flex flex-col gap-6">
            <h2 class="${headingClass} font-outfit font-bold text-headingLg">${heading}</h2>
            <p class="font-fira text-gray text-bodyReg">${body}</p>
          </div>
          
        </li>
    `;
}

export function JoyCards() {
  return `
        <ul class="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${benefits.map((benefit) => JoyCard(benefit.image, benefit.heading, benefit.body)).join("")}
        </ul>
    `;
}
