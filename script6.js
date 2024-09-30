

//Consulta los títulos, años de lanzamiento originales y tipos de objetos de películas.
fetch("https://imdb.iamidiotareyoutoo.com/search?q=q")
.then(res => res.json())
.then(allPeli=>{
    console.log(allPeli);
    for(let i in allPeli.description){
        console.log(allPeli.description[i]);

        document.getElementById("contAll").innerHTML+=`
        <div class="card" id="cont">
            <div class="head">
                <div>
                    <h2>Title <span>${allPeli["description"][i]["#AKA"]}</span></h2>
                    <div class="contImg"><img src="${allPeli["description"][i]["#IMG_POSTER"]}"class="img"></div>
                    <p>IMBD-ID <span>${allPeli["description"][i]["#IMDB_ID"]}</span><p>
                    <h5>Título y año de peliculas</h5>
                </div>
            </div>
		</div>
    `
    }
}
)

