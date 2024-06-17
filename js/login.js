var btn = document.getElementById("btn")
var txt = document.getElementById("txt")
var imgg = document.getElementById("imgg")
var frm1 = document.getElementById("frm1")
var frm2 = document.getElementById("frm2")
var uname = document.getElementById("uname")
var pass = document.getElementById("pass")
var uname2 = document.getElementById("uname2")
var mail = document.getElementById("mail")
var pass2 = document.getElementById("pass2")
var cpass2 = document.getElementById("cpass2")
var bx = document.getElementById("bx")
var btn1 = document.getElementById("btn1")
var btn2 = document.getElementById("btn2")
var inputs = document.querySelectorAll('input')

btn.addEventListener('click',function(e){
    e.preventDefault()
    if(window.screen.width <= 768){
        if(btn.innerHTML == "SIGNUP"){
            imgg.style.transform = "translateY(135%)"
            imgg.style.height = "42.5%"
            imgg.style.backgroundSize = "cover"
            btn.innerHTML = "LOGIN"
            txt.innerHTML = "Already have an account ?"
        }else{
            imgg.style.transform = "translateY(0)"
            imgg.style.height = "57.5%"
            imgg.style.backgroundSize = "cover"
            btn.innerHTML = "SIGNUP"
            txt.innerHTML = "Don't have an account ?"
        }
    }else{
        if(btn.innerHTML == "SIGNUP"){
            imgg.style.transform = "translateX(-101%)"
            btn.innerHTML = "LOGIN"
            txt.innerHTML = "Already have an account ?"
        }else{
            imgg.style.transform = "translateX(0)"
            btn.innerHTML = "SIGNUP"
            txt.innerHTML = "Don't have an account ?"
        }
    }

    inputs.forEach(element => {
        element.style.outline = "none"
    });
})

btn1.addEventListener('click',function(e){
    e.preventDefault()
    if(uname.value == ""){
        uname.style.outline = "2px solid red"
    }
    if(pass.value == ""){
        pass.style.outline = "2px solid red"
    }
    if(uname.value != "" && pass.value != ""){
        frm1.submit()
    }
})

btn2.addEventListener('click',function(e){
    e.preventDefault()
    if(uname2.value == ""){
        uname2.style.outline = "2px solid red"
    }
    if(mail.value == ""){
        mail.style.outline = "2px solid red"
    }
    if(pass2.value == ""){
        pass2.style.outline = "2px solid red"
    }
    if(cpass2.value == ""){
        cpass2.style.outline = "2px solid red"
    }
    if(cpass2.value != pass2.value){
        pass2.style.outline = "2px solid red"
        cpass2.style.outline = "2px solid red"
    }
    if(!bx.checked){
        bx.style.outline = "2px solid red"
    }
    if(uname2.value != "" && pass2.value != "" && mail.value != "" && cpass2.value != "" && bx.checked && pass2.value == cpass2.value){
        frm2.submit()
    }
})

function press(event){
    if(this == uname){
        uname.style.outline='none'
    }
    if(this == pass){
        pass.style.outline='none'
    }
    if(this == uname2){
        uname2.style.outline='none'
    }
    if(this == mail){
        mail.style.outline='none'
    }
    if (this == pass2) {
        pass2.style.outline = 'none'
    }
    if(this == cpass2){
        cpass2.style.outline='none'
    }
    if(this == bx){
        bx.style.outline='none'
    }
}

uname.addEventListener('click',press)
pass.addEventListener('click',press)
uname2.addEventListener('click',press)
mail.addEventListener('click',press)
pass2.addEventListener('click',press)
cpass2.addEventListener('click',press)
bx.addEventListener('click',press)