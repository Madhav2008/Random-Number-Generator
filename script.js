let btn = document.querySelector(".btn");

function getRandomNumber(low, high) {
    let r = Math.floor(Math.random() * (high - low + 1)) + low;
    return r;
}

btn.addEventListener("click", function() {
    let no = getRandomNumber(1, 100);
    let zero = document.querySelector(".zero");
    zero.textContent = no;
})