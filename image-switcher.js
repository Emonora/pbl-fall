const images = [
    'assets/globalgoal.svg',
    'assets/posteer1.jpg',
    'assets/posteer2.jpg',
    'assets/posteer3.png',
    'assets/posteer4.png',
    'assets/posteer5.png'
];

const image = 'mmmmmm.jpg'

let currentIndex = 0;
let i = 0;

function nextImage() {
    if (i >= 100000) {
        document.getElementById('maskedImage').src = image;
    }
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('maskedImage').src = images[currentIndex];
    i++
}

setInterval(nextImage, 700)