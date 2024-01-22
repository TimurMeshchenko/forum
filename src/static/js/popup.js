let product_element = undefined;

async function listen_products_click() {
  const products_elements = document.querySelectorAll(
    ".product-card__top-wrap"
  );

  for (let i = offset; i < products_elements.length; i++) {
    products_elements[i].addEventListener(
      "click",
      async () => await handle_product_click(products_elements[i])
    );
  }
}

async function handle_product_click(product_element) {
  await add_popup(product_element);
  await add_gray_background();
  await listen_remove_popup();
  await lock_scroll();
}

async function add_popup(_product_element) {
  product_element = _product_element;
  const product_id = product_element.dataset.nmId;
  const product_parent_element = product_id
    ? product_element
    : product_element.parentNode.parentNode;
  const product = await get_product(product_parent_element);
  const popup_html = await get_popup_html(product);

  document.querySelector("body").insertAdjacentHTML("afterbegin", popup_html);

  check_popup_product_in_basket(product.id);
}

async function get_popup_html(product) {
  return `
    <div data-nm-id="${
      product.id
    }" class="popup i-popup-same-part-kt j-product-popup shown"
        style="z-index: 301; opacity: 1; display: block; top: 50%;left: 50%;transform: translate(-50%, -50%);height: 100%;overflow: auto;"><p
            class="j-close popup__close close"></p>
        <div class="content">
            <script type="jsv#1169_"></script>
            <script type="jsv#679^"></script>
            <script type="jsv#1170_"></script>
            <div class="product"
                data-link="     {on 'click mouseenter mousedown' '.j-wba-card-item' cardCommonActionEventsWba}     {on 'click' '.j-find-similar' $analitic.proceedAndSave 'ISP'}     {on 'mouseenter elementInViewportEvent' '.j-wba-card-item-show' cardCommonShowEventsWba}     class{merge: selectedNomenclature^adult &amp;&amp; !$adult^isConfirmed toggle='for-adults'}"
                id="bc9f57a6-5438-2ab4-e92a-4d260b2be65b" data-jsv="#680^/680^#681^/681^#682^/682^">
                <div class="product__slider-wrap">
                    <div class="product__slider"
                        data-link="{on $adult.proceedIfAdultConfirmed selectedNomenclature^adult null}{include galleryModel tmpl=galleryModel.template}"
                        data-jsv="#684^/684^">
                        <script type="jsv#1173_"></script>
                        <div id="61eed013-37b1-5b5b-6e24-e9be8f1b1f10" class="sw-slider-photo-product">
                            <div class="sw-slider-photo-product__wrap">
                                <div
                                    class="swiper-container j-sw-photo-product-popup swiper-container-initialized swiper-container-horizontal">
                                    <ul class="swiper-wrapper" data-jsv-df=""
                                        style="transform: translate3d(0px, 0px, 0px);">
                                        <li data-jsv="#693^#1174_#1175_#1176_"
                                            class="swiper-slide slide swiper-no-swiping swiper-slide-active"
                                            data-image-index="0">
                                            <div class="slide__content img-plug j-wba-card-item"
                                                data-name-for-wba="Item_Photo">
                                                <script type="jsv#1177_"></script>
                                                <script type="jsv#685^"></script>
                                                <script type="jsv#1178_"></script>
                                                <div class="zoom-image-container">
                                                    <img class="j-zoom-image" width="900" height="1200"
                                                        loading="lazy"
                                                        src=/media/${
                                                          product.image
                                                        }
                                                        data-jsv="#701^/701^"
                                                    <canvas class="j-image-canvas"
                                                        data-link="class{merge: !~tag.imageLoaded toggle='hide'}{on 'mousemove' ~tag.renderZoom}{on 'mouseleave' ~tag.resetCanvas}"
                                                        data-jsv="#703^/703^#704^/704^" width="900"
                                                        height="1200"></canvas>
                                                </div>
                                                <script type="jsv/1178_"></script>
                                                <script type="jsv/685^"></script>
                                                <script type="jsv/1177_"></script>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <script type="jsv/1173_"></script>
                    </div>
                    <div class="product__badge-wrap">
                        <p class="product__badge spec-action hide"
                            data-link="class{merge:(selectedNomenclature^promoText == null || selectedNomenclature^promoText == '')  toggle='hide'}style{:~getCustomPromoPanelStyle(selectedNomenclature^promoText)}">
                            <script type="jsv#674^"></script>
                            <script type="jsv#1171_"></script> <span class="spec-action__text"
                                data-link="text{:selectedNomenclature^promoText}"></span>
                            <script type="jsv/1171_"></script>
                            <script type="jsv/674^"></script>
                        </p>
                    </div>
                    <p class="product__for-adults">Товары для взрослых</p>
                </div>
                <div data-nm-id="${product.id}" class="product__content">
                    <div class="product__header-wrap"> <div class="product__header j-product-title"
                            data-link="href{urlForGood:selectedNomenclature^nmId true (targetInfo &amp;&amp; targetInfo.targetUrl) null isAdv}"
                            >
                            <span data-link="text{:selectedNomenclature^goodsName}">${
                              product.name
                            }</span> </div>
                    </div>
                    

                    <div data-nm-id="${product.id}" class="product__info-wrap"
                        data-link="class{merge: disableFullButton toggle='product__info-wrap--full'}">
                        <div data-link="{include priceModel tmpl=priceModel.template}">
                            <script type="jsv#1208_"></script>
                            <script type="jsv#776^"></script>
                            <script type="jsv/776^"></script>
                            <script type="jsv#778^"></script>
                            <script type="jsv#1209_"></script>
                            <div class="price-block">
                                <script type="jsv#777^"></script>
                                <script type="jsv#1210_"></script>
                                <div class="price-block__content">
                                    <div class="price-block__price-group">
                                        <p class="price-block__price-wrap "> <span class="price-block__price">
                                                <ins class="price-block__final-price"> ${Number(
                                                  product.price
                                                )}&nbsp;₽ </ins> </span>
                                            <script type="jsv#1211_"></script> 
                                            <script type="jsv/1211_"></script>
                                        </p>
                                    </div>
                                </div>
                                <script type="jsv/1210_"></script>
                                <script type="jsv/777^"></script>
                            </div>
                            <script type="jsv/1209_"></script>
                            <script type="jsv/778^"></script>
                            <script type="jsv/1208_"></script>
                        </div>
                        <div class="product__composition hide"
                            data-link="class{merge: !selectedNomenclature^consist toggle='hide'}{collapsibleBlock itemSelector='.j-consist-popup' maxCollapsedHeight=40 collapsedMsg='Развернуть состав' unCollapsedMsg='Свернуть состав'}"
                            data-jsv="#781^/781^">
                            <div class="collapsable">
                                <p class="collapsable__content j-consist-popup"
                                    style="max-height: 40px; -webkit-line-clamp: initial;"> <span>Состав:
                                    </span> <span data-link="text{:selectedNomenclature^consist}"></span> </p>
                                <div class="collapsible__bottom">
                                    <script type="jsv#1216_"></script>
                                    <script type="jsv#816^"></script>
                                    <script type="jsv/816^"></script>
                                    <script type="jsv#817^"></script>
                                    <script type="jsv/817^"></script>
                                    <script type="jsv/1216_"></script>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p style="color: black;">${product.description}</p>
                        </div>

                        <div class="product__order" data-link="{include orderModel tmpl=orderModel.template}">
                            <script type="jsv#1213_"></script>
                            <div class="order" data-link="class{merge: isDigital toggle='hide'}"> <button
                                    class="order__btn-buy btn-base hide"
                                    data-link="class{merge: !showAddToBasketBtn() || !$services.userData.userData.isAuthenticated || isPreorder toggle='hide'}class{merge:~short toggle='hide-mobile'}{on $adult.proceedIfAdultConfirmed adult buyItNow #data}"
                                    data-jsv="#789^/789^">Купить сейчас</button><a class="btn-base j-go-to-basket hide"
                                    href="/lk/basket" data-link="class{merge: !addedToBasket toggle='hide'}">
                                    Перейти в корзину </a> <button class="btn-main hide"
                                    data-link="class{merge: !showAddToWlBtn() toggle='hide'}{on $adult.proceedIfAdultConfirmed adult addToWl #data}"
                                    data-jsv="#798^/798^"> В избранное </button>
                                <p class="btn-main disabled j-add-to-wait-msg hide"
                                    data-link="class{merge: !addedToWl toggle='hide'}"> Добавлено в избранное
                                </p>
                            </div>
                            <script type="jsv#1214_"></script>
                            <script type="jsv#1215_"></script>
                            <script type="jsv/1215_"></script>
                            <script type="jsv/1214_"></script>
                            <script type="jsv/1213_"></script>
                        </div>

                        <div class="product__order" data-link="{include orderModel tmpl=orderModel.template}"><script type="jsv#2064_"></script><div class="order btn-order" data-link="class{merge: isDigital toggle='hide'}">    <button class="order__btn-buy btn-base hide" data-link="class{merge: !showAddToBasketBtn() || !$services.userData.userData.isAuthenticated || isPreorder toggle='hide'}class{merge:~short toggle='hide-mobile'}{on $adult.proceedIfAdultConfirmed adult buyItNow #data}" data-jsv="#961^/961^">Купить сейчас</button>    <button class="btn-main btn-popup" data-link="class{merge: !showAddToBasketBtn() toggle='hide'}{on $adult.proceedIfAdultConfirmed adult addToBasket #data}" aria-label="Добавить в корзину" data-jsv="#963^/963^">        <span class="hide-mobile" data-link="text{:isPreorder ? 'Предзаказ' : 'Добавить в корзину'}class{merge:~short toggle='hide'}">Добавить в корзину</span>        <span class="hide-desktop" data-link="text{:isPreorder ? 'Предзаказ' : 'В корзину'}class{merge:!~short toggle='hide-desktop'}">В корзину</span>    </button>    <a class="btn-base j-go-to-basket hide" href="/lk/basket" data-link="class{merge: !addedToBasket toggle='hide'}">        Перейти в корзину    </a>    <button class="btn-main hide" data-link="class{merge: !showAddToWlBtn() toggle='hide'}{on $adult.proceedIfAdultConfirmed adult addToWl #data}" data-jsv="#970^/970^">        В избранное    </button>    <p class="btn-main disabled j-add-to-wait-msg hide" data-link="class{merge: !addedToWl toggle='hide'}">        Добавлено в избранное    </p></div><script type="jsv#2065_"></script>    <script type="jsv#2066_"></script><script type="jsv/2066_"></script><script type="jsv/2065_"></script><script type="jsv/2064_"></script></div>
                        
                        <div class="product__delivery-wrap">
                            <p class="digital-info hide"
                                data-link="class{merge:!selectedNomenclature^isDigital toggle='hide'}text{:selectedNomenclature^isVideo ? 'Видеоматериалы будут доступны для просмотра в Личном кабинете сразу после покупки' : selectedNomenclature^isActivationKey ? 'Ключ активации будет доступен сразу после покупки в Личном кабинете, в полной версии сайта' : 'Электронная книга будет доступна для скачивания в Личном кабинете сразу после покупки'}">
                                Электронная книга будет доступна для скачивания в Личном кабинете сразу после
                                покупки</p>
                        </div>
                        <div class="product__advantages advantages"
                            data-link="class{merge: selectedNomenclature^allSizesSoldOut || selectedNomenclature^isDigital toggle='hide'}">
                            <ul class="advantages__list">
                                <li class="advantages__item advantages__item--refund hide"
                                    data-link="class{merge:selectedNomenclature.nonRefundable||selectedNomenclature^allSizesSoldOut || (deliveryHelper.deliveryInfoModel &amp;&amp; deliveryHelper.deliveryInfoModel^isCargo) toggle='hide'}">
                                    14 дней на возврат</li>
                                <li class="advantages__item advantages__item--fitting hide"
                                    data-link="class{merge: selectedNomenclature^isCargo || !selectedNomenclature.canFit toggle='hide'}">
                                    Примерка</li>
                            </ul>
                            <div class="advantages__rise advantages-rise hide"
                                data-link="class{merge:!(deliveryHelper.deliveryInfoModel &amp;&amp; deliveryHelper.deliveryInfoModel^isCargo) || (deliveryHelper.deliveryInfoModel &amp;&amp; deliveryHelper.deliveryInfoModel^isComputedDeliveryCost) toggle='hide'}">
                                <div class="advantages-rise__icon"> <img
                                        src="//static-basket-01.wbbasket.ru/vol0/i/v3/product-page/avatar.webp"
                                        alt="" width="40" height="40"> </div>
                                <div class="advantages-rise__text"> Бережно доставим, поднимем на этаж
                                    и&nbsp;занесем в
                                    квартиру. И все это <span>бесплатно!</span> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <script type="jsv/1170_"></script>
            <script type="jsv/679^"></script>
            <script type="jsv/1169_"></script>
        </div>
    </div>
    `;
}

function check_popup_product_in_basket(product_id) {
  const button_basket_div = document.querySelector(".btn-order");

  if (basket_products_id.has(Number(product_id))) {
    change_button_in_basket(button_basket_div.querySelector(".btn-popup"));
  } else {
    button_basket_div.addEventListener("click", save_popup_product_id);
  }
}

function save_popup_product_id(event) {
  const button_basket_div = document.querySelector(".btn-order");
  let product_basket_button =
    product_element.parentNode.querySelector(".product-card__add-basket") ||
    get_product_basket_button_if_search();

  const button_basket = event.currentTarget
    .closest(".btn-order")
    .querySelector(".btn-popup");

  save_product_id(button_basket);
  change_button_in_basket(product_basket_button);

  button_basket_div.removeEventListener("click", save_popup_product_id);
  product_basket_button.removeEventListener("click", save_product_id);
}

function get_product_basket_button_if_search() {
  const popup_id = document.querySelector(".popup").dataset.nmId;
  const products_elements = document.querySelectorAll(".main-page__product");

  for (let product_element of products_elements) {
    if (product_element.dataset.nmId == popup_id) {
      product_basket_button = product_element.querySelector(
        ".product-card__add-basket"
      );

      return product_basket_button;
    }
  }
}

async function add_gray_background() {
  const popup_element = document.querySelector(".popup");
  const gray_background_element_str = `
            <div class="overlay initially-hidden j-custom-overlay" style="z-index: 300;"></div>
        `;
  popup_element.insertAdjacentHTML("afterend", gray_background_element_str);
}

async function listen_remove_popup() {
  const popup_element = document.querySelector(".popup");
  const close_popup_element = popup_element.querySelector(".j-close");
  const gray_background_element = document.querySelector(".overlay");

  close_popup_element.addEventListener("click", () =>
    remove_popup(popup_element)
  );
  gray_background_element.addEventListener("click", () =>
    remove_popup(popup_element)
  );
}

async function remove_popup(popup_element) {
  const overlay_element = document.querySelector(".overlay");

  popup_element.remove();
  document.body.classList.remove("body--overflow");
  overlay_element.remove();
}

async function lock_scroll() {
  document.body.classList.add("body--overflow");
}
