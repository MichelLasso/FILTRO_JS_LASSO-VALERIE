
//consultar por año y titulo de peli
fetch("https://imdb.iamidiotareyoutoo.com/search?q=q")
.then(res => res.json())
.then(buscar=>{
    console.log(buscar);
    for(let i in buscar.description){
        console.log(buscar.description[i]);

        document.getElementById("contAll").innerHTML+=`
        <div class="card" id="cont">
            <div class="head">
                <div>
                    <h2>Title <span>${buscar["description"][i]["#AKA"]}</span></h2>
                    <div class="contImg"><img src="${buscar["description"][i]["#IMG_POSTER"]}"class="img"></div>
                    <h5>Año y titulo</h5>
                </div>
            </div>
		</div>
    `
    }
}
)

//consultar por año y titulo de Programas de TV
fetch("https://imdb.iamidiotareyoutoo.com/search?q=L")
.then(res => res.json())
.then(series=>{
    console.log(series);
    for(let i in series.description){
        console.log(series.description[i]);

        document.getElementById("contAll").innerHTML+=`
        <div class="card" id="cont">
            <div class="head">
                <div>
                    <h2>Title <span>${series["description"][i]["#AKA"]}</span></h2>
                    <div class="contImg"><img src="${series["description"][i]["#IMG_POSTER"]}"class="img"></div>
                    <h5>Año y titulo</h5>
                </div>
            </div>
		</div>
    `
    }
}
)
