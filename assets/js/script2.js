const pass1 = document.querySelector("#input1")
const pass2 = document.querySelector("#input2")
const pass3 = document.querySelector("#input3")
const access = document.querySelector("#access")
const enter = document.querySelector("#enter")

enter.addEventListener("click", function verifyPassword() {
    const d = pass1.value
    const e = pass2.value
    const f = pass3.value
    const password = d + e + f

    if (d == 9 && e == 1 && f == 1) {
        access.innerHTML = "Password 1 correcto :)"
        access.style.color = "green"
    } else if (d == 7 && e == 1 && f == 4) {
        access.innerHTML = "Password 2 correcto :)"
        access.style.color = "green"
    } else {
        access.innerHTML = "Password incorrecto :("
        access.style.color = "red"
    }
})