const fulImgBox = document.getElementById("fulImgBox"),
fulImg = document.getElementById("fulImg");

function openFulImg(reference) { //Ingreso a cada imagen
    fulImgBox.style.display = "flex";
    fulImg.src = reference;
}

function closeImg() { //Cierro las imagenes con el X
    fulImgBox.style.display = "none";
    
}