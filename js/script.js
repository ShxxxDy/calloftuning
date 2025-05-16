var numero_immagini = 12; // Numero totale di immagini nel slider
var immagine_attuale = 1; // Indice dell'immagine attualmente visualizzata

var immagine_successiva = document.getElementById('next'); // Selettore per il pulsante "Successiva"
var immagine_precedente = document.getElementById('prev'); // Selettore per il pulsante "Precedente"

// Funzione per visualizzare l'immagine successiva
function next() {
    immagine_attuale++; // Aumenta l'indice dell'immagine attuale
    if (immagine_attuale > numero_immagini) { // Se l'indice supera il numero totale di immagini
        immagine_attuale = 1; // Torna alla prima immagine
    }
    // Nasconde tutte le immagini
    for (let i = 1; i <= numero_immagini; i++) {
        document.querySelector(".slides img:nth-child(" + i + ")").style.display = "none";
    }
    // Visualizza l'immagine corrispondente all'indice attuale
    document.querySelector(".slides img:nth-child(" + immagine_attuale + ")").style.display = "block";
}

// Funzione per visualizzare l'immagine precedente
function prev() {
    immagine_attuale--; // Decrementa l'indice dell'immagine attuale
    if (immagine_attuale < 1) { // Se l'indice è minore di 1
        immagine_attuale = numero_immagini; // Vai all'ultima immagine
    }
    // Nasconde tutte le immagini
    for (let i = 1; i <= numero_immagini; i++) {
        document.querySelector(".slides img:nth-child(" + i + ")").style.display = "none";
    }
    // Visualizza l'immagine corrispondente all'indice attuale
    document.querySelector(".slides img:nth-child(" + immagine_attuale + ")").style.display = "block";
}

// Aggiunge un listener di eventi per il pulsante "Successiva" che chiama la funzione "next" al clic
immagine_successiva.addEventListener('click', next);
// Aggiunge un listener di eventi per il pulsante "Precedente" che chiama la funzione "previous" al clic
immagine_precedente.addEventListener('click', prev);

// Imposta un intervallo per chiamare la funzione "next" ogni 5 secondi
setInterval(next, 5000); // ogni 5 secondi passa alla immagine successiva

// BURGER MENU



var hamburger = document.querySelector(".hamburger");
var navMenu = document.querySelector(".nav-menu");
var menuItems = document.querySelectorAll(".nav-menu a");
var nav = document.querySelector("nav");
const hero = document.querySelector(".hero");

window.addEventListener("scroll", function () {
    const heroHeight = hero.offsetHeight;
    if (window.scrollY > heroHeight) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});

hamburger.onclick = function () {
    navMenu.classList.toggle("active");
    nav.classList.toggle("active");
};

menuItems.forEach(function (item) {
    item.onclick = function () {
        navMenu.classList.remove("active");
        nav.classList.remove("active");
    };
});

// //Leggi di più Chi siamo

// var chiSiamoButton = document.querySelector(".toggle-chi-siamo");
// var chiSiamoParagrafo = document.querySelector(".show_chi_siamo");

// chiSiamoButton.onclick = function () {
//   if (chiSiamoParagrafo.classList.contains("invisible")) {
//     chiSiamoParagrafo.classList.remove("invisible");
//     chiSiamoButton.innerHTML = 'Mostra di meno <i class="bi bi-arrow-up"></i>';
//   } else {
//     chiSiamoParagrafo.classList.add("invisible");
//     chiSiamoButton.innerHTML = 'Leggi di più <i class="bi bi-arrow-right"></i>';
//   }
// };

// Leggi di più Articoli

document.querySelectorAll(".articolo").forEach(function (articolo) {
    var button = articolo.querySelector(".toggle-button");
    var paragrafo = articolo.querySelector(".show_article");
  
    button.onclick = function () {
      if (paragrafo.classList.contains("invisible")) {
        paragrafo.classList.remove("invisible");
        button.innerHTML = 'Mostra di meno <i class="bi bi-arrow-up"></i>';
      } else {
        paragrafo.classList.add("invisible");
        button.innerHTML = 'Leggi di più <i class="bi bi-arrow-right"></i>';
      }
    };
  });
  