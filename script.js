//solo se busca si está en la paguina

//buscar por año, imdb-ID y actores
var contenedor = document.getElementById("contAll");
document.getElementById("buscar").addEventListener("click", e=>{
    var idInput= document.getElementById("ingresar").value 
    let link= "https://imdb.iamidiotareyoutoo.com/search?q="+idInput

    if(link){
        console.log(link);
        fetch(link)
        .then(res=> res.json())
        .then(busqueda=>{
            console.log(busqueda);
            for(let i in busqueda.description){

                console.log(busqueda.description[i]);
                
                document.getElementById("contAll").innerHTML+=`
                <div class="card" id="cont">
                    <div class="head">
                        <div>
                            <h2>Title <span>${busqueda["description"][i]["#TITLE"]}</span></h2>
                            <p>Year <span>${busqueda["description"][i]["#YEAR"]}</span><p>
                            <p>IMBD-ID <span>${busqueda["description"][i]["#IMDB_ID"]}</span><p>
                            <p>actors <span>${busqueda["description"][i]["#ACTORS"]}</span><p>
                            <h5>Tú busqueda</h5>
                        </div>
                    </div>
                </div>`
            }
        })
    }
})
