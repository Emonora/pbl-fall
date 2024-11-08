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
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('maskedImage').src = images[currentIndex];
    if (i === 80) {
        document.getElementById('maskedImage').src = image;
        i = 0;
        return;
    }

    i++
}

setInterval(nextImage, 700)