document.addEventListener("touchstart", function() {}, true);

function offDisplay() {
    document.getElementById("offdisplay").style.display = "none";
    document.getElementById("ondisplay").style.display = "block"
}

const images = [
    { src: "/img/drone_mal1.png", alt: "드론 이미지 1" },
    { src: "/img/drone_mal2.png", alt: "드론 이미지 2" },
    { src: "/img/drone_mal3.png", alt: "드론 이미지 3" }
];

let currentIndex = 0;

function updateImage() {
    const imageElement = document.querySelector('#content img');
    imageElement.src = images[currentIndex].src;
    imageElement.alt = images[currentIndex].alt;
}

document.getElementById('next').addEventListener('click', function() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateImage();
    }
});

document.getElementById('prev').addEventListener('click', function() {
    if (currentIndex > 0) {
        currentIndex--;
        updateImage();
    }
});

window.onload = updateImage;

