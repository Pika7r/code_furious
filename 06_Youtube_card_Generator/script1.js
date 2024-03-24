const add = () => {
    document.getElementById("test").style.right = '0px'
    document.getElementById("test").style.transition = 'all 1s linear'
    document.getElementById("test").style.display = 'flex'
    document.getElementById("bro").style.display = 'none'
}

const cut = () => {
    document.getElementById("test").style.right = '650px'
    document.getElementById("bro").style.display = 'none'
}
let f = 1
const submit = () => {
    let a = document.getElementById("title").value
    let b = document.getElementById("cname").value
    let h = document.getElementById("timestamp").value
    let d = document.getElementById("views").value
    let e = document.getElementById("views-opt").value
    let i = document.getElementById("months-old").value
    i += " " + document.getElementById("views-opt").value + " ago"
    if (d >= 1000 && d <= 9999) {

        d = d[0] + "." + d[1] + "k"
    }
    else if (d > 9999 && d <= 99999) {
        d = d[0] + d[1] + "k"
    }
    else if (d > 99999 && d <= 999999) {
        d = d[0] + d[1] + d[2] + "k"
    }
    else if (d > 999999 && d <= 9999999) {
        d = d[0] + "M"
    }
    else if (d > 9999999 && d <= 99999999) {
        d = d[0] + d[1] + "M"
    }
    else if (d > 99999999 && d <= 999999999) {
        d = d[0] + d[1] + d[2] + "M"
    }
    else if (d > 999999999 && d <= 9999999999) {
        d = d[0] + "B"
    }
    else if (d > 9999999999 && d <= 99999999999) {
        d = d[0] + d[1] + "B"
    }
    else if (d > 99999999999 && d <= 999999999999) {
        d = d[0] + d[1] + d[2] + "B"
    }
    else {
        d = '🫡'
    }
    d = d + " views"
    document.getElementById("bro").style.display = 'block'
    document.getElementById("test").style.right = '650px'

    f++
    let g = "h4" + f
    document.getElementsByClassName("loop")[0].insertAdjacentHTML("afterbegin", "<div class=container><div class=vno><h4 class=h4></h4></div><div class=thumbnail><img src=https://i.ytimg.com/vi/kJQP7kiw5Fk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDMnrGS7UUfb2FyiKXj-RL4eGknVg  alt=image id=profile-pic><span class=op></span></div><div class=op1><div class=op2></div><div class=op3><span class=op4 title=CodeWithHarry></span><span> . </span><span class=op5>360k views</span><span> . </span><span class=op6></span></div></div><div class=burger-menu></div></div>")
    document.getElementsByClassName("h4")[0].classList.add(g)
    document.getElementsByClassName("op")[0].classList.add("timestamp")
    document.getElementsByClassName("op1")[0].classList.add("info")
    document.getElementsByClassName("op2")[0].classList.add("title")
    document.getElementsByClassName("op3")[0].classList.add("info-below-title")
    document.getElementsByClassName("op4")[0].classList.add("cname")
    document.getElementsByClassName("op5")[0].classList.add("views")
    document.getElementsByClassName("op6")[0].classList.add("months-old")
    document.getElementsByClassName(g)[0].innerHTML = f
    document.getElementsByClassName("op")[0].innerHTML = h
    document.getElementsByClassName("op2")[0].innerHTML = a
    document.getElementsByClassName("op4")[0].innerHTML = b
    document.getElementsByClassName("op5")[0].innerHTML = d
    document.getElementsByClassName("op6")[0].innerHTML = i

    let profilePic = document.getElementById("profile-pic");
    let inputFile = document.getElementById("input-file");
    let no = URL.createObjectURL(inputFile.files[0]);
    profilePic.src = no
}