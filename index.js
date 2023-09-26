let form = document.forms.main
let inps = document.querySelectorAll('input')
let feels = document.querySelectorAll('#feel')
let spanTop = document.querySelectorAll('.text_top')
let spansBottom = document.querySelectorAll('.text_bottom')
let imgs = document.querySelectorAll('img')

imgs.forEach(img => {
    img.classList.add('none')
})

spanTop.forEach(top=> {
    top.style.color = 'blue'
})

feels.forEach(feel => {
    feel.style.borderColor = 'blue'
})


form.onsubmit = (event) => {
    event.preventDefault();

    let error = false

    feels.forEach((feel, idx) => {
        if(feel.value == 0){
            error = true
            feels[idx].style.borderColor = 'red'
            spanTop[idx].style.color = 'red'
            spansBottom[idx].innerHTML = `Please answer to '${feel.name}'`
            spansBottom[idx].style.color = 'red'
            imgs[idx].classList.remove('none')
        } else if(!feel.value == 0){
            feels[idx].style.borderColor = 'blue'
            spanTop[idx].style.color = 'blue'
            spansBottom[idx].innerHTML = 'Need to feel'
            spansBottom[idx].style.color = 'blue'
            imgs[idx].classList.add('none')
        }
    })

    if(error == false) {
        submitFunction(form)
    } else{
        
    }
}


function submitFunction(form) {
    let user = {}

    let info = new FormData(form)

    info.forEach((value, key) => {
        user[key] = value
    })

    console.log(user);

    form.reset();
    
}