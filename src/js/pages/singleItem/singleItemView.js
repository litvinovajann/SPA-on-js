export function render(object) {
    console.log(object)
    const appContainer = document.querySelector('#app');
    const markup = `<div class="container p-0">
    <div class="heading-1">
    , 45,5 м2 за 4 250 000 ₽
    </div>

    <!-- object -->
    <div class="object">
        <!-- object__photo -->
        <div class="object__photo">
            <div class="object__photo-wrapper">
                <img src="img/slider-item/photo.png" alt="" />
            </div>
        </div>
        <!-- // object__photo -->

        <!-- object__desc -->
        <div class="object__desc">
            <div class="object__desc-sector">
                ЖК Генеральский
            </div>

            <div class="object__desc-name">
                <div class="object__desc-title">
                    Студия, 45,5 м2
                </div>
                <div class="object__desc-art">ГЕН-112-42</div>

                <!-- Добавить в избранное -->
                <button class="button-favourite">
                    <i class="fas fa-heart"></i> <span>В избранное</span>
                </button>

                <!-- В Избранном -->
                <button class="button-favourite button-favourite--active">
                    <i class="fas fa-heart"></i> <span>В избранном</span>
                </button>

            </div>

            <div class="object__desc-details">
                <!-- params -->
                <div class="params">
                    <div class="params__item">
                        <div class="params__definition">Корпус</div>
                        <div class="params__value">3</div>
                    </div>
                    <div class="params__item">
                        <div class="params__definition">Этаж</div>
                        <div class="params__value">8</div>
                    </div>
                    <div class="params__item">
                        <div class="params__definition">Номер</div>
                        <div class="params__value">121</div>
                    </div>
                    <div class="params__item">
                        <div class="params__definition">Комнат</div>
                        <div class="params__value">2</div>
                    </div>
                </div>
                <!-- // params -->
            </div>

            <div class="details">
                <div class="details__row">
                    <div class="details__name">Стоимость</div>
                    <div
                        class="details__value details__value--price"
                    >
                        4 200 000 ₽
                    </div>
                </div>
                <div class="details__row">
                    <div class="details__name">Цена за м2</div>
                    <div class="details__value">64 000 ₽/м2</div>
                </div>
                <div class="details__row">
                    <div class="details__name">Площадь</div>
                    <div class="details__value">60 м2</div>
                </div>
            </div>

            <button class="button-order">Забронировать</button>
            <!-- <button class="button-preview">Записаться на просмотр</button> -->
        </div>
        <!-- // object__desc -->
    </div>
    <!-- // object -->
</div>

<div class="container">
    <a href="index.html" class="back-to-results"
        >← Вернуться к результатам поиска</a
    >
            </div>`;
    appContainer.insertAdjacentHTML('beforeend', markup)
}