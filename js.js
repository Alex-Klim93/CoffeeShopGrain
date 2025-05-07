
document.querySelectorAll('.aboutUs__cart').forEach(cart => {
    const imgAboutUs = cart.querySelector('img');
    
    // Добавляем плавный переход через CSS
    imgAboutUs.style.transition = 'transform 0.3s ease'; 

    cart.addEventListener('mouseenter', () => {
        imgAboutUs.style.transform = 'scale(1.2)'; // Увеличение изображения
    });

    cart.addEventListener('mouseleave', () => {
        imgAboutUs.style.transform = 'scale(1)'; // Возврат к исходному размеру
    });
});

document.querySelectorAll('.menu__cart').forEach(cart => {
    const imgMenu = cart.querySelector('img');
    
    // Добавляем плавный переход через CSS
    imgMenu.style.transition = 'transform 0.3s ease'; 

    cart.addEventListener('mouseenter', () => {
        imgMenu.style.transform = 'scale(1.2)'; // Увеличение изображения
    });

    cart.addEventListener('mouseleave', () => {
        imgMenu.style.transform = 'scale(1)'; // Возврат к исходному размеру
    });
});



//-----------------функция управления скоростью прокрутки-------------

window.addEventListener('beforeunload', function() {
    window.scrollTo(0, 0); // Прокрутка к началу страницы при перезагрузке
});

// Плавная прокрутка при клике на ссылки
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Отменяем стандартное поведение ссылки

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const targetPosition = target.getBoundingClientRect().top + window.scrollY - 60; // Учитываем смещение в 120px
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth' // Плавная прокрутка
            });
        }
    });
});

//--------------------Добавление карты на страницу------------------------

  // Замените 'YOUR_API_KEY' на ваш реальный ключ API Яндекс.Карт
  const mapContainer = document.getElementById('search__map');

  // Функция для инициализации карты
  function initMap() {
      const map = new ymaps.Map(mapContainer, {
          center: [59.938676, 30.314494], // Координаты центра карты (Москва)
          zoom: 10,
          controls: []
      });
    
      // Добавляем маркер на карту
     const placemark = new ymaps.Placemark([59.938676, 30.314494], {
          balloonContent: 'Москва'
      });
    
      map.geoObjects.add(placemark);
  }

  // Загружаем API Яндекс.Карт
  const script = document.createElement('script');
  script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";
  script.onload = () => ymaps.ready(initMap);
  document.head.appendChild(script);

  

//-----------------Очистка input при blur-------------------------------

const inputElements = document.querySelectorAll('.search__form_input');

        inputElements.forEach(input => {
            let originalValue = input.value;

            input.addEventListener('focus', () => {
                originalValue = input.value; // Сохраняем текущее значение
                input.value = ''; // Очищаем поле
                input.classList.add('cleared'); // Добавляем класс для эффекта
            });

            input.addEventListener('blur', () => {
                if (input.value === '') {
                    input.value = originalValue; // Возвращаем оригинальное значение
                }
                input.classList.remove('cleared'); // Убираем класс
            });
        });
