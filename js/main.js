document.addEventListener('DOMContentLoaded', () => {
  /*Функционал селекта*/

  function select() {
    const select = document.querySelector('.select__value');

    let selectValue = select.querySelector('.select__text');

    const selectList = select.querySelector('.select__list');

    const svg =  select.querySelector('svg');

    select.addEventListener('click', () => {
      selectList.classList.toggle('select__list_active');
      svg.classList.toggle('select__svg_active');
    });

    select.querySelectorAll('.select__item').forEach(el => {
      el.addEventListener('click', () => {
        const value = selectValue.textContent;
        selectValue.textContent = el.textContent;
        el.textContent = value;
      })
    })

    window.addEventListener('click', el => {
      const target = el.target;

      if(target === select) {
        return
      }

      svg.classList.remove('select__svg_active');
      selectList.classList.remove('select__list_active');
    })
  }

  select();

  /*функционал бургера*/

  function openBurgerMenu() {
    const burgerBtn = document.querySelector('.header__burger');
    const closeMenu = document.querySelector('.header__close-menu');

    const menu = document.querySelector('.header__burger-container');

    burgerBtn.addEventListener('click', () => {
      menu.classList.add('header__burger-container_active');
    });

    closeMenu.addEventListener('click', () => {
      menu.classList.remove('header__burger-container_active');
    });

    window.addEventListener('click', el => {
      const target = el.target;

      if(target === menu || target === burgerBtn) {
        return
      }

      menu.classList.remove('header__burger-container_active');
    })
  }

  openBurgerMenu();

  /*функционал поиска*/

  function openSearchForMobile() {
    const btnSearch = document.querySelector('.search-btn');

    const search = document.querySelector('.search-mobile');

    btnSearch.addEventListener('click', () => {
      search.classList.add('search-mobile_active');
    })

    window.addEventListener('click', el => {
      const target = el.target;

      console.log(target.tagName)
      if(target === search || target === btnSearch || target.tagName === 'svg' || target.tagName === 'INPUT') {
        return
      }

      search.classList.remove('search-mobile_active');
    })
  }

  openSearchForMobile()

  /*функционал каталога художников*/

  function openCatalogEl() {
    document.querySelectorAll('.accordion__value-item').forEach(el => {
      const link = el.querySelector('.accordion__link');

      if (window.matchMedia("(max-width: 868px)").matches) {
        link.href = '#autorSpace'
      }

      el.addEventListener('click', () => {
        const valueEl = el.textContent;

        const listAutor = document.querySelectorAll('.autor');

        for (let i of listAutor) {
          const autorName = i.querySelector('.autor__name').textContent;

          document.querySelector('.autor_active').classList.remove('autor_active');

          if (valueEl === autorName.trim()) {
            i.classList.add('autor_active');
            break
          }

          document.querySelector('.autor_none').classList.add('autor_active');
        }
      })
    })
  }

  openCatalogEl()

  /*функционал аккордеона*/

  function accordion() {
    let interval = null;
    document.querySelectorAll('.accordion__item').forEach(el => {
      el.querySelector('.accordion__row').addEventListener('click', () => {
        if (!el.classList.contains('accordion_action') && document.querySelector('.accordion_action')) {
          document.querySelectorAll('.accordion_action').forEach(el => {
            el.classList.remove('accordion_action');
            const value = el.querySelector('.accordion__row-value');
            const valueList = el.querySelector('.accordion__value');

            value.style.maxHeight = null;

            if (valueList.style.visibility === 'visible') {
              interval = setTimeout(() => {
                valueList.style.visibility = 'hidden';
              }, 100);
            }
          })
        }

        el.classList.toggle('accordion_action');

        const valueList = el.querySelector('.accordion__value');
        const value = el.querySelector('.accordion__row-value');

        if (valueList.style.visibility === 'visible') {
          interval = setTimeout(() => {
            valueList.style.visibility = 'hidden';
          }, 100);
        } else {
          valueList.style.visibility = 'visible';
        }

        if (value.style.maxHeight){
          value.style.maxHeight = null;
        } else {
          value.style.maxHeight = value.scrollHeight + "px";
        }
      })
    })
  }

  accordion();

  const swiper = new Swiper('.swiper-gallery', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 50,
    slidesPerGroup: 3,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: "fraction",
    },

    breakpoints: {

      320: {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
      },

      600: {
        spaceBetween: 34,
        slidesPerView: 2,
        slidesPerGroup: 2,
      },

      1199: {
        spaceBetween: 50,
        slidesPerView: 3,
        slidesPerGroup: 3,
      }
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const swiperEvents = new Swiper('.swiper-events', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 50,
    slidesPerGroup: 3,


    breakpoints: {

      320: {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
      },

      600: {
        spaceBetween: 34,
        slidesPerView: 2,
        slidesPerGroup: 2,
      },

      999: {
        spaceBetween: 27,
        slidesPerView: 3,
        slidesPerGroup: 3,
      },

      1199: {
        spaceBetween: 50,
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
    },

    pagination: {
      el: ".swiper-events-pagination",
      clickable: true,
      type: 'bullets',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
    },
  });

  const swiperProjects = new Swiper('.swiper-projects', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 50,
    slidesPerGroup: 3,

    breakpoints: {

      320: {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
      },

      600: {
        spaceBetween: 34,
        slidesPerView: 2,
        slidesPerGroup: 2,
      },

      999: {
        spaceBetween: 50,
        slidesPerView: 2,
        slidesPerGroup: 2,
      },

      1199: {
        spaceBetween: 50,
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-projects-button-next',
      prevEl: '.swiper-projects-button-prev',
    },
  });

  const swiperHero = new Swiper('.hero-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    autoplay: {
      delay: 4000,
    },
  });

  /*кастомный скролл*/
  document.querySelectorAll('.menu-art__select-value').forEach(el => {
    new SimpleBar(el);
  })

  /*функционал второго меню*/

  function openListMenu() {
    document.querySelectorAll('.menu-art__item').forEach(el => {
      el.querySelector('.menu-art__select').addEventListener('click', () => {
        const svg = el.querySelector('svg');
        if (document.querySelector('.menu-art__select-value_active')) {
          document.querySelector('.menu-art__select-value_active').classList.remove('menu-art__select-value_active');
          document.querySelector('.menu-art__svg_active').classList.remove('menu-art__svg_active');
        }
        svg.classList.add('menu-art__svg_active')
        el.querySelector('.menu-art__select-value').classList.add('menu-art__select-value_active')
      })
    })

    window.addEventListener('click', i => {
      const target = i.target.className;
      console.log(target)
      if(target === 'menu-art__item' || target === 'menu-art__select' || target === 'menu-art__text') {
        return
      }

      if (document.querySelector('.menu-art__select-value_active')) {
        document.querySelector('.menu-art__svg_active').classList.remove('menu-art__svg_active');
        document.querySelector('.menu-art__select-value_active').classList.remove('menu-art__select-value_active');
      }
    })
  }

  openListMenu()

  /*Валидация*/

  const validate = new window.JustValidate('#form', {
    errorLabelCssClass: 'class-validate',
      errorLabelStyle: {
        color: 'red',
        textDecoration: 'underlined',
      },
      focusInvalidField: true,
      lockForm: true,
      tooltip: {
        position: 'top',
      }
  })

  validate
    .addField('#name', [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Имя должно состоять минимум из 3 символов',
      },
      {
        rule: 'maxLength',
        value: 30,
      },
      {
        rule: 'customRegexp',
        value: /^([a-zа-яё]+|\d+)$/i,
        errorMessage: 'Имя введено некорректно',
      },
      {
        rule: 'required',
        errorMessage: 'Введите имя',
      },
    ])
    .addField('#tel', [
      {
        rule: 'required',
        errorMessage: 'Необходимо внести телефон',
      },
      {
        rule: 'number',
        errorMessage: 'Телефон введен некорректно',
      },
    ]);



  /*Функционал модального окна*/

  function openModal() {
    const modal = document.querySelector('.gallery-modal');

    document.querySelectorAll('.slider__slide').forEach( el => {
      el.addEventListener('click', () => {
        const img = el.querySelector('img');

        modal.classList.add('gallery-modal_active');

        const modalImg = modal.querySelector('.gallery-modal__img');

        modalImg.src = img.src;

        // if (document.querySelector('.gallery-modal_active')) {
        //   document.body.style.height = '100vh';

        //   document.body.style.overflow = `hidden`;
        // }
      });
    })

    const btnCloseModal = document.querySelector('.gallery-modal__btn');

    btnCloseModal.addEventListener('click', () => {
      modal.classList.remove('gallery-modal_active');

      // document.body.style.height = '';

      // document.body.style.overflow = ``;
    })

    modal.addEventListener('click', i => {
      const target = i.target.className;

      if(target === 'gallery-modal gallery-modal_active') {
        modal.classList.remove('gallery-modal_active');
      }
    });
  }

  openModal()
  //Подключаем карту
  // Функция ymaps.ready() будет вызвана, когда
  // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  ymaps.ready(init);
  function init(){
      // Создание карты.
      var myMap = new ymaps.Map("map", {
          // Координаты центра карты.
          // Порядок по умолчанию: «широта, долгота».
          // Чтобы не определять координаты центра карты вручную,
          // воспользуйтесь инструментом Определение координат.
          center: [55.758468, 37.601088],
          // Уровень масштабирования. Допустимые значения:
          // от 0 (весь мир) до 19.
          zoom: 15
      }, {
        searchControlProvider: 'yandex#search'
    }),

    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),

    myPlacemarkWithContent = new ymaps.Placemark([55.758468, 37.601088], {
        hintContent: 'Собственный значок метки с контентом',
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: '../img/map-icon.svg',
        // Размеры метки.
        iconImageSize: [20, 20],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-24, -24],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [15, 15],
        // Макет содержимого.
        iconContentLayout: MyIconContentLayout
    });

  myMap.geoObjects
    .add(myPlacemarkWithContent);
  }
});
