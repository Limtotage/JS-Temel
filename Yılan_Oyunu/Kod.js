const Alan = document.getElementById("Oyun_Alani");
const Goruntuleyici = Alan.getContext("2d");
const Kare_Boyutu = 20;  // Hücre boyutu
const Kare_Sayisi = Alan.width / Kare_Boyutu;  // Kaç kare olduğunu belirliyoruz
let Yilan_dizisi = [{ x: 10, y: 10 }];  // Yılan başlangıç pozisyonu
let Yilan_Yonu = { x: 1, y: 0 };  // Yılanın hareket yönü (sağ)
let Yemek = { x: 5, y: 5 };  // Yiyeceğin başlangıç pozisyonu
let Puan = 0;  // Puan
let Yuksek_Puan = 0;
let Oyun_Bittimi = false;
let Tekrar = false;
// Oyunun ana döngüsü
function Oyun_Dongusu() {
    if (Oyun_Bittimi) {
        Goruntuleyici.fillStyle = "red";
        Goruntuleyici.font = "40px Arial";
        Goruntuleyici.fillText("Kaybettiniz!", Alan.width / 4, Alan.height / 2);
        Goruntuleyici.fillStyle = "green";
        Goruntuleyici.font = "20px Arial";
        Goruntuleyici.fillText("Tekrar Denemek icin ", (Alan.width / 4), (Alan.height / 2)+30);
        Goruntuleyici.fillText("\"r\" tuşuna basınız.", (Alan.width / 4)+10, (Alan.height / 2)+60);
    }
    else {
        // Yılanı hareket ettir
        Yilan_Hareketi();

        // Yılan kendine çarptı mı kontrol et
        Carptimi();

        // Ekranı temizle
        Goruntuleyici.clearRect(0, 0, Alan.width, Alan.height);

        ciz();

        // Puanı ekrana yazdır
        Goruntuleyici.fillStyle = "black";
        Goruntuleyici.font = "20px Arial";
        Goruntuleyici.fillText("Puan: " + Puan, Alan.width - 100, 20);
        Goruntuleyici.fillText("En Yuksek Puan: " + Yuksek_Puan, Alan.width - 400, 20);

    }
    if(Tekrar){
        Goruntuleyici.clearRect(0, 0, Alan.width, Alan.height);
        if(Yuksek_Puan<Puan){
            Yuksek_Puan=Puan;
        }
        Puan=0;
        Yilan_dizisi.length=0;
        Yilan_dizisi = [{ x: 10, y: 10 }];  // Yılan başlangıç pozisyonu
        Yilan_Yonu = { x: 1, y: 0 };  // Yılanın hareket yönü (sağ)
        Yemek = { x: 5, y: 5 }; 
        Oyun_Bittimi=false;
        Tekrar = false;
    }
    // Oyun döngüsünü sürdür
    setTimeout(Oyun_Dongusu, 100);  // Her 100ms'de bir güncelleme
}

// Yılanı hareket ettir
function Yilan_Hareketi() {
    const Bas = { x: Yilan_dizisi[0].x + Yilan_Yonu.x, y: Yilan_dizisi[0].y + Yilan_Yonu.y };

    // Yılanın yiyeceği yedi mi kontrol et
    if (Bas.x === Yemek.x && Bas.y === Yemek.y) {
        Puan += 10;
        Yemek_Olustur();  // Yeni yiyecek oluştur
    } else {
        Yilan_dizisi.pop();  // Yılanın kuyruğunu kısalt
    }

    Yilan_dizisi.unshift(Bas);  // Yılanın başını yeni pozisyona ekle
}


function ciz() {
    //Yemek cizimi
    Goruntuleyici.fillStyle = "red";
    Goruntuleyici.fillRect(Yemek.x * Kare_Boyutu, Yemek.y * Kare_Boyutu, Kare_Boyutu, Kare_Boyutu);
    //Yılan Çizimi
    Goruntuleyici.fillStyle = "green";
    for (let i = 0; i < Yilan_dizisi.length; i++) {
        Goruntuleyici.fillRect(Yilan_dizisi[i].x * Kare_Boyutu, Yilan_dizisi[i].y * Kare_Boyutu, Kare_Boyutu, Kare_Boyutu);
    }
}

// Yeni yiyecek oluştur
function Yemek_Olustur() {
    Yemek = {
        x: Math.floor(Math.random() * Kare_Sayisi),
        y: Math.floor(Math.random() * Kare_Sayisi),
    };

    // Yiyecek yılanın üstüne gelirse yeniden oluştur
    for (let i = 0; i < Yilan_dizisi.length; i++) {
        if (Yemek.x === Yilan_dizisi[i].x && Yemek.y === Yilan_dizisi[i].y) {
            Yemek_Olustur();
        }
    }
}

// Yılanın kendine çarpıp çarpmadığını kontrol et
function Carptimi() {
    const Bas = Yilan_dizisi[0];

    // Duvarlara çarpma kontrolü
    if (Bas.x < 0 || Bas.x >= Kare_Sayisi || Bas.y < 0 || Bas.y >= Kare_Sayisi) {
        Oyun_Bittimi = true;
    }

    // Yılanın kendi vücuduna çarpma kontrolü
    for (let i = 1; i < Yilan_dizisi.length; i++) {
        if (Bas.x === Yilan_dizisi[i].x && Bas.y === Yilan_dizisi[i].y) {
            Oyun_Bittimi = true;
        }
    }
}

// Klavye yön tuşlarıyla yılanı kontrol et
window.addEventListener("keydown", function (Hareket) {
    switch (Hareket.key) {
        case "ArrowUp":
            if (Yilan_Yonu.y === 0) { Yilan_Yonu = { x: 0, y: -1 }; }
            break;
        case "ArrowDown":
            if (Yilan_Yonu.y === 0) { Yilan_Yonu = { x: 0, y: 1 }; }
            break;
        case "ArrowLeft":
            if (Yilan_Yonu.x === 0) { Yilan_Yonu = { x: -1, y: 0 }; }
            break;
        case "ArrowRight":
            if (Yilan_Yonu.x === 0) { Yilan_Yonu = { x: 1, y: 0 }; }
            break;
    }
});
window.addEventListener("keydown",function(tkr){
    if(tkr.key==="r"||tkr.key==="R"){
        Tekrar=true;
    }
})
// Oyunu başlat
Oyun_Dongusu();
