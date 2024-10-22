const images = [
    'assets/globalgoal.svg',
    'assets/posteer1.jpg',
    'assets/posteer2.jpg',
];

let currentIndex = 0;

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('maskedImage').src = images[currentIndex];
}