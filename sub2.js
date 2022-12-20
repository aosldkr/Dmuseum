function init() {
    var swiper = new Swiper(".img", {

        loop: true,
        // loopFillGroupWithBlank: true,
        pagination: {
            // fales 페이지 여부
            el: ".swiper-pagination"
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
        // 자동슬라이드 설정 비화설화시 false
            delay: 2500,
            disableOnInteraction: false,
            //false 설정시  
        },
        breakpoints: {
            768: {
                slidesPerView: 2, //보여줄 갯수
                spaceBetween: 20, //슬라이드 사이 여백
            },
            1024: {
                slidesPerView: 3, //보여줄 갯수
                spaceBetween: 20, //슬라이드 사이 여백
            }

        }
    });
}

window.addEventListener('load',init);