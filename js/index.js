window.addEventListener("DOMContentLoaded", function () {
  // hero__swiper
  const swiper = new Swiper(".hero__swiper", {
    direction: "horizontal",
    slidesPerView: 1,
    loop: true,
    speed: 1000,
    effect: "fade",

    autoplay: {
      delay: 8000,
    },
  });

  // header-tabs
  const btnList = document.querySelectorAll('.header__bottom-btn');
  const tabList = document.querySelectorAll('.header__bottom-tab');

  document.addEventListener('click', function(e) {
    target = e.target;
    const path = target.dataset.path;
    const tab_is_open = target.classList.contains("header-btn--active")
    btnList.forEach(function(n) {
      if (target == n) {
        btnList.forEach(function (btn) {
          btn.classList.remove("header-btn--active");
        });
        target.classList.add("header-btn--active");

        tabList.forEach(function (tabsBtnItem) {
            tabsBtnItem.classList.remove("header-tab--active");
          });
        document.querySelector(`[data-target="${path}"]`).classList.add("header-tab--active");
      }
      else if (path == undefined || tab_is_open === true) {
        tabList.forEach(function(tabsBtnItem) {
          tabsBtnItem.classList.remove("header-tab--active");
        });
        btnList.forEach(function (btn_) {
          btn_.classList.remove("header-btn--active");
        });
      };
    });
  });

  // header-burger
  document.querySelector('.header__burger').addEventListener('click', function() {
    document.querySelector('.header__nav').classList.add('visible');
    document.body.classList.add('no-scroll');
  });
  document.querySelector('.header__nav-btn-close').addEventListener('click', function() {
    document.querySelector('.header__nav').classList.remove('visible');
    document.body.classList.remove('no-scroll');
  });
  document.querySelectorAll('.header__link').forEach(function(burger_tabs) {
    burger_tabs.addEventListener('click', function() {
      document.body.classList.remove('no-scroll');
      document.querySelector('.header__nav').classList.remove('visible');
    })
  })

  // header-search
  document.querySelector('.header__top-btn-search-active').addEventListener('click', function() {
    document.querySelector('.header__top-form-tablet').classList.add('visible');
    document.querySelector('.header__top-btn-search-active').classList.add('hidden');
  });
  document.querySelector('.header__top-search-btn-close').addEventListener('click', function() {
    document.querySelector('.header__top-form-tablet').classList.remove('visible');
    document.querySelector('.header__top-btn-search-active').classList.remove('hidden');
  });

  // gallery-choice
  const element = document.querySelector('.gallery__form-select');
  const choices = new Choices(element, {
    searchEnabled: false,
    placeholder: false,
    itemSelectText: '',
  });

  // gallery-swiper
  const galleryswiper = new Swiper('.gallery__swiper-container', {
    direction: "horizontal",
    loop: false,

    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      600: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 38,
      },
      1024: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34,
      },
      1400: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
      },
    },

    // пагинация
    pagination: {
    el: '.gallery__pagination',
    type: 'fraction',
    clickable: true,
  },

  // навигация
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  })

  // modal-window
  const myModal = new HystModal({
    linkAttributeName: "data-hystmodal",
    waitTransitions: true,
    closeOnEsc: true,
  });

  // gallery-accordion
  $(".accordion").accordion ({
    heightStyle: "content",
    collapsible: true,
    icons: false,
    active: false,
  });

  // catalog-tabs
  document.querySelectorAll('.catalog__accordion-artist-btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(e) {
      const catalogPath = e.currentTarget.dataset.path;
      document.querySelectorAll('.catalog__accordion-artist-btn').forEach(function(btn) {
        btn.classList.remove('catalog-btn--active')});
      e.currentTarget.classList.add('catalog-btn--active');

      document.querySelectorAll('.catalog__artist-card').forEach(function(tabsItem) {
        tabsItem.classList.remove('catalog-tab--active')});

      const tabSelect = document.querySelector(`[data-target-1="${catalogPath}"]`);
      tabSelect.classList.add('catalog-tab--active');
    });
  });

  // event-swiper
  const eventswiper = new Swiper('.events__swiper', {
    direction: 'horizontal',
    loop: false,

    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      600: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34,
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 27,
        slidesPerGroup: 3,
      },
      1400: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
      }
    },

  pagination: {
    el: '.events__swiper-pagination',
    clickable: true,

  },

  navigation: {
    nextEl: '.events__swiper-button-next',
    prevEl: '.events__swiper-button-prev',
  }});

  // projects-tooltip
  tippy('[data-tippy-content]', {
    maxWidth: 264,
    duration: 300,
    delay: [100, 200],
    trigger: 'click',
  });

  // projects-swiper
  const projectswiper = new Swiper('.projects__swiper', {
    direction: 'horizontal',
    loop: false,

    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 34,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      1400: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
      }
    },

  navigation: {
    nextEl: '.projects__swiper-button-next',
    prevEl: '.projects__swiper-button-prev',
  },
  });

  // mask
  var selector = document.getElementById('tel');
  var im = new Inputmask('+7 (999)-999-99-99');
  im.mask(selector)

  // validation
  const validation = new JustValidate("#form", {
    errorFieldCssClass: "is-invalid",
    errorLabelCssClass: "label-invalid",
    errorLabelStyle: {
      marginBottom: "2px",
      fontFamily: "Open Sans",
      color: "#D11616",
      fontSize: "12px",
      lineHeight: "16px",
    },
    focusInvalidField: true,
    errorContainer: '.errors-container',
  });

  validation
    .addField('#name', [
      {
        rule: 'required',
        errorMessage: 'Введите имя',
      },
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Не достаточное количество символов',
      },
      {
        rule: 'maxLength',
        value: 30,
        errorMessage: 'Поле не должно содержать более 30 символов',
      },
    ])
    .addField('#tel', [
      {
        rule: 'required',
        errorMessage: 'Укажите ваш телефон',
      },
      {
        validator: function (name, value) {
          const phone = selector.inputmask.unmaskedvalue();
          if (Number(phone) && phone.length === 10) {
            return true;
          }
          return false;
        },
        errorMessage: "Телефон введен не правильно",
      },
    ]);

  // map
  ymaps.ready(init);
  function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
      center: [55.760204686816756,37.614250220840454],
      zoom: 16,
      controls: [],
    });
    myMap.controls.add('zoomControl', {
      size: 'small',
      float: 'none',
      position: {
        top: '266px',
        right: '12px',
      },
    });

    myMap.behaviors.disable('scrollZoom');

    myMap.controls.add('geolocationControl', {
      float: 'none',
      position: {
        top: '354px',
        right: '11px',
      },
    });
    var myPlacemark = new ymaps.Placemark(
      [55.759404686816756,37.614250220840454],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "./img/map-geoobject.svg",
        iconImageSize: [20, 20],
      }
    );

    // Размещение геообъекта на карте.
    myMap.geoObjects.add(myPlacemark);
  };
});
