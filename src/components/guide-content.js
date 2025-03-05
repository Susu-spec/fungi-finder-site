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

// export const faqArray = [
//     {
//         image: {
//             img: mushrooms,
//             alt: "A variety of mushrooms",
//         },
//         heading: "Botanical Expertise",
//         body: "Dive into the intricate world of fungal biology. Discover the unique structures of mushrooms, from caps to gills to spores. Learn to use field guides and identification keys to distinguish between species. With practice, you'll stat to see the forest in a whole new light, recognizing the vital role fungi play in ecosystem health.",
//     },
// ]

function GuideCards(guideArray) {

    return guideArray.map((guide) => (
        `
        <div class="bg-brown-200 rounded-xl p-4 flex flex-col gap-4 text-gray w-full">
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

export default function GuideContent() {
    const guideGrid = document.getElementById('guide-grid');
    guideGrid.innerHTML = GuideCards(guideArray)
}

