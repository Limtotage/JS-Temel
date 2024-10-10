let Oyuncu = document.getElementById("Oyuncu");
let Top = document.getElementById("Top");
let Puan_Ekranda = document.getElementById("Puan");
let Top_Puan_Ekranda = document.getElementById("Top_Puan");
let Oyun = document.getElementById("Oyun");

let OyuncuX = 175;
let Oyuncu_Hizi = 10;
let TopX = Math.random() * 370;
let TopY = 0;
let Top_Hizi = 2;
let Puan = 0;
let En_Yuksek_Puan=0;

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft" && OyuncuX > 0) {
    OyuncuX -= Oyuncu_Hizi;
  }
  if (event.key === "ArrowRight" && OyuncuX < 350) {
    OyuncuX += Oyuncu_Hizi;
  }
  Oyuncu.style.left = OyuncuX + "px";
});


function Top_Dussene() {
  TopY += Top_Hizi;
  Top.style.top = TopY + "px";
  Top.style.left = TopX + "px";
  if (TopY + 30 >= 350 && TopX + 30 >= OyuncuX && TopX <= OyuncuX + 50) {
    Puan++;
    Puan_Ekranda.innerText = Puan;
    Top_Puan_Ekranda.innerText = En_Yuksek_Puan;
    Top_Dussene_Tekrar();
  }
  if (TopY > 400) {
    Kaybettin_Tekrar_Dus();
  }
}


function Top_Dussene_Tekrar() {
  TopY = 0;
  TopX = Math.random() * 370;
  Top_Hizi += 0.2;
  Oyuncu_Hizi += 10;
}
function Kaybettin_Tekrar_Dus(){
  if(En_Yuksek_Puan<Puan) En_Yuksek_Puan=Puan;
  TopY = 0;
  TopX = Math.random() * 370;
  Top_Hizi = 2; 
  Oyuncu_Hizi = 10;
  Puan = 0;
  Top_Puan_Ekranda.innerText = En_Yuksek_Puan;
  Puan_Ekranda.innerText = Puan;
}

function Oyun_Dongusu() {
  Top_Dussene();
  requestAnimationFrame(Oyun_Dongusu);
}

Oyun_Dongusu();
