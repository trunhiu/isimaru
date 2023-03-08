
const imges = [
    { src: '../assets/mainImg1.jpeg', alt: 'Image 1' },
    { src: '../assets/mainImg2.jpeg', alt: 'Image 2' },
    { src: '../assets/mainImg3.jpeg', alt: 'Image 3' },
    { src: '../assets/mainImg4.jpeg', alt: 'Image 4' },
    { src: '../assets/mainImg5.jpeg', alt: 'Image 5' },
    { src: '../assets/mainImg6.jpeg', alt: 'Image 6' },
    { src: '../assets/mainImg7.jpeg', alt: 'Image 7' },
    { src: '../assets/mainImg8.jpeg', alt: 'Image 8' },
    { src: '../assets/mainImg9.jpeg', alt: 'Image 9' },
    { src: '../assets/mainImg10.jpeg', alt: 'Image 10' },
    { src: '../assets/mainImg11.jpeg', alt: 'Image 11' },
    { src: '../assets/mainImg12.jpeg', alt: 'Image 12' },
    { src: '../assets/mainImg13.jpeg', alt: 'Image 13' },
    { src: '../assets/mainImg14.jpeg', alt: 'Image 14' },
    { src: '../assets/mainImg15.jpeg', alt: 'Image 15' },
    { src: '../assets/mainImg16.jpeg', alt: 'Image 16' },
    { src: '../assets/mainImg17.jpeg', alt: 'Image 17' },
    { src: '../assets/mainImg18.jpeg', alt: 'Image 18' },
    { src: '../assets/mainImg19.jpeg', alt: 'Image 19' },
    { src: '../assets/mainImg20.jpeg', alt: 'Image 20' },
    { src: '../assets/mainImg21.jpeg', alt: 'Image 21' },
    { src: '../assets/mainImg22.jpeg', alt: 'Image 22' },
];

const thumbs = [
    { src: '../assets/subimg1.jpeg', alt: 'Image 1' },
    { src: '../assets/subimg2.jpeg', alt: 'Image 2' },
    { src: '../assets/subimg3.jpeg', alt: 'Image 3' },
    { src: '../assets/subimg4.jpeg', alt: 'Image 4' },
    { src: '../assets/subimg5.jpeg', alt: 'Image 5' },
    { src: '../assets/subimg6.jpeg', alt: 'Image 6' },
    { src: '../assets/subimg7.jpeg', alt: 'Image 7' },
    { src: '../assets/subimg8.jpeg', alt: 'Image 8' },
    { src: '../assets/subimg9.jpeg', alt: 'Image 9' },
    { src: '../assets/subimg10.jpeg', alt: 'Image 10' },
    { src: '../assets/subimg11.jpeg', alt: 'Image 11' },
    { src: '../assets/subimg12.jpeg', alt: 'Image 12' },
    { src: '../assets/subimg13.jpeg', alt: 'Image 13' },
    { src: '../assets/subimg14.jpeg', alt: 'Image 14' },
    { src: '../assets/subimg15.jpeg', alt: 'Image 15' },
    { src: '../assets/subimg16.jpeg', alt: 'Image 16' },
    { src: '../assets/subimg17.jpeg', alt: 'Image 17' },
    { src: '../assets/subimg18.jpeg', alt: 'Image 18' },
    { src: '../assets/subimg19.jpeg', alt: 'Image 19' },
    { src: '../assets/subimg20.jpeg', alt: 'Image 20' },
    { src: '../assets/subimg21.jpeg', alt: 'Image 21' },
    { src: '../assets/subimg22.jpeg', alt: 'Image 22' },
];

const thumbsContainer = document.getElementById("thumbs-container");
const mainImg = document.getElementById("main-img");

thumbs.forEach((thumb, index) => {
    const img = document.createElement("img");
    img.src = thumb.src;
    img.alt = thumb.alt;

    img.addEventListener("mouseenter", () => {
        mainImg.src = imges[index].src;
        mainImg.alt = imges[index].alt;
    });

    thumbsContainer.appendChild(img);
});