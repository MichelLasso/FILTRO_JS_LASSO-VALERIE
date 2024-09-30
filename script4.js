
//consultar id y titulos de todas las peli
fetch("https://imdb.iamidiotareyoutoo.com/justwatch?q=L")
.then(res=> res.json())
.then(idPeli=>{
    console.log(idPeli);

    for(let i in idPeli.description){

        console.log(idPeli.description[i]);

        document.getElementById("contAll").innerHTML+=`
        <div class="card" id="cont">
            <div class="head">
                <div>
                    <h2>Title <span>${idPeli["description"][i]["title"]}</span></h2>
                    <p>id <span>${idPeli["description"][i]["id"]}</span></p>
                    <h5>Título y id de la película</h5>
                </div>
            </div>
		</div>
    `
    }
})


