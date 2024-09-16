let audios = document.querySelectorAll(".audio");
let playPauseBtn = document.querySelector(".playPauseBtn");
let playPauseImages = document.querySelectorAll(".pd");
let imgContainers = document.querySelectorAll(".bd");
let txtContainers = document.querySelectorAll(".cont");
let nextBtn = document.querySelector(".nextPlay");

let currentIndex = 0;
let isPlaying = false;

const updateContent = (index) => {
    // Pause all audios
    audios.forEach(audio => audio.pause());
    // Hide all images and text
    imgContainers.forEach(img => img.style.display = "none");
    txtContainers.forEach(txt => txt.style.display = "none");

    // Play the current audio
    audios[index].play();
    // Show the current image and text
    imgContainers[index].style.display = "block";
    txtContainers[index].style.display = "block";
};

const playAud = () => {
    if (isPlaying) {
        audios[currentIndex].pause();
        playPauseImages[0].style.display = "block"; // Show play icon
        playPauseImages[1].style.display = "none"; // Hide pause icon
    } else {
        updateContent(currentIndex);
        playPauseImages[0].style.display = "none"; // Hide play icon
        playPauseImages[1].style.display = "block"; // Show pause icon
    }
    isPlaying = !isPlaying;
};

const playNext = () => {
    currentIndex = (currentIndex + 1) % audios.length;
    updateContent(currentIndex);
    if (!isPlaying) {
        playPauseImages[0].style.display = "none";
        playPauseImages[1].style.display = "block";
        isPlaying = true;
    }
};

playPauseBtn.addEventListener("click", playAud);
nextBtn.addEventListener("click", playNext);

// Initially hide the second image, second text, and pause icon
imgContainers.forEach((img, index) => { if (index !== 0) img.style.display = "none"; });
txtContainers.forEach((txt, index) => { if (index !== 0) txt.style.display = "none"; });
playPauseImages[1].style.display = "none"; // Pause icon hidden initially



document.querySelectorAll('#textAnimation').addEventListener('click', function() {
    this.classList.toggle('clicked');
});



//image slider
let container = document.querySelectorAll("#carrry")
let img = document.querySelectorAll("#img")
let imgNxt = document.getElementById("nextBtn");
let imgPrev = document.getElementById("prevBtn");

let currentPicture = 0;

let updateImg = (index) => {
   img.forEach((ele, i) =>{
    if (i === index){
        img.style.display = "block";
    }
    else {
        img.style.display = "none"
    }
   })

}

imgNxt.addEventListener("click", () => {
    currentPicture = (currentPicture + 1) % img.length;
    updateImg(currentPicture);
});

imgPrev.addEventListener("click", () => {
    currentPicture = (currentPicture - 1 + img.length) % img.length;
    updateImg(currentPicture);
});

// Initialize with the first image
updateImg(currentPicture);