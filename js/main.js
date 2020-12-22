// Переключение табов в трендах
$(document).ready(function () {
  var trendingTabs = $(".trending-tabs");
  var trendingContent = $(".trending-content");

  trendingTabs.on("click", function (event) {
    var activeContent = $(this).attr("data-target");
    trendingTabs.removeClass("trending-tabs_active");
    trendingContent.removeClass("trending-content_active");
    $(activeContent).addClass("trending-content_active");
    $(this).addClass("trending-tabs_active");
  });
});

// Слайдер в отзывах
$(document).ready(function () {
  var mySwiper = new Swiper(".swiper-container", {
    // Optional parameters
    autoplay: {
      delay: 7000,
    },
    loop: true,
    disableOnInteraction: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var mySwiper = document.querySelector(".swiper-container").swiper;
  $(".swiper-container").mouseenter(function () {
    mySwiper.autoplay.stop();
  });

  $(".swiper-container").mouseleave(function () {
    mySwiper.autoplay.start();
  });
});

// Слайдер в историях
var mySwiper1 = new Swiper(".stories-slider", {
  // Optional parameters
  slideClass: "stories-slider_wrapper_slide",
  wrapperClass: "stories-slider_wrapper",
  nextEl: ".stories-buttons_next",
  prevEl: ".stories-buttons_prev",
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 18,

  // Navigation arrows
  navigation: {
    nextEl: ".stories-buttons_next",
    prevEl: ".stories-buttons_prev",
  },
});

// Валидность
$(".form").each(function () {
  $(this).validate({
    errorClass: "invalid",
    messages: {
      name: {
        required: "Укажите свое имя",
        minlength: "Ваше имя должно быть не менее 2 букв",
      },
      email: {
        required: "Нам нужен ваш адрес электронной почты",
        email:
          "Ваш адрес электронной почты должен иметь формат name@domain.com",
      },
    },
  });
});

//Мобильное меню
var menuButton = $(".navbar-button");
menuButton.on("click", function () {
  $(".navbar-menu_group").toggleClass("navbar-menu_group_visible");
});
// Закрытие мобильного меню через X
$(document).ready(function () {
  var menuButton = $(".navbar-menu_close");
  menuButton.on("click", function () {
    $(".navbar-menu_group").toggleClass("navbar-menu_group_visible");
  });
});

//Модальное окно
var modalButton = $("[data-toggle=modal]");
var closeModalButton = $(".modal__close");
modalButton.on("click", openModal);
closeModalButton.on("click", closeModal);
var body = $("body");

function openModal() {
  body.addClass("body_fix");
  var targetModal = $(this).attr("data-href");
  $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
  $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
}

function closeModal(event) {
  body.removeClass("body_fix");
  event.preventDefault();
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.removeClass("modal__overlay--visible");
  modalDialog.removeClass("modal__dialog--visible");
}

// Закрытие при клике мимо
var modalOverlay = document.querySelector(".modal__overlay");
modalOverlay.addEventListener("click", function () {
  var modalCl = document.querySelector(".modal__dialog");
  var bodyCl = document.querySelector(".body_fix");
  modalCl.classList.remove("modal__dialog--visible");
  this.classList.remove("modal__overlay--visible");
  bodyCl.classList.remove("body_fix");
});

// Закрытие модального окна через Esc
$(document).keyup(function (e) {
  if (e.key === "Escape" || e.keyCode === 27) {
    //console.log("Нажата клавиша Escape");
    closeModal(event);
  }
});
