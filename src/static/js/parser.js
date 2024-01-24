const articles_a_element = document.querySelectorAll(".article-card-search__link");
const articles_objects = [];
const extra_elements = [
  ".read-also",
  "footer",
  ".article-card-header",
  ".authors",
  ".article-card-actions",
];

for (let i = 0; i < articles_a_element.length; i++) {
  const article_url = articles_a_element[i].href;
  const article_content = await get_article_content(article_url);
  const tempDiv = document.createElement("div");

  tempDiv.innerHTML = article_content;

  const main_element = tempDiv.querySelector(".single-article__content");

  for (let extra_element of extra_elements) {
    main_element.querySelector(extra_element).remove();
  }
  
  const imgs = await get_article_imgs(main_element);

  const article_object = {
    'title': main_element.querySelector(".article-card__title").textContent,
    'content': main_element.outerHTML,
    'imgs': imgs
  }

  articles_objects.push(article_object);
}

console.log(articles_objects);

async function get_article_content(article_url) {
  const response = await fetch(article_url);
  const data = await response.text();
  return data;
}

async function get_article_imgs(main_element) {
  uncover_noscript(main_element);

  const all_imgs = main_element.querySelectorAll("img");
  const article_imgs = [];

  for (let img of all_imgs) {
    const sources = img.srcset.split(",");
    const lastSource = sources[sources.length - 1].trim();
    const lastImageUrl = lastSource.split(" ")[0];

    img.src = lastImageUrl;
    img.removeAttribute("srcset");

    article_imgs.push(lastImageUrl);
  }

  return article_imgs;
}

async function uncover_noscript(main_element) {
  const noscripts_elements = main_element.querySelectorAll("noscript");

  for (let noscript of noscripts_elements) {
    noscript.outerHTML = noscript.innerHTML;
  }
}
