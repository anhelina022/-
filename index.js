let btn = document.querySelector("button");
let ul = document.querySelector("ul");

let page = 1;
let perPage = 10;

btn.addEventListener("click", async () => {
  let url = `https://pixabay.com/api/?key=55452633-c04e299450091da3b967905d2&q=yellow+flowers&image_type=photo&per_page=${perPage}&page=${page}`;
  try {
    const response = await fetch(url);
    page += 1;

    if (page > 1) {
      btn.textContent = "Fetch more posts";
    }
  } catch (error) {
    console.log(error);
  }
});

function postPhoto(ul) {
    `<li><img src="https://posterjack.ca/cdn/shop/articles/landscape_photography_tips_featured_image.jpg?v=1563408049&width=1500" with="150px"heith="200px"></li>`;
  }
