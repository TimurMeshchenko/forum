  const searchInput = document.getElementById("searchInput");
  const autocomplete_element = document.querySelector(".autocomplete");

  searchInput.addEventListener("input", async () => await listen_search())
  searchInput.addEventListener("click", async () => await listen_search())
  document.addEventListener("click", remove_autocomplete);

  async function listen_search() {
    const input_value = searchInput.value;
    const products = await get_matched_products(input_value);

    displaySuggestions(products);
    await listen_suggestions_click();
  }

  async function get_matched_products(input_value) {
    const response = await fetch(
      `${window.location.href}api/get_products_by_search?product_name=${input_value}`
    );
    const product_dict = await response.json();
    const products = product_dict["products"];
    return products;
  }

function displaySuggestions(products) {
    autocomplete_element.innerHTML = get_autocomplete_content();

    const autocomplete_list =
      autocomplete_element.querySelector("ul");

    products.forEach((product) => {
      const item = get_autocomplete_item(product);
      autocomplete_list.insertAdjacentHTML("beforeend", item);
    });
}

function get_autocomplete_content() {
    return `
            <div class="autocomplete__content">
                <div class="autocomplete__scroll-container">
                    <ul class="autocomplete__list autocomplete__list--grouped" data-jsv-df="">                                        
                    </ul>
                    <script type="jsv/1264_"></script>
                    <script type="jsv/1263_"></script>
                    <script type="jsv/1262_"></script>
                    <script type="jsv/1261_"></script>
                    <script type="jsv/1046_"></script>
                    <script type="jsv/498^"></script>
                </div>
            </div>
    `;
}

function get_autocomplete_item(product) {
    return `
        <li data-nm-id="${product.id}" class="autocomplete__item j-suggest autocomplete__item--category"
            data-link="class{merge: selected toggle='selected'}" data-type="category">
            <p class="autocomplete__text"> <span class="autocomplete__phrase">${product.name}</span>
                <script type="jsv#1267_"></script> 
            </p> <img class="autocomplete__category-logo"
                src=/media/${product.image} width="36"
                height="48">
        </li>    
    `;
}

async function listen_suggestions_click() {
    const suggestions = document.querySelectorAll(".autocomplete__item");
    suggestions.forEach((suggestion) => {
      suggestion.addEventListener("click", async () => {
        autocomplete_element.innerHTML = "";
        await handle_product_click(suggestion);
      });
    });
}

function remove_autocomplete(event) {
    const is_clicked_outside_autocomplete =
      autocomplete_element && !autocomplete_element.contains(event.target);
    
    if (is_clicked_outside_autocomplete) {
      autocomplete_element.innerHTML = ''
    }
}
