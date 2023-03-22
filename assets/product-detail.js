document.addEventListener("DOMContentLoaded",function (){
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


    $(".slider-container").slick({
        dots: true,
        infinite: true,
        autoplaySpeed: 3000,
        prevArrow: `<button type='button' class='slick-prev pull-left slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>`,
        nextArrow: `<button type='button' class='slick-next pull-right slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>`,
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
})

