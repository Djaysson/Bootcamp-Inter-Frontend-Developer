const BASE_URL = "https://thatcopy.pw/catapi/rest/";
const btn = document.getElementById("nextCat");

const fetchApi = async () => {
  try {
    const data = await fetch(BASE_URL)
      .then((res) => res.json())
      .catch((err) => {
        console.log(err.message);
      });

    return data.webpurl;
  } catch (err) {}
};

const loadImages = async () => {
  const img = document.getElementById("image");
  img.src = await fetchApi();
};

btn.addEventListener("click", loadImages);

loadImages();
