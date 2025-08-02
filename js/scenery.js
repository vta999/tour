const video = document.getElementById("mainVideo");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

// Video files array
const videos = [
    "video/1.mp4", // Initial video
    "video/2.mp4", // Video for button 1
    "video/3.mp4", // Video for button 2
];
// Initially hide buttons
btn1.style.display = "none";
btn2.style.display = "none";

// Listen for video time updates
video.addEventListener("timeupdate", function() {
    // Calculate remaining time
    const remainingTime = video.duration - video.currentTime;

    // Show buttons when remaining time is 3 seconds or less
    if (remainingTime <= 3) {
        btn1.style.display = "block";
        btn2.style.display = "block";
    } else {
        btn1.style.display = "none";
        btn2.style.display = "none";
    }
});

// Button click events
btn1.addEventListener("click", function() {
    switchVideo(1); // Switch to video 2
});

btn2.addEventListener("click", function() {
    switchVideo(2); // Switch to video 3
});

// Video switching function
function switchVideo(index) {
    // Hide buttons
    btn1.classList.remove("show");
    btn2.classList.remove("show");

    // Change video source
    video.src = videos[index];

    // Reload and play video
    video.load();
    video.play();
}

// Ensure video metadata is loaded
video.addEventListener("loadedmetadata", function() {
    console.log("Video duration:", video.duration, "seconds");
});

// Reset when video ends
video.addEventListener("ended", function() {
    btn1.classList.remove("show");
    btn2.classList.remove("show");
});