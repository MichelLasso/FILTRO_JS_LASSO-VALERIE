
//consultar las url de las Programas de TV
fetch("https://imdb.iamidiotareyoutoo.com/search?q=L")
.then(res => res.json())
.then(url=>{
    console.log(url);
    for(let i in url.description){
        console.log(url.description[i]);

        document.getElementById("contAll").innerHTML+=`
        <div class="card" id="cont">
            <div class="head">
                <div>
                    <h2>Title <span>${url["description"][i]["#TITLE"]}</span></h2>
                    <div class="contImg"><img src="${url["description"][i]["#IMG_POSTER"]}"class="img"></div>
                    <p><span>${url["description"][i]["#IMDB_URL"]}</span></p>
                    <h5>Título y Url de Programas de TV</h5>
                </div>
            </div>
		</div>
    `
    }
}
)

//consultar las url de las peliculas
fetch("https://imdb.iamidiotareyoutoo.com/search?q=q")
.then(res => res.json())
.then(url=>{
    console.log(url);
    for(let i in url.description){
        console.log(url.description[i]);

        document.getElementById("contAll").innerHTML+=`
        <div class="card" id="cont">
            <div class="head">
                <div>
                    <h2>Title <span>${url["description"][i]["#TITLE"]}</span></h2>
                    <div class="contImg"><img src="${url["description"][i]["#IMG_POSTER"]}"class="img"></div>
                    <p><span>${url["description"][i]["#IMDB_URL"]}</span></p>
                    <h5>Título y Url de Películas</h5>
                </div>
            </div>
		</div>
    `
    }
}
)

