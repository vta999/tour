const singaporeStory = [{
    id: 1,
    title: "First Time at Changi Airport",
    speaker: "Narrator",
    content: "Welcome to Singapore! What kind of journey would you like to begin?",
    a: { text: "City tour", next: 2 },
    b: { text: "Find local food", next: 3 },
    bg: "images/a1.png",
},
{
    id: 2,
    title: "Exploring Gardens by the Bay",
    speaker: "Guide",
    content: "Visit the Supertrees or the greenhouses first?",
    a: { text: "Supertree walkway", next: 4 },
    b: { text: "Flower Dome", next: 5 },
    bg: "images/a2.png",
},
{
    id: 3,
    title: "First Stop at Hawker Center",
    speaker: "Local",
    content: "Try chili crab or bak kut teh first?",
    a: { text: "Chili crab", next: 18 },
    b: { text: "Bak kut teh", next: 19 },
    bg: "images/a3.png",
},
{
    id: 4,
    title: "Supertree Light Show",
    speaker: "Narrator",
    content: "You're on the walkway, enjoying the lights and music.",
    a: { text: "Continue exploring", next: 6 },
    b: { text: "Go to Sentosa", next: 8 },
    bg: "images/a4.png",
},
{
    id: 5,
    title: "Flower Dome",
    speaker: "Guide",
    content: "Exotic plants from five continents are displayed here.",
    a: { text: "Take photos", next: 6 },
    b: { text: "Visit Singapore Zoo", next: 7 },
    bg: "images/a5.png",
},
{
    id: 6,
    title: "Night at Clarke Quay",
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
    content: "See pandas or visit Night Safari?",
    a: { text: "Panda forest", next: 13 },
    b: { text: "Night safari", next: 14 },
    bg: "images/a7.png",
},
{
    id: 8,
    title: "Sentosa Island",
    speaker: "Friend",
    content: "Universal Studios or S.E.A. Aquarium?",
    a: { text: "Universal Studios", next: 9 },
    b: { text: "Aquarium", next: 10 },
    bg: "images/a8.png",
},
{
    id: 9,
    title: "Universal Studios",
    speaker: "You",
    content: "Try roller coasters or watch shows?",
    a: { text: "Thrilling rides", next: 15 },
    b: { text: "Live shows", next: 16 },
    bg: "images/a9.png",
},
{
    id: 10,
    title: "Aquarium",
    speaker: "Narrator",
    content: "You stand before giant glass, amazed by marine life.",
    a: { text: "Try diving", next: 17 },
    b: { text: "Have seafood", next: 18 },
    bg: "images/a10.png",
},
{
    id: 11,
    title: "Singapore River Cruise",
    speaker: "Narrator",
    content: "Lights shimmer as you enjoy city views.",
    a: { text: "End journey", next: 25 },
    b: { text: "Explore nightlife", next: 12 },
    bg: "images/a11.png",
},
{
    id: 12,
    title: "Having a Drink",
    speaker: "Friend",
    content: "Find a bar with live music?",
    a: { text: "Enter bar", next: 25 },
    b: { text: "Back to Marina Bay", next: 6 },
    bg: "images/a12.png",
},
{
    id: 13,
    title: "Panda Forest",
    speaker: "Narrator",
    content: "You see cute pandas eating bamboo.",
    a: { text: "Go to Night Safari", next: 14 },
    b: { text: "Try local food", next: 18 },
    bg: "images/a13.png",
},
{
    id: 14,
    title: "Night Safari",
    speaker: "Guide",
    content: "Wild animals appear in the night.",
    a: { text: "End journey", next: 25 },
    b: { text: "Back to city", next: 6 },
    bg: "images/a14.png",
},
{
    id: 15,
    title: "Roller Coaster",
    speaker: "You",
    content: "So exciting! What next?",
    a: { text: "Go to food court", next: 18 },
    b: { text: "Watch show", next: 16 },
    bg: "images/a15.png",
},
{
    id: 16,
    title: "Live Show",
    speaker: "Narrator",
    content: "Lights flash as performers entertain.",
    a: { text: "Find food", next: 18 },
    b: { text: "Back to beach", next: 10 },
    bg: "images/a16.png",
},
{
    id: 17,
    title: "Diving Experience",
    speaker: "Narrator",
    content: "Colorful underwater world amazes you.",
    a: { text: "End diving", next: 18 },
    b: { text: "Continue exploring", next: 10 },
    bg: "images/a17.png",
},
{
    id: 18,
    title: "Chili Crab",
    speaker: "Narrator",
    content: "Spicy and delicious!",
    a: { text: "Try chicken rice", next: 20 },
    b: { text: "Have dessert", next: 21 },
    bg: "images/a18.png",
},
{
    id: 19,
    title: "Bak Kut Teh",
    speaker: "Narrator",
    content: "Peppery broth warms your soul.",
    a: { text: "Try prawn noodles", next: 22 },
    b: { text: "Explore Chinatown food", next: 23 },
    bg: "images/a19.png",
},
{
    id: 20,
    title: "Hainanese Chicken Rice",
    speaker: "Narrator",
    content: "Tender chicken with fragrant rice - a must-try.",
    a: { text: "Learn history", next: 24 },
    b: { text: "Have dessert", next: 21 },
    bg: "images/a20.png",
},
{
    id: 21,
    title: "Dessert Time",
    speaker: "Vendor",
    content: "Durian ice cream or bubble tea?",
    a: { text: "Durian ice cream", next: 25 },
    b: { text: "Bubble tea", next: 25 },
    bg: "images/a21.png",
},
{
    id: 22,
    title: "Prawn Noodles",
    speaker: "Narrator",
    content: "Rich broth with springy noodles - perfect combo.",
    a: { text: "Explore night market", next: 23 },
    b: { text: "Try other cuisines", next: 13 },
    bg: "images/a22.png",
},
{
    id: 23,
    title: "Chinatown Street Food",
    speaker: "Friend",
    content: "Curry puff or Nyonya kueh?",
    a: { text: "Curry puff", next: 25 },
    b: { text: "Nyonya kueh", next: 25 },
    bg: "images/a23.png",
},
{
    id: 24,
    title: "Food History",
    speaker: "Guide",
    content: "Did you know chicken rice represents migrant culture?",
    a: { text: "Explore more culture", next: 5 },
    b: { text: "Return to hotel", next: 25 },
    bg: "images/a24.png",
},
{
    id: 25,
    title: "Memories",
    speaker: "You",
    content: "Singapore's flavors amaze - chicken rice, chili crab, laksa! City blends nature with urban charm perfectly!",
    a: { text: "See food photos", next: 26 },
    b: { text: "See attraction photos", next: 27 },
    bg: "images/a25.png",
},
{
    id: 26,
    title: "Food Photos",
    speaker: "You",
    content: "Singapore's diverse food delights - from street food to Michelin, all amazing!",
    a: null,
    b: null,
    bg: "images/a27.png",
},
{
    id: 27,
    title: "Attraction Photos",
    speaker: "You",
    content: "Singapore blends modern and traditional - Marina Bay, Sentosa must-visits! Clean and convenient with rich experiences!",
    a: null,
    b: null,
    bg: "images/a26.png",
}
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