const navigationUl = document.getElementsByTagName("ul");
const hamburger = document.getElementsByClassName("hamburger");
const close = document.getElementsByClassName("close");
const currentYear = document.getElementById("current__year");

hamburger[0].addEventListener("click", () => {
    navigationUl[0].classList.add("navigation-md");
    hamburger[0].style.display = "none";
    close[0].style.display = "block";
});

close[0].addEventListener("click", () => {
    navigationUl[0].classList.remove("navigation-md");
    hamburger[0].style.display = "flex";
    close[0].style.display = "none";
});

currentYear.innerText = new Date().getFullYear()
