const images = [
    'assets/globalgoal.svg',
    'assets/posteer1.jpg',
    'assets/posteer2.jpg',
    'assets/posteer3.png',
    'assets/posteer4.png',
    'assets/posteer5.png'
];

let currentIndex = 0;

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('maskedImage').src = images[currentIndex];
}