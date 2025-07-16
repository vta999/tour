const singaporeStory = [{
        id: 1,
        title: "First Impressions at Changi Airport",
        speaker: "Narrator",
        content: "Welcome to Singapore! What kind of journey would you like to begin?",
        a: { text: "Start city tour", next: 2 },
        b: { text: "Go find local food immediately", next: 3 },
        bg: "images/a1.png",
    },
    {
        id: 2,
        title: "Exploring Gardens by the Bay",
        speaker: "Tour Guide",
        content: "Would you like to visit the Supertrees first or the greenhouses?",
        a: { text: "Supertree Skyway", next: 4 },
        b: { text: "Flower Dome", next: 5 },
        bg: "images/a2.png",
    },
    {
        id: 3,
        title: "First Stop at Hawker Center",
        speaker: "Local",
        content: "Chili crab or bak kut teh first?",
        a: { text: "Chili crab", next: 18 },
        b: { text: "Bak kut teh", next: 19 },
        bg: "images/a3.png",
    },
    {
        id: 4,
        title: "Supertree Light Show",
        speaker: "Narrator",
        content: "You stand on the skywalk, immersed in the interplay of lights and music.",
        a: { text: "Continue exploring", next: 6 },
        b: { text: "Go to Sentosa", next: 8 },
        bg: "images/a4.png",
    },
    {
        id: 5,
        title: "Flower Dome",
        speaker: "Guide",
        content: "This showcases exotic plants from five continents.",
        a: { text: "Take photos", next: 6 },
        b: { text: "Visit Singapore Zoo", next: 7 },
        bg: "images/a5.png",
    },
    {
        id: 6,
        title: "Night Exploration at Clarke Quay",
        speaker: "Friend",
        content: "River cruise or find a bar?",
        a: { text: "Night river cruise", next: 11 },
        b: { text: "Have a drink", next: 12 },
        bg: "images/a6.png",
    },
    {
        id: 7,
        title: "Singapore Zoo",
        speaker: "Guide",
        content: "See the pandas or visit Night Safari?",
        a: { text: "Panda Forest", next: 13 },
        b: { text: "Night adventure", next: 14 },
        bg: "images/a7.png",
    },
    {
        id: 8,
        title: "Sentosa Island",
        speaker: "Friend",
        content: "Universal Studios or SEA Aquarium?",
        a: { text: "Universal Studios", next: 9 },
        b: { text: "SEA Aquarium", next: 10 },
        bg: "images/a8.png",
    },
    {
        id: 9,
        title: "Universal Studios",
        speaker: "You",
        content: "Thrill rides or live shows?",
        a: { text: "Exciting roller coasters", next: 15 },
        b: { text: "Watch stage performances", next: 16 },
        bg: "images/a9.png",
    },
    {
        id: 10,
        title: "SEA Aquarium",
        speaker: "Narrator",
        content: "You stand before the giant glass, awed by the marine world.",
        a: { text: "Continue diving experience", next: 17 },
        b: { text: "Go for seafood feast", next: 18 },
        bg: "images/a10.png",
    },
    {
        id: 11,
        title: "Singapore River Night Cruise",
        speaker: "Narrator",
        content: "The Singapore River shimmers with lights as you quietly admire the cityscape.",
        a: { text: "End journey", next: 25 },
        b: { text: "Continue nightlife exploration", next: 12 },
        bg: "images/a11.png",
    },
    {
        id: 12,
        title: "Having a Drink",
        speaker: "Friend",
        content: "How about a bar with live music?",
        a: { text: "Enter the bar", next: 25 },
        b: { text: "Return to Marina Bay for night view", next: 6 },
        bg: "images/a12.png",
    },
    {
        id: 13,
        title: "Panda Forest",
        speaker: "Narrator",
        content: "You see adorable giant pandas munching bamboo.",
        a: { text: "Proceed to Night Safari", next: 14 },
        b: { text: "Switch to food route", next: 18 },
        bg: "images/a13.png",
    },
    {
        id: 14,
        title: "Night Safari",
        speaker: "Guide",
        content: "Wild animals emerge quietly in the night.",
        a: { text: "End journey", next: 25 },
        b: { text: "Return to city attractions", next: 6 },
        bg: "images/a14.png",
    },
    {
        id: 15,
        title: "Thrilling Roller Coaster",
        speaker: "You",
        content: "So exciting! What's next?",
        a: { text: "Go to food court", next: 18 },
        b: { text: "Watch performances", next: 16 },
        bg: "images/a15.png",
    },
    {
        id: 16,
        title: "Stage Performance",
        speaker: "Narrator",
        content: "Lights flash as performers put on an energetic show.",
        a: { text: "Go to food court", next: 18 },
        b: { text: "Return to beach", next: 10 },
        bg: "images/a16.png",
    },
    {
        id: 17,
        title: "Diving Experience",
        speaker: "Narrator",
        content: "The underwater world is colorful and magical.",
        a: { text: "End diving", next: 18 },
        b: { text: "Continue marine exploration", next: 10 },
        bg: "images/a17.png",
    },
    {
        id: 18,
        title: "Chili Crab",
        speaker: "Narrator",
        content: "Spicy and fragrant, absolutely mouthwatering!",
        a: { text: "Try Hainanese chicken rice next", next: 20 },
        b: { text: "Continue to desserts", next: 21 },
        bg: "images/a18.png",
    },
    {
        id: 19,
        title: "Bak Kut Teh",
        speaker: "Narrator",
        content: "Peppery aroma fills the air, one sip of the rich soup captivates your soul.",
        a: { text: "Try Hokkien prawn mee", next: 22 },
        b: { text: "Explore Chinatown for more food", next: 23 },
        bg: "images/a19.png",
    },
    {
        id: 20,
        title: "Hainanese Chicken Rice",
        speaker: "Narrator",
        content: "Tender chicken with fragrant rice - a must-try for every visitor.",
        a: { text: "Learn cultural background", next: 24 },
        b: { text: "Move to desserts", next: 21 },
        bg: "images/a20.png",
    },
    {
        id: 21,
        title: "Dessert Time",
        speaker: "Hawker",
        content: "Durian ice cream or bubble tea?",
        a: { text: "Durian ice cream", next: 25 },
        b: { text: "Bubble tea", next: 25 },
        bg: "images/a21.png",
    },
    {
        id: 22,
        title: "Hokkien Prawn Mee",
        speaker: "Narrator",
        content: "Rich broth with springy noodles - a perfect combination.",
        a: { text: "Continue night market exploration", next: 23 },
        b: { text: "Try international flavors", next: 13 },
        bg: "images/a22.png",
    },
    {
        id: 23,
        title: "Chinatown Street Food",
        speaker: "Friend",
        content: "Curry puff or kueh?",
        a: { text: "Curry puff", next: 25 },
        b: { text: "Nyonya kueh", next: 25 },
        bg: "images/a23.png",
    },
    {
        id: 24,
        title: "Story Behind the Food",
        speaker: "Guide",
        content: "Did you know Hainanese chicken rice represents immigrant culture?",
        a: { text: "Explore more culture", next: 5 },
        b: { text: "Satisfied, return to hotel", next: 25 },
        bg: "images/a24.png",
    },
    {
        id: 25,
        title: "Culinary Memories",
        speaker: "Protagonist",
        content: "Nanyang flavor paradise - chicken rice, chili crab, laksa amaze your taste buds! Garden city charm where urban and nature blend perfectly!",
        a: { text: "Review food photos", next: 26 },
        b: { text: "Review attraction photos", next: 27 },
        bg: "images/a25.png",
    },
    {
        id: 26,
        title: "Food Photo Review",
        speaker: "Protagonist",
        content: "Singapore's diverse cuisine delights - authentic Hainanese chicken rice, chili crab, laksa satisfy from streets to Michelin!",
        a: null,
        b: null,
        bg: "images/a27.png",
    },
    {
        id: 27,
        title: "Attraction Photo Review",
        speaker: "Protagonist",
        content: "Singapore blends modern vibrancy with tradition - Marina Bay, Sentosa are must-visits. Clean, convenient with rich experiences!",
        a: null,
        b: null,
        bg: "images/a26.png",
    },
];

// Get DOM elements
const storyContainer = document.getElementById("storyContainer");
const storyTitle = document.getElementById("storyTitle");
const storyContent = document.getElementById("storyContent");
const btnA = document.getElementById("btnA");
const btnB = document.getElementById("btnB");

// Function to load story segment by ID
function loadStorySegment(id) {
    const segment = singaporeStory.find((item) => item.id === id);

    if (!segment) return;

    // Update background image
    storyContainer.style.backgroundImage = `url('${segment.bg}')`;

    // Update title and content
    storyTitle.textContent = segment.title;
    storyContent.textContent = segment.content;

    // Update buttons
    if (segment.a) {
        btnA.textContent = segment.a.text;
        btnA.onclick = () => loadStorySegment(segment.a.next);
        btnA.classList.remove("hidden");
    } else {
        btnA.classList.add("hidden");
    }

    if (segment.b) {
        btnB.textContent = segment.b.text;
        btnB.onclick = () => loadStorySegment(segment.b.next);
        btnB.classList.remove("hidden");
    } else {
        btnB.classList.add("hidden");
    }

    // Hide both buttons if it's the end
    if (id === 26 || id == 27) {
        btnA.classList.add("hidden");
        btnB.classList.add("hidden");
    }
}

// Start the story
loadStorySegment(1);