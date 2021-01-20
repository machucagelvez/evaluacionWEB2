let urlHaggard = "https://api.spotify.com/v1/artists/7wHPtfK57nbFkg3k16BV5O/top-tracks?market=US"
let urlRammstein = "https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1/top-tracks?market=US"
let urlBuenaVista = "https://api.spotify.com/v1/artists/11kBu957KTYoAltZHDm8gW/top-tracks?market=US"
let urlToken = "https://accounts.spotify.com/api/token"
let token = "Bearer BQDrzg8yW3ZckjA0qXJm5NCbrLpYH1sTwYEyY8RaxG24ybGR-U02ck4txqi1x81BYkh9D_aGgsqzTJW_IIs18Npv-0iOlQECMV5JZGop2sDXzAN4g4qP-TFAcWY0n33imKbBsPpKtPiMkl5KoPruEa72S_b9tPnNQ07nV2w"

let llave1 = "grant_type=client_credentials"
let llave2 = "client_id=0ceff9cab82e479a87aecedb6c3116fb"
let llave3 = "client_secret=5038eb36d21741a884e13b3287bff3cb"

let parametrosToken = {
    method: "POST",
    headers: {"Content-Type": 'application/x-www-form-urlencoded'},
    body: `${llave1}&${llave2}&${llave3}`
}

fetch(urlToken, parametrosToken)
    .then(respuesta => respuesta.json())
    .then(datos => obtenerToken(datos))

function obtenerToken(datos){
    let token = datos.token_type + " " + datos.access_token
    let parametrosArtista = {
        method: "GET",
        headers:{Authorization: token}
    }

    fetch(urlHaggard, parametrosArtista)
        .then(respuesta => respuesta.json())
        .then(datos => obtenerDatosHaggard(datos))

    fetch(urlRammstein, parametrosArtista)
        .then(respuesta => respuesta.json())
        .then(datos => obtenerDatosRammstein(datos))

    fetch(urlBuenaVista, parametrosArtista)
        .then(respuesta => respuesta.json())
        .then(datos => obtenerDatosBuenaVista(datos))
}
/*urls.forEach(url => {
    fetch(url, parametros)
        .then(respuesta => respuesta.json())
        .then(datos => depurarDatos(datos))
});*/

function obtenerDatosHaggard(datos) {
    console.log(datos.tracks[0].name)
    let titulo1 = document.getElementById("titulo1")
    let imagen1 = document.getElementById("imagen1")
    let audio1 = document.getElementById("audio1")
    let titulo2 = document.getElementById("titulo2")
    let imagen2 = document.getElementById("imagen2")
    let audio2 = document.getElementById("audio2")
    let titulo3 = document.getElementById("titulo3")
    let imagen3 = document.getElementById("imagen3")
    let audio3 = document.getElementById("audio3")

    titulo1.textContent = datos.tracks[1].name
    imagen1.src = datos.tracks[1].album.images[0].url
    audio1.src = datos.tracks[1].preview_url
    titulo2.textContent = datos.tracks[2].name
    imagen2.src = datos.tracks[2].album.images[0].url
    audio2.src = datos.tracks[2].preview_url
    titulo3.textContent = datos.tracks[3].name
    imagen3.src = datos.tracks[3].album.images[0].url
    audio3.src = datos.tracks[3].preview_url
}

function obtenerDatosRammstein(datos) {
    console.log(datos.tracks[0].name)
    let titulo4 = document.getElementById("titulo4")
    let imagen4 = document.getElementById("imagen4")
    let audio4 = document.getElementById("audio4")
    let titulo5 = document.getElementById("titulo5")
    let imagen5 = document.getElementById("imagen5")
    let audio5 = document.getElementById("audio5")
    let titulo6 = document.getElementById("titulo6")
    let imagen6 = document.getElementById("imagen6")
    let audio6 = document.getElementById("audio6")

    titulo4.textContent = datos.tracks[0].name
    imagen4.src = datos.tracks[0].album.images[0].url
    audio4.src = datos.tracks[0].preview_url
    titulo5.textContent = datos.tracks[1].name
    imagen5.src = datos.tracks[1].album.images[0].url
    audio5.src = datos.tracks[1].preview_url
    titulo6.textContent = datos.tracks[2].name
    imagen6.src = datos.tracks[2].album.images[0].url
    audio6.src = datos.tracks[2].preview_url
}

function obtenerDatosBuenaVista(datos) {
    console.log(datos.tracks[0].name)
    let titulo7 = document.getElementById("titulo7")
    let imagen7 = document.getElementById("imagen7")
    let audio7 = document.getElementById("audio7")
    let titulo8 = document.getElementById("titulo8")
    let imagen8 = document.getElementById("imagen8")
    let audio8 = document.getElementById("audio8")
    let titulo9 = document.getElementById("titulo9")
    let imagen9 = document.getElementById("imagen9")
    let audio9 = document.getElementById("audio9")

    titulo7.textContent = datos.tracks[0].name
    imagen7.src = datos.tracks[0].album.images[0].url
    audio7.src = datos.tracks[0].preview_url
    titulo8.textContent = datos.tracks[3].name
    imagen8.src = datos.tracks[3].album.images[0].url
    audio8.src = datos.tracks[3].preview_url
    titulo9.textContent = datos.tracks[6].name
    imagen9.src = datos.tracks[6].album.images[0].url
    audio9.src = datos.tracks[6].preview_url
}