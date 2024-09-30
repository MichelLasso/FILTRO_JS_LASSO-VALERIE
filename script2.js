//consultar titulos de todas las peli
fetch("https://imdb.iamidiotareyoutoo.com/justwatch?q=L")
.then(res=> res.json())
.then(peliculas=>{
    console.log(peliculas);

    for(let i in peliculas.description){

        console.log(peliculas.description[i]);

        document.getElementById("contAll").innerHTML+=`
        <div class="card" id="cont">
            <div class="head">
                <div>
                    <h2>Title <span>${peliculas["description"][i]["title"]}</span></h2>
                    <h5>Título de la película</h5>
                </div>
            </div>
		</div>
    `
    }
})

