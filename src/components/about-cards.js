import expert1 from "../assets/experts-1.jpg";
import expert2 from "../assets/nature-1.jpg";


const aboutArray = [
  {
    sectionClass: "bg-brown-500",
    containerClass: "flex flex-col md:flex-row",
    image: {
      img: expert1,
      alt: "Man analysing mushrooms",
    },
    heading: "Get to know your mushrooms",
    description: [
      "Successful and safe mushroom foraging begins with a deep understanding of the species you'll encounter in the wild - not just what the edible ones look like, but their toxic look-alikes, seasonal patterns, and preferred habitats.",
      "It can feel like a big task, but <span class='font-bold text-white'>we’ve got a handy reference guide to help you out!</span>",
    ],
    button: {
      text: "Reference Guide",
    },
  },
  {
    sectionClass: "bg-brown-300",
    containerClass: "flex flex-col flex-col-reverse md:flex-row md:flex-row-reverse",
    image: {
      img: expert2,
      alt: "Mushrooms in a forest",
    },
    heading: "Connect with nature",
    description: ["Experience the beauty of the great outdoors while foraging for mushrooms with fellow enthusiasts."],
    button: {
      text: "Learn More",
    },
  },
];

function AboutSection(sectionClass, containerClass, image, heading, description, button) {
  return `
    <div class="${sectionClass}">
        <div class="${containerClass} gap-12 max-w-[90%] md:max-w-[80%] mx-auto py-[3.75rem] md:py-[8rem]">
          <figure class="flex-2 md:max-w-[35rem]">
            <img class="rounded-xl" src="${image.img}" alt="${image.alt}" />
          </figure>
          <div class="flex flex-col gap-2 md:gap-6 flex-1">
            <div class="flex flex-col gap-6 text-gray">
              <h1 class="font-bold text-heading md:!text-5xl text-white">${heading}</h1>
              <p class="font-fira">
                <span>${description[0]}</span><br/><br/>
                ${description[1] ? `<span>${description[1]}</span>` : ""}
              </p>
            </div>
            <button class="text-white font-bold bg-accent py-[0.625rem] px-5 rounded-[0.25rem] max-w-fit">${
              button.text
            }</button>
          </div>
        </div>
      </div>
    `;
}

export default function AboutSections() {
  return aboutArray
    .map((section) =>
      AboutSection(
        section.sectionClass,
        section.containerClass,
        section.image,
        section.heading,
        section.description,
        section.button
      )
    )
    .join("");
}
