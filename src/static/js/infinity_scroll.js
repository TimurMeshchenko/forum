let offset = 0;
const limit = 30;

let is_all_articles_loaded = false;
let is_active_addition_articles = false;

add_articles_html();

window.addEventListener("scroll", async () => {
    if (
      is_last_article_scrolled() &&
      !is_active_addition_articles &&
      !is_all_articles_loaded
    ) {
      is_active_addition_articles = true;
      await add_articles_html();
      is_active_addition_articles = false;
    }
});

function is_last_article_scrolled() {
  const article_element = document.querySelector(".main-page__product");
  const scrolledHeight = window.innerHeight + window.scrollY;

  return (
    scrolledHeight + article_element.offsetHeight >=
    document.documentElement.scrollHeight
  );
} 

async function add_articles_html() {
  const articles_page_html = await get_articles_page_html();

  document
    .querySelector(".main-page__content")
    .insertAdjacentHTML("beforeend", articles_page_html);

  offset += limit;
}

async function get_articles_page_html() {
    const response = await fetch(
      `${window.location.href}/api/get_articles_page?offset=${offset}&limit=${limit}`
    );
    const articles_page_html_dict = await response.json();
    const articles_page_html = articles_page_html_dict["articles"];
    return articles_page_html;
}