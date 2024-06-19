function offDisplay() {
    document.getElementById("offdisplay").style.display = "none";
    document.getElementById("ondisplay").style.display = "block"
}

//이미지 리스트
const images = [
  "/img/drone_mal1.png",
  "",
  ""
];

let currentIndex = 0;

// 이미지 표시 엘리먼트
const imageDisplay = document.getElementById('imageDisplay');

// 다음 이미지 버튼
const nextImageBtn = document.getElementById('nextImageBtn');
nextImageBtn.addEventListener('click', () => {
    // 인덱스 증가, 마지막 이미지면 처음으로 돌아감
    currentIndex = (currentIndex + 1) % images.length;
    imageDisplay.src = images[currentIndex];
});

function offDisplay() {
    document.getElementById('offdisplay').classList.add('hidden');
    document.getElementById('ondisplay').classList.remove('hidden');
}