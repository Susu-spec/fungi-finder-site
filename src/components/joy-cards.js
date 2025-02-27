const benefits = [
    {
        image: "./src/assets/diverse-mushrooms.jpg",
        heading: "Outdoor Exploration",
        body: "Mushroom foraging takes you off the beaten path and into the heart of nature. Learn to read the landscape, identifying prime mushroom habitats from lush forest floors to sun-dappled meadows. Every expedition is a new adventure, with the potential for exciting discoveries around every tree and under every log."

    },
    {
        image: './src/assets/mushrooms.jpg',
        heading: 'Botanical Expertise',
        body: 'Dive into the intricate world of fungal biology. Discover the unique structures of mushrooms, from caps to gills to spores. Learn to use field guides and identification keys to distinguish between species. With practice, you\'ll stat to see the forest in a whole new light, recognizing the vital role fungi play in ecosystem health.'

    },
    {
        image: './src/assets/cooking-mushrooms.jpg',
        heading: 'Culinary Delights',
        body: 'Transform your foraged finds into delectable dishes. Many edible mushrooms offer unique flavors and textures that can elevate your cooking. From the earthy porcini to the delicate chanterelle, each variety brings its own character to the table. Explore recipes, preservation techniques, and the joy of cooking with nature\'s bounty.'

    },

]

export function JoyCard(image, heading, body) {
    return `
        <div class="rounded-xl p-4 gap-6 bg-brown-200 flex flex-col justify-center">
            <figure>
                <img src=${image} alt="Image illustrating benefits" class="rounded-lg w-full"/>
                <figcaption></figcaption>
            </figure>
            <h2 class="text-primary font-outfit font-bold text-headingLg">${heading}</h2>
            <p class="font-fira text-gray text-bodyReg">${body}</p>
        </div>
    `
}


export function JoyCards() {
    return `
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${benefits.map(benefit => JoyCard(benefit.image, benefit.heading, benefit.body)).join('')}
        </div>
    `;
}
 