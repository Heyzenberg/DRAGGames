// Slider
const slider = new Swiper('.slider-box', {
    // Навигационные кнопки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    speed: 500,
    // Эфект при перелистывании
    effect: 'fade',
    centeredSlides: true,
    pagination: {
        // Элемент
        el: '.swiper-pagination',
        // Кликабельность булетов
        // clickable: true,
        // Динамические булеты
        // dynamicBullets: true,

        // Нумерование булетов
        // renderBullet: function (index, className) {
        //     return '<span class="' + className + '">' + (index + 1) + '</span>';
        // },
        
        // Цифровое отображение слайда
        // type: 'fraction', 
        // Линия прогресса прокрутки
        type: 'progressbar',
        // Симуляция косания
        simulateTouch: false,
    },
});

// Mobile Btn
let mobileBtn = document.querySelector('.mobile-btn');
let mobileMenu = document.querySelector('.mobile-menu');
let bodyLock = document.body;

mobileBtn.onclick = () => {
    mobileBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    if(mobileBtn.classList.contains('active')){
        bodyLock.classList.add('lock');
    }
    else if(!mobileBtn.classList.contains('active')){
        bodyLock.classList.remove('lock');
    }
}