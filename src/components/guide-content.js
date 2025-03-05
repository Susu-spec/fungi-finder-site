import { JoyCard } from "./joy-cards";
import mushroom from "../assets/mushroom.jpg"
import forage from "../assets/start-foraging.jpg"
import cave from "../assets/where-to-find.jpg"
import identify from "../assets/identify-mushrooms.jpg"

const guideArray = [
    {
        heading: "Chantelle",
        tags: [
            {
                background: "bg-accent-dark",
                content: "edible"
            },
            {
                background: "bg-accent-dark",
                content: "summer"
            }
        ],
        content: "Golden-yellow, funnel-shaped mushroom with false gills",
        note: "Has toxic look-alikes - learn proper identification"
    },
    {
        heading: "Morel",
        tags: [
            {
                background: "bg-red",
                content: "toxic"
            },
            {
                background: "bg-accent-dark",
                content: "spring"
            }
        ],
        content: "Distinctive honeycomb-like cap structure",
        note: "Must be cooked before eating"
    },
    {
        heading: "Chicken of the woods",
        tags: [
            {
                background: "bg-accent-dark",
                content: "edible"
            },
            {
                background: "bg-accent-dark",
                content: "summer"
            }
        ],
        content: "Bright orange bracket fungus with yellow edges",
        note: "Avoid if growing certain tree species"
    },
    {
        heading: "Death cap",
        tags: [
            {
                background: "bg-red",
                content: "toxic"
            },
            {
                background: "bg-accent-dark",
                content: "summer"
            }
        ],
        content: "Pale green to white cap with white gills",
        note: "Extremely toxic - study for safety awareness"
    },
    {
        heading: "Oyster Mushroom",
        tags: [
            {
                background: "bg-accent-dark",
                content: "edible"
            },
            {
                background: "bg-orange",
                content: "fall"
            }
        ],
        content: "Fan shaped caps growing in clusters",
        note: "Great beginner mushroom, few look-alikes"
    },
    {
        heading: "Lion's Mane",
        tags: [
            {
                background: "bg-accent-dark",
                content: "edible"
            },
            {
                background: "bg-orange",
                content: "fall"
            }
        ],
        content: "White, shaggy appearance like a lion's mane",
        note: "No toxic lookalikes"
    },
    {
        heading: "Destroying Angel",
        tags: [
            {
                background: "bg-red",
                content: "toxic"
            },
            {
                background: "bg-accent-dark",
                content: "summer"
            }
        ],
        content: "Pure, white mushroom with a sack-like base",
        note: "Deadly toxic - study for safety awareness"
    },
    {
        heading: "King Bolete",
        tags: [
            {
                background: "bg-accent-dark",
                content: "edible"
            },
            {
                background: "bg-accent-dark",
                content: "summer"
            }
        ],
        content: "Large brown cap with thick stem",
        note: "Learn to distinguish from similar species"
    },
    {
        heading: "Shaggy Mane",
        tags: [
            {
                background: "bg-accent-dark",
                content: "edible"
            },
            {
                background: "bg-orange",
                content: "fall"
            }
        ],
        content: "Tall white mushroom with shaggy scales",
        note: "Must be harvested and eaten quickly"
    },
    {
        heading: "Maitake",
        tags: [
            {
                background: "bg-accent-dark",
                content: "edible"
            },
            {
                background: "bg-orange",
                content: "fall"
            }
        ],
        content: "Large, feathery clusters with overlapping gray-brown caps",
        note: "Also known as Hen of the Woods - no toxic lookalikes"
    },
    {
        heading: "False morel",
        tags: [
            {
                background: "bg-orange",
                content: "toxic"
            },
            {
                background: "bg-teal",
                content: "spring"
            }
        ],
        content: "Brain-like, reddish-brown cap with irregular shape",
        note: "Highly toxic - often confused with morels"
    },
    {
        heading: "Matsutake",
        tags: [
            {
                background: "bg-accent-dark",
                content: "edible"
            },
            {
                background: "bg-red",
                content: "fall"
            }
        ],
        content: "White to brown stem with thick stem with distinct spicy aroma",
        note: "Verify identification - has toxic lookalikes"
    },
]

export const faqArray = [
    {
        image: {
            img: forage,
            alt: "A basket of mushrooms",
        },
        className: "faq-a flex-col",
        headingClass: "text-white",
        heading: "What do I need to start mushroom foraging?",
        body: 
            `You'll need a local field guide, a sharp knife or scissors, 
            a basket or mesh bag for collecting, and paper bags for separating specimens. 
            Bring a small brush for cleaning, wear sturdy boots, and carry a GPS device or 
            compass to track your location. A camera is also helpful to document your finds.`,
    },
    {
        image: {
            img: identify,
            alt: "A newspaper study of mushrooms",
        },
        className: "faq-b flex-col",
        headingClass: "text-white",
        heading: "How can I identify edible mushrooms?",
        body: `
            Learn from experienced foragers and reliable guidebooks – never rely on apps alone. 
            Study each mushroom's specific features like cap shape, 
            gill structure, stem characteristics, and spore prints. 
            Start with easily identifiable species that have no poisonous lookalikes, 
            and never eat anything unless you're completely certain of its identification.`,
    },
    {
        image: {
            img: mushroom,
            alt: "A single mushroom surrounded y foilage",
        },
        className: "faq-c flex-col",
        headingClass: "text-white",
        heading: "What are the best seasons for mushroom foraging?",
        body: `Spring is ideal for morels, late summer brings chanterelles and boletes, 
            and fall is peak season for most mushrooms including oysters and hen of the woods.
            Some species can even be found in winter, especially in milder climates. 
            Each season offers different varieties, so year-round foraging is possible.`,
    },
    {
        image: {
            img: cave,
            alt: "A mushroom under a leaf forage",
        },
        className: "faq-d",
        headingClass: "text-white",
        imageClass: "flex-grow",
        heading: "Where can I find foraging spots?",
        body: `
            Look in deciduous forests, especially near oak and maple trees, and in damp, shaded areas. 
            Fallen logs and dead trees are often productive spots. 
            Only forage on public lands where it's allowed, and always check local regulations. 
            Remember to get permission for private property and keep your best locations private to prevent over-harvesting
        `,
    },
]

function GuideCards(guideArray) {

    return guideArray.map((guide) => (
        `
        <div class="bg-brown-200 rounded-xl p-4 flex flex-col justify-between text-gray w-full">
            <div class="flex flex-col gap-3">
                <p class="font-bold text-1.313rem">${guide.heading}</p>
                <div class="flex items-center gap-2">
                    ${guide.tags.map((tag) => `
                        <span class="${tag.background} max-w-fit px-2">${tag.content}</span>
                    `).join("")}
                </div>
                <p>${guide.content}</p>
            </div>
            <p class="bg-brown-100 text-wrap rounded-md p-3">
                <span>Important notes:</span> ${guide.note}
            </p>
        </div>
        `
    )).join("");
}


export function FaqCards() {
  return `
        <ul class="faq-grid">
            ${faqArray.map((section) => JoyCard(section.image, section.heading, section.body, section.className, section.headingClass, section.imageClass)).join("")}
        </ul>
    `;
}

export default function GuideContent() {
    const guideGrid = document.getElementById('guide-grid');
    const faqGrid = document.getElementById('faq-section-container');
    guideGrid.innerHTML = GuideCards(guideArray);
    faqGrid.innerHTML = FaqCards();

}

