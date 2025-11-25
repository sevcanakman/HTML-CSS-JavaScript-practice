// Karanlık Mod
const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "Aydınlık Modu Aç";
    } else {
        themeBtn.textContent = "Karanlık Modu Aç";
    }
});


// Sayaç
let count = 0;
const counter = document.getElementById("counter");
const increaseBtn = document.getElementById("increase");
const resetBtn = document.getElementById("reset");

increaseBtn.addEventListener("click", function() {
    count++;
    counter.textContent = count;
});

resetBtn.addEventListener("click", function() {
    count = 0;
    counter.textContent = count;
});


// Mesaj Gösterme
const msgBtn = document.getElementById("msg-btn");
const message = document.getElementById("message");

msgBtn.addEventListener("click", function() {
    message.textContent = "JavaScript başarıyla çalıştı! 🎉";
    message.classList.remove("hidden");
});
