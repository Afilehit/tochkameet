ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [55.745508, 37.435225],
            zoom: 13,
            params: {
                avoidTrafficJams: true
            }
        }, {
            searchControlProvider: 'yandex#search'
        });
    //var mrC = new ymaps.multiRouter.
    //console.log(mrC)
    var multiRoute = new ymaps.multiRouter.MultiRoute({
        referencePoints: [
            "Москва, Парк Победы",
            "Москва, Красная площадь"
            
        ],
        params: {
            avoidTrafficJams: true
        }
        }, {
            // Автоматически устанавливать границы карты так,
            // чтобы маршрут был виден целиком.
            boundsAutoApply: true
        });
    
        // Добавление маршрута на карту.
        console.log(multiRoute)
        myMap.geoObjects.add(multiRoute);
}
