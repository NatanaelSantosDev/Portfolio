var typed = new Typed('.typing', {
    strings: ["Desenvolvedor WEB", "FrontEnd", "Graduado", "Desenvolvedor"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})

const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length;

for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function (event) {
        event.preventDefault();

        for (let j = 0; j < totalNavList; j++) {
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
    });
}

function showSection(element) {
    const href = element.getAttribute("href").split("#");
    const target = href[1];

    const sections = document.querySelectorAll(".section");
    sections.forEach(section => section.classList.remove("active"));

    const targetSection = document.getElementById(target);
    if (targetSection) {
        targetSection.classList.add("active");
    };
}

const hireMeBtn = document.querySelector(".btn.hire-me");
hireMeBtn.addEventListener("click", function (event) {
    event.preventDefault();

    for (let j = 0; j < totalNavList; j++) {
        navList[j].querySelector("a").classList.remove("active");
    }

    document.querySelector('.nav a[href="#contact"]').classList.add("active");

    const sections = document.querySelectorAll(".section");
    sections.forEach(section => section.classList.remove("active"));

    const targetSection = document.getElementById("contact");
    if (targetSection) {
        targetSection.classList.add("active");
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const navToggler = document.querySelector('.nav-toggler');
    const aside = document.querySelector('.aside');

    navToggler.addEventListener('click', function () {
        aside.classList.toggle('active');
    });
});