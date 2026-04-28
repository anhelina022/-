let btn = document.querySelector("button");
let ul = document.querySelector("ul");

let page = 1;
let perPage = 10;

btn.addEventListener("click", async () => {
  let url = `https://pixabay.com/api/?key=55452633-c04e299450091da3b967905d2&q=yellow+flowers&image_type=photo&per_page=${perPage}&page=${page}`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    data.hits.forEach((photo) => {
      let li = document.createElement("li");
      let img = document.createElement("img");

      img.src = photo.webformatURL;
      img.alt = photo.tags;
      img.width = 200;

      li.appendChild(img)
      ul.appendChild(li)
    });

    page += 1;
    btn.textContent = "Fetch more posts";

  } catch (error) {
    console.log(error);
  }
});
