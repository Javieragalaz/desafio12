let photo = document.querySelector("img");

photo.addEventListener("click", function borderColor() {

    if (photo.style.border == "none") {
        photo.style.border = "solid 2px red"

    }

    else {
        photo.style.border = "none"

    }

})







