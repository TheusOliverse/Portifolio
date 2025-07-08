const add = document.getElementById("side");

function addside() {
    add.classList.toggle("addside");
}

function removeside() {
    add.classList.toggle("addside");
}

//animação de interface

window.addEventListener('scroll', () => {
    if (window.scrollY < 100) {
        document.getElementById("role").classList.remove("role_ani");
        document.getElementById("titulo").classList.remove("titulo2");
        document.getElementById("header").style.transition = '1s';
        document.getElementById("header").style.backgroundColor = '';
        document.getElementById("icon_animado").classList.remove("icon_animado2");
        document.getElementById("dev").classList.add("dev2");
    } else{
        document.getElementById("role").classList.add("role_ani");
        document.getElementById("titulo").classList.add("titulo2");
        document.getElementById("header").style.transition = '1s';
        document.getElementById("header").style.backgroundColor = 'black';
        document.getElementById("icon_animado").classList.add("icon_animado2");
        document.getElementById("dev").classList.remove("dev2");
    }
})
window.addEventListener('scroll', () => {
    if (window.scrollY > 560) {
        document.getElementById("caixa3").classList.remove("caixaani");
    } else {
        document.getElementById("caixa3").classList.add("caixaani");
    }
})
window.addEventListener('scroll', () => {
    if (window.scrollY > 550) {
        document.getElementById("caixa4").classList.remove("caixaani");
    } else {
        document.getElementById("caixa4").classList.add("caixaani");
    }
})
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        document.getElementById("caixa").classList.remove("caixaani");
    } else {
        document.getElementById("caixa").classList.add("caixaani");
    }
})
window.addEventListener('scroll', () => {
    if (window.scrollY > 550) {
        document.getElementById("caixa2").classList.remove("caixaani");
    } else {
        document.getElementById("caixa2").classList.add("caixaani");
    }
})
window.addEventListener('scroll', () => {
    if (window.scrollY > 140) {
        document.getElementById("ola").style.transition = '1s';
        document.getElementById("ola").style.scale = '100%';
    } else {
        document.getElementById("ola").style.transition = '1s';
        document.getElementById("ola").style.scale = '0%';
    }
})
window.addEventListener('scroll', () => {
    if (window.scrollY > 1000) {
        document.getElementById("proje").style.transition = '1s';
        document.getElementById("proje").style.scale = '100%';
    } else {
        document.getElementById("proje").style.transition = '1s';
        document.getElementById("proje").style.scale = '0%';
    }
})
window.addEventListener('scroll', () => {
    if (window.scrollY > 1100) {
        document.getElementById("proje1").style.transition = '1s';
        document.getElementById("proje1").style.scale = '100%';
    } else {
        document.getElementById("proje1").style.transition = '1s';
        document.getElementById("proje1").style.scale = '0%';
    }
})
window.addEventListener('scroll', () => {
    if (window.scrollY > 1300) {
        document.getElementById("proje2").style.transition = '1s';
        document.getElementById("proje2").style.scale = '100%';
    } else {
        document.getElementById("proje2").style.transition = '1s';
        document.getElementById("proje2").style.scale = '0%';
    }
})
window.addEventListener('scroll', () => {
    if (window.scrollY > 1500) {
        document.getElementById("proje3").style.transition = '1s';
        document.getElementById("proje3").style.scale = '100%';
    } else {
        document.getElementById("proje3").style.transition = '1s';
        document.getElementById("proje3").style.scale = '0%';
    }
})
window.addEventListener('scroll', () => {
    if (window.scrollY > 1800) {
        document.getElementById("skill").style.transition = '1s';
        document.getElementById("skill").style.scale = '100%';
    } else {
        document.getElementById("skill").style.transition = '1s';
        document.getElementById("skill").style.scale = '0%';
    }
})
window.addEventListener('scroll', () => {
    if (window.scrollY > 1900) {
        document.getElementById("skill1").style.transition = '1s';
        document.getElementById("skill1").style.scale = '100%';
    } else {
        document.getElementById("skill1").style.transition = '1s';
        document.getElementById("skill1").style.scale = '0%';
    }
})
window.addEventListener('scroll', () => {
    if (window.scrollY > 2100) {
        document.getElementById("skill2").style.transition = '1s';
        document.getElementById("skill2").style.scale = '100%';
    } else {
        document.getElementById("skill2").style.transition = '1s';
        document.getElementById("skill2").style.scale = '0%';
    }
})
window.addEventListener('scroll', () => {
    if (window.scrollY > 2200) {
        document.getElementById("skill3").style.transition = '1s';
        document.getElementById("skill3").style.scale = '100%';
    } else {
        document.getElementById("skill3").style.transition = '1s';
        document.getElementById("skill3").style.scale = '0%';
    }
})
window.addEventListener('scroll', () => {
    if (window.scrollY > 2300) {
        document.getElementById("skill4").style.transition = '1s';
        document.getElementById("skill4").style.scale = '100%';
    } else {
        document.getElementById("skill4").style.transition = '1s';
        document.getElementById("skill4").style.scale = '0%';
    }
})
window.addEventListener('scroll', () => {
    if (window.scrollY > 2400) {
        document.getElementById("skill5").style.transition = '1s';
        document.getElementById("skill5").style.scale = '100%';
    } else {
        document.getElementById("skill5").style.transition = '1s';
        document.getElementById("skill5").style.scale = '0%';
    }
})
document.getElementById("role").style.display = 'none'
window.addEventListener('scroll', () => {
    if (window.scrollY > 2500) {
        document.getElementById("ms").style.transition = '1s';
        document.getElementById("ms").style.scale = '100%';
    } else {
        document.getElementById("ms").style.transition = '1s';
        document.getElementById("ms").style.scale = '0%';
    }
})
window.addEventListener('scroll', () => {
    if (window.scrollY > 2600) {
        document.getElementById("form").style.transition = '1s';
        document.getElementById("form").style.scale = '100%';
    } else {
        document.getElementById("form").style.transition = '1s';
        document.getElementById("form").style.scale = '0%';
    }
})
document.getElementById("fundo").classList.remove("fundo2")
window.addEventListener('scroll', () => {
    if (window.scrollY > 750) {
        document.getElementById("fundo").classList.add("fundo2");
    } else {
        document.getElementById("fundo").classList.remove("fundo2");
    }
})