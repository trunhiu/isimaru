document.addEventListener("DOMContentLoaded",function (){
    const images = [
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
    const handleImage = () => {
        const mainImg = document.getElementById("main-image");
        console.log(mainImg)
        const thumbnail = document.querySelectorAll(".thumbnails img");

        thumbnail.forEach((image) => {
            image.addEventListener('mouseover', () => {
                mainImg.src = image.src;
            });
        });
        mainImg.src = thumbnail[0].src;
    }
    handleImage();




    const sliderContainer = document.querySelector('.slider-container');
    const dotsContainer = document.querySelector('.dots-container');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');



    //
    let currentIndex = 0;
    let intervalId;

    function renderSlider() {
        sliderContainer.innerHTML = '';

        const slide = document.createElement('div');
        slide.classList.add('slide');
        const img = document.createElement('img');
        img.src = images[currentIndex].src;
        img.alt = images[currentIndex].alt;
        slide.appendChild(img);
        sliderContainer.appendChild(slide);

        dotsContainer.innerHTML = '';
        images.forEach((item, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === currentIndex) {
                dot.classList.add('active');
            }
            dot.addEventListener('click', () => {
                clearInterval(intervalId);
                currentIndex = index;
                renderSlider();
            });
            dotsContainer.appendChild(dot);
        });
    }

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        renderSlider();
    }

    function showPrevSlide() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        renderSlider();
    }

    prevBtn.addEventListener('click', showPrevSlide);
    nextBtn.addEventListener('click', showNextSlide);

    renderSlider();

    // intervalId = setInterval(showNextSlide, 3000);

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const containerPc = document.querySelector(".container")
    const containerSp = document.querySelector(".container-Sp")
    console.log(containerPc)
    if(isMobile){
        containerPc.style.display = "none"
        containerSp.style.display = "block"
    }
})

