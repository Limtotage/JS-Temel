const Kelimeler = ['javascript','programlama', 'klavye',"sevgi","mutluluk",
    "masa", "kitap", "bilgisayar", "şehir", "deniz",
    "güneş", "yol", "araba", "ağaç", "telefon",
    "dağ", "kedi", "köpek", "kalem", "resim",
    "radyo", "müzik", "yazılım", "oyun", "defter",
    "uçak", "gitar", "çanta", "park", "film",
    "kamera", "saat", "harita", "çiçek", "tablet",
    "kapı", "elma", "bina", "köprü", "silgi",
    "yıldız", "televizyon", "yatak", "sandalye", "yüzük",
    "kahve", "su", "rüzgar", "kitaplık", "pilot",
    "tren", "dergi", "kumaş", "balık", "zeytin"
];
let Kelime = Kelimeler[Math.floor(Math.random() * Kelimeler.length)];
let Aranan_Kelime = Array(Kelime.length).fill('_');
let Yanlis_Tahminler = [];
let Kalan_Haklar = 6;
let bilinen_seri=0;
let puan=0;

function Ekran_Guncelle() {
    document.getElementById('Kelime').textContent = Aranan_Kelime.join(' ');
    document.getElementById('Yanlis_Tahminler').textContent = 'Yanlış Tahminler: ' + Yanlis_Tahminler.join(', ');
    document.getElementById('Hak').textContent = `Kalan Hak: ${Kalan_Haklar}`;
    document.getElementById('puan').textContent = `Puan: ${puan}`;
    document.getElementById('seri').textContent = `En Yüksek Puan: ${bilinen_seri}`;
}
function yeni_kelime(){//yeni kelime
    document.getElementById('Tahmin_Girdisi').disabled = false;
    Yanlis_Tahminler.length=0;
    Kelime = Kelimeler[Math.floor(Math.random() * Kelimeler.length)];
    Aranan_Kelime = Array(Kelime.length).fill('_');
    Kalan_Haklar += 3;
    document.getElementById('Mesaj').textContent = '';
    Ekran_Guncelle();
}
function Tahmin_Et() {
    let Tahmin = document.getElementById('Tahmin_Girdisi').value.toLowerCase();
    document.getElementById('Tahmin_Girdisi').value = '';
    if (!Tahmin || Tahmin.length !== 1) {//yanlış listesi
        document.getElementById('Mesaj').textContent = 'Lütfen bir harf girin!';
        return;
    }
    if (Aranan_Kelime.includes(Tahmin) || Yanlis_Tahminler.includes(Tahmin)) {//çıkmış listesi
        document.getElementById('Mesaj').textContent = 'Bu harfi zaten tahmin ettiniz!';
        return;
    }
    document.getElementById('Mesaj').textContent = ''; 
    if (Kelime.includes(Tahmin)) {
        for (let i = 0; i < Kelime.length; i++) {//tahmin kısmı
            if (Kelime[i] === Tahmin) {
                Aranan_Kelime[i] = Tahmin;
            }
        }
        if (!Aranan_Kelime.includes('_')) {//kazandık
            puan++;
            Ekran_Guncelle();
            document.getElementById('Mesaj').textContent = 'Tebrikler, kazandınız!';
            document.getElementById('Tahmin_Girdisi').disabled = true;
            return;
        }
    } else {
        Yanlis_Tahminler.push(Tahmin);
        Kalan_Haklar--;
        if (Kalan_Haklar === 0) {//kaybettik
            if(bilinen_seri<puan){
                bilinen_seri=puan;
            }
            puan=0;
            Kalan_Haklar=3;
            Ekran_Guncelle();
            document.getElementById('Mesaj').textContent = `Oyun bitti! Kelime: ${Kelime}`;
            document.getElementById('Tahmin_Girdisi').disabled = true;
            return;
        }
    }
    Ekran_Guncelle();
}
Ekran_Guncelle();
