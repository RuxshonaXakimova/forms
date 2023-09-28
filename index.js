let form = document.forms.main
let inps = document.querySelectorAll('input')
let feels = document.querySelectorAll('#feel')
let spanTop = document.querySelectorAll('.text_top')
let spansBottom = document.querySelectorAll('.text_bottom')
let imgs = document.querySelectorAll('img')
let regex_check = document.querySelectorAll('.regex_check')
let all = document.querySelector('.all')
let need = document.querySelector('.need')
let success = document.querySelector('.success')
let error = document.querySelector('.error')



imgs.forEach(img => {
    img.classList.add('none')
})

spanTop.forEach(top=> {
    top.style.color = 'blue'
})

feels.forEach(feel => {
    feel.style.borderColor = 'blue'
})



let pattern = {
    name: /^[a-z ,.'-]+$/i,
    email: /^\S+@\S+\.\S+$/,
    phone: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
    age: /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/
}

regex_check.forEach(regex => {
    regex.onkeyup = () => {
        if(pattern[regex.getAttribute('name')].test(regex.value)){
            regex.style.borderColor = 'blue'
        } else {
            regex.style.borderColor = 'red'
        }
    }
})




let success_count = 12

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

    inps.forEach(inp => {
        if(inp.value.length == 0) {
            success_count--
        }
    })
    console.log(user);

    form.reset();

    
    success.innerHTML = `Success:${success_count}/12`
    error.innerHTML = `Error:${12-success_count}/12`
}


all.innerHTML = `All:${inps.length}`
need.innerHTML = `Need:${feels.length}`

