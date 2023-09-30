//criando posters
function criarPosters(dados) {
  const main = document.querySelector(".main");
  main.innerHTML = "";

  for (let i = 0; i < dados.data.length; i++) {
    const anime = dados.data[i];

    const section1 = document.createElement("section");
    section1.classList.add("animes");

    const section2 = document.createElement("section");
    section2.classList.add("anime");

    const poster = document.createElement("img");
    poster.classList.add("anime-poster");
    poster.src = anime.attributes.posterImage.small;

    const title = document.createElement("p");
    title.classList.add("anime-name");
    title.innerHTML = anime.attributes.canonicalTitle;

    section1.appendChild(section2);
    section2.appendChild(poster);
    section2.appendChild(title);
    document.querySelector(".main").append(section1);
  }
}

//buscando anime na API
async function buscarAnime(anime) {
  try {
    const response = await fetch(
      `https://kitsu.io/api/edge/anime?filter[text]=${anime}`
    );
    const animeData = await response.json();
    criarPosters(animeData);
  } catch (error) {
    console.log(error);
  }
}

//capturando valor do input
function botaoClicado() {
  const anime = document.getElementById("anime-input").value;
  buscarAnime(anime);
}
