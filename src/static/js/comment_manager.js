const author_id = Math.floor(Math.random() * (1000 - 1) + 1);
const author_name = `user_${author_id}`;
const comments_element = document.querySelector(".comments");

update_data_callback = () => {
  comments_element.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="flex flex-row gap-2 md:gap-3 py-2" style="
        display: flex;
        border-radius: 10px;
        width: 100%;
        margin: 20px auto;
        padding: 0px 24px;
    "><p component="a" style="
        display: flex;
        align-items: center;
    "><img src="/forum/media/users_avatars/no_avatar.jpg" alt=""
          class="CommentAvatar_mediaAvatar__8Cd_g" style="
        width: 40px;
        border-radius: 9999px;
    "></p>
      <div class="CommentCard_mediaBody__dmb6q"
        style="overflow: hidden;border-radius: 12px;background: var(--bg-paper);font-size: 16px;line-height: 1.5;word-break: break-word;width: 100%;margin-left: 10px;">
        <div class="CommentCard_mediaContent__M6qW1 scoreBorder" style="
    ">
          <div class="CommentHeading_mediaHeading__H8tse flex items-center" style="
        min-height: 30px;
        font-size: 15px;
        overflow: hidden;
        align-items: center;
        display: flex;
    "><p component="a" class="CommentHeading_username__xmlzw" style="
        color: black;
        font-size: 13px;
        font-weight: 600;
    ">${author_name}</p>

          </div>
          <div>${comment_textarea.value}</div>
        </div>
      </div>
    </div>  
  `
  );

  comment_textarea.value = "";
};

function fetch_request(url, fetch_data, update_data_callback, method = "POST") {
  fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: fetch_data,
  })
    .then((response) => response.json())
    .then(update_data_callback);
}

document
  .querySelector(".Button_button__JOS9_")
  .addEventListener("click", () => {
    if (comment_textarea.value.length == 0)
        return

    const fetch_data = JSON.stringify({
      articles_id: articles_id,
      content: comment_textarea.value,
      author_name: author_name,
    });

    fetch_request(
      "/forum/api/create_comment",
      fetch_data,
      update_data_callback
    );
  });
