console.log("hello this is josh it's feb. 7")

const pic_buttons = document.getElementsByName("pic-button")
const text = document.querySelector("#text")
const photo = document.querySelector("#photo")

function change_pic(pic) {
    text.innerHTML = "here's a picture of " + pic + "."
    photo.src = "images/" + pic + ".jpg" 
}

pic_buttons.forEach(button => {
    button.addEventListener("change", event => {
        change_pic(button.value)
    })
})